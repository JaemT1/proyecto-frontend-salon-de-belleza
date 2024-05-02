import React, { useState } from 'react';
import Swal from 'sweetalert2'
import showAlertsService from '../services/showAlertsService';
import passwordRecoveryService from '../services/passwordRecoveryService';
import bcrypt from "bcryptjs-react";

const PasswordResetModal = ({ closeModal, correo }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    verificationCode: '',
    passwordToSend: '',
    email: correo,
  });

  const handleVerificationCodeChange = (e, index) => {
    const value = e.target.value;
    const newVerificationCode = [...verificationCode];

    if (value.match(/^\d+$/) || value === '') {
      // Permitir dígitos o valores vacíos en el código
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);

      if (value === '' && index > 0) {
        // Si el usuario borra un dígito y el campo está vacío, regresar al campo anterior
        document.getElementById(`verificationCode${index - 1}`).focus();
      } else if (index < 5 && value !== '') {
        // Avanzar al siguiente campo de entrada cuando se ingresa un dígito válido
        document.getElementById(`verificationCode${index + 1}`).focus();
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handlePasswordVerification = (password) => {
    // Verificar que la contraseña tenga al menos una mayúscula
    const uppercaseRegex = /(?=.*[A-Z])/;

    // Verificar que la contraseña tenga al menos un carácter especial [.,!-#$%]
    const specialCharRegex = /(?=.*[.,!-#$%])/;

    // Verificar que la contraseña tenga al menos un número
    const digitRegex = /(?=.*[0-9])/;

    // Verificar que la contraseña tenga al menos una letra
    const letterRegex = /(?=.*[a-zA-Z])/;

    if (uppercaseRegex.test(password) && specialCharRegex.test(password) &&
      digitRegex.test(password) && letterRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword == confirmPassword) {
      if (handlePasswordVerification(newPassword)) {
        setErrorMessage('');
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        formData.passwordToSend = hashedPassword;
        formData.verificationCode = verificationCode.join('');
        const response = passwordRecoveryService.passwordRecoveryChangePassword(formData);

        if (response) {
          // Mostrar un mensaje, por ejemplo, usando el servicio de alertas
          showAlertsService.showSuccessAlert('Contraseña cambiada', 'Contraseña cambiada con éxito.', false, 3000);
          // Esperar 2 segundos antes de redirigir y cerrar el modal
          setTimeout(() => {
            // Redirigir a '/'
            window.location.href = '/';
            closeModal(); // Cierra el modal después de enviar el formulario
          }, 2000);

        } else {
          // Manejar errores si la solicitud no fue exitosa
          showAlertsService.showErrorAlert('Codigo ingresado incorrecto', 'El código proporcionado no corresponde al enviado.', false, 3000);
        }
      } else {
        setErrorMessage('La contraseña debe tener al menos una mayúscula, un carácter especial y un número');
      }
    } else {
      setErrorMessage('Las contraseñas no coinciden o algún campo está vacío.');
      return;
    }
  };


  return (
    <div>
      <h2 className="font-serif font-bold text-gray-700 text-2xl text-center mb-4">CAMBIAR CONTRASEÑA</h2>
      <p className="text-center text-gray-600 mb-2 text-xl">Ingrese el código de verificación enviado a su correo <span className="font-bold">{correo}</span> </p>
      <div className="h-4"></div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4 flex justify-center">
          {verificationCode.map((digit, index) => (
            <input
              type="text"
              id={`verificationCode${index}`}
              name={`verificationCode${index}`}
              key={index}
              className="w-10 h-10 border text-center rounded mx-1 px-2 py-1 focus:outline-none focus:ring focus:ring-pink-400 focus:border-transparent border-pink-400 border-2"
              value={digit}
              onChange={(e) => handleVerificationCodeChange(e, index)}
              maxLength="1"
              required
            />
          ))}
        </div>
        <div className="border-b-2 border-pink-500">
          <label htmlFor="newPassword" className="mb-2 block text-gray-600 font-serif font-bold text-lg">Nueva Contraseña:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-transparent"
            minLength={10}
            maxLength={10}
            value={newPassword}
            onChange={handleInputChange}
            placeholder='**********'
            required
          />
        </div>
        <div className="border-b-2 border-pink-500">
          <label htmlFor="confirmPassword" className="mb-2 block text-gray-600 font-serif font-bold text-lg">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-transparent"
            minLength={10}
            maxLength={10}
            value={confirmPassword}
            placeholder='**********'
            onChange={handleInputChange}
            required
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="text-center">
          <button
            type="submit"
            className="font-mono w-full bg-pink-500 group relative bg-gradient-to-r bg-length-0 bg-position-right text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:bg-length-full hover:bg-position-0 transition duration-1000 hover:bg-pink-300"
          >
            Cambiar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetModal;
