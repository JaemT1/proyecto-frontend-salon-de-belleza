import React, { useState, useRef } from 'react';
import showAlertsService from '../services/showAlertsService';
import PasswordResetModal from './PasswordResetModal';
import passwordRecoveryService from '../services/passwordRecoveryService';

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
      showAlertsService.showLoadingAlert("Cargando", "Espere porfavor", 20000, false);

      // Mostrar indicador de carga
      setIsLoading(true);

      // Realizar la solicitud POST al servidor
      const response = await passwordRecoveryService.passwordRecoveryVerificationCode(formData.correo)

      // Ocultar indicador de carga
      setIsLoading(false);

      // Verificar si la solicitud fue exitosa (código de estado 2xx)
      if (response) {
        console.log('Solicitud exitosa. Puedes manejar la respuesta del servidor aquí si es necesario.');
        showAlertsService.showSuccessAlert('Código de Verificación', 'Código de verificación enviado.', false, 3000);
        // Mostrar el modal de cambio de contraseña después de enviar el formulario
        setShowPasswordResetModal(true);
        // Actualiza el estado para indicar que el formulario se ha enviado
        setIsFormSubmitted(true);
      } else {
        showAlertsService.showErrorAlert('Usuario No Encontrado', 'No existe usuario con ese correo.', false, 3000);
        closeModal();
      }
    } catch (error) {
      // Manejar errores de red o de la solicitud
      console.error('Error en la solicitud:', error.message);
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
          <PasswordResetModal closeModal={() => setShowPasswordResetModal(false)} correo={formData.correo} />
        )}
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;
