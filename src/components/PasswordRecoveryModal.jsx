import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2'
import PasswordResetModal from './PasswordResetModal';

const PasswordRecoveryModal = ({ closeModal }) => {

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  const modalRef = useRef(null);


  const [formData, setFormData] = useState({
    correo: '',
  });

  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      // Mostrar mensaje de carga
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera un momento.',
        icon: 'info',
        showConfirmButton: false,
      });

      // Mostrar indicador de carga
      setIsLoading(true);

      // Realizar la solicitud POST al servidor
      const response = await fetch('http://localhost:9009/auth/verificationCodePasswordRecovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: formData.correo }),
      });


      // Cerrar mensaje de carga
      Swal.close();

      // Ocultar indicador de carga
      setIsLoading(false);


      // Verificar si la solicitud fue exitosa (código de estado 2xx)
      if (response.ok) {
        console.log('Solicitud exitosa. Puedes manejar la respuesta del servidor aquí si es necesario.');
        Swal.fire({
          title: 'Código de Verificación',
          text: 'Código de verificación enviado.',
          icon: 'success',
          timer: '3000',
          showConfirmButton: false,
        });
        // Mostrar el modal de cambio de contraseña después de enviar el formulario
        setShowPasswordResetModal(true);
        // Actualiza el estado para indicar que el formulario se ha enviado
        setIsFormSubmitted(true);
      } else {
        // Manejar errores si la solicitud no fue exitosa
        console.error('Error en la solicitud:', response.status, response.statusText);
        Swal.fire({
          title: 'Usuario No Encontrado',
          text: 'No existe usuario con ese correo.',
          icon: 'error',
          timer: '3000',
          showConfirmButton: false,
        });
        closeModal();
      }
    } catch (error) {

      // Manejar errores de red o de la solicitud
      console.error('Error en la solicitud:', error.message);
      // Cerrar mensaje de carga en caso de error
      Swal.close();

      // Ocultar indicador de carga en caso de error
      setIsLoading(false);

      // Manejar errores de red o de la solicitud
      console.error('Error en la solicitud:', error.message);

    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg p-8 w-1/4" ref={modalRef}>
        <div className=" mb-4 w-auto m-auto">
          <img src="./src/images/GR-NEGRO.png" alt="logo" />
        </div>
        {!showPasswordResetModal ? (
          <>
            <h2 className="font-serif font-bold text-gray-700 text-2xl text-center mb-4">RECUPERAR CUENTA</h2>
            {!isFormSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4 border-b-2 border-pink-500" >
                  <p className="text-xl font-serif mb-4 text-center">Se enviará un código a tu correo para cambiar la contraseña, asegúrate de tener activo tu correo.</p>
                  <label htmlFor="correo" className="block font-bold font-serif">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:outline-none focus:ring-transparent focus:ring focus:border-transparent"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-pink-500 group relative bg-gradient-to-r bg-length-0 bg-position-right text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:bg-length-full hover:bg-position-0 transition duration-1000 hover:bg-pink-300"
                    disabled={isLoading} // Deshabilitar el botón mientras se está cargando
                  >
                    {isLoading ? 'Cargando...' : 'Enviar Código'}
                  </button>
                </div>
              </form>
            ) : null}
          </>
        ) : null}

        {showPasswordResetModal && (
          <PasswordResetModal closeModal={() => setShowPasswordResetModal(false)} cedula={formData.correo} />
        )}
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;
