import { React, useRef, useState } from 'react';
import Swal from 'sweetalert2'
import showAlertsService from '../services/showAlertsService';
import bcrypt from "bcryptjs-react";
import userRegisterService from '../services/usuarioRegisterService';


const RegisterForm = ({ closeRegisterModal }) => {

    const modalRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeRegisterModal();
        }
    };

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        fotoPerfil: null,
        contrasena: '',
        confirmarContrasena: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        if (type === 'file') {
            // Si el campo es de tipo archivo, guarda el archivo seleccionado
            const newValue = e.target.files[0];
            setFormData({
                ...formData,
                [name]: newValue,
            });
        } else {
            // Para otros campos, simplemente actualiza el valor
            setFormData({
                ...formData,
                [name]: value,
            });
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

        if(uppercaseRegex.test(password) && specialCharRegex.test(password) && 
            digitRegex.test(password) && letterRegex.test(password)){
            return true;
        }else{
            return false;
        }
    };

    const handlePasswordHashing = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(formData.contrasena, 10);
        formData.contrasena = hashedPassword;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.contrasena == formData.confirmarContrasena) { //Verifica que las contraseñas sean iguales
            if (handlePasswordVerification(formData.contrasena)) { //Verifica que la contraseña tenga los criterios de seguridad
                showAlertsService.showLoadingAlert("Cargando", "Espere porfavor", 3000, false);
                handlePasswordHashing(e); //Encripta la contraseña antes de enviarla al backend

                try {
                    // Carga la foto en Cloudinary
                    let imageUrl = null;
                    if (formData.fotoPerfil) {
                        imageUrl = await userRegisterService.uploadPhotoToCloudinary(formData.fotoPerfil, formData.correo);
                        console.log('Foto cargada en Cloudinary con éxito:', imageUrl);
                    }

                    const formularioUsuario = {
                        nombre: formData.nombre,
                        apellido: formData.apellido,
                        telefono: formData.telefono,
                        link_foto: imageUrl,
                        correo: formData.correo,
                        contrasena: formData.contrasena,
                        role: 'CUSTOMER'
                    };

                    //Guarda el usuario en base de datos
                    const response = await userRegisterService.registerUser(formularioUsuario);

                    console.log('Respuesta del registro:', response);

                    showAlertsService.showSuccessAlert('Registro de Usuarios', 'Registro de Usuarios', false, 2000);

                    closeRegisterModal();

                } catch (error) {
                    throw new Error(`Error al registrar, verifique los datos ingresados: ${error.message}`);
                }
            } else {
                showAlertsService.showErrorAlert("Verifica la contraseña", "La contraseña debe tener al menos una mayúscula, un carácter especial y un número", false, 2500);
            }

        } else {
            showAlertsService.showErrorAlert("Verifica la contraseña", "Las contraseñas deben ser iguales", false, 2500);
        }
    };

    const handleModalClick = (e) => {
        // Evita que el evento se propague desde el formulario hasta el contenedor del modal
        e.stopPropagation();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOutsideClick}>
            <div className=" bg-white rounded-lg p-8 max-w-lg" ref={modalRef} >
                <form onSubmit={handleSubmit} onClick={handleModalClick}>

                    <div className='flex items-center justify-center mb-2'>
                        <h1 className="font-serif font-bold text-gray-700 text-2xl">
                            REGISTRATE
                        </h1>
                    </div>
                    {/* Contenedor administrador del seleccionador de archivos para la imágen de perfil*/}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name="fotoPerfil"
                            id="fotoPerfil"
                            onChange={handleInputChange}
                            className="hidden"
                            required
                        />
                        <label htmlFor="fotoPerfil" className="bg-pink-500 text-white rounded-full p-2 cursor-pointer hover:bg-pink-300 mr-2 absolute top-0 right-0">
                            +
                        </label>
                        <img src={formData.fotoPerfil ? URL.createObjectURL(formData.fotoPerfil) : "data:image/png;base64,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"} alt="Foto de perfil" className="w-full h-full rounded-full shadow-lg object-cover" />
                    </div>

                    {/* Contenedor que agrupa los inputs de nombre y apellido */}
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className='w-1/2 px-2 '>
                            <label htmlFor="nombre" className=" text-gray-700 font-bold mb-2">
                                Nombre
                            </label>

                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                placeholder='Nombre'
                                className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                                required
                            />
                        </div>
                        <div className='w-1/2 px-2'>
                            <label htmlFor="apellido" className=" text-gray-700 font-bold mb-2">
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleInputChange}
                                placeholder='Apellido'
                                className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Contenedor que agrupa los inputs de teléfono y correo */}
                    <div className='flex flex-wrap -mx-2 mb-4'>
                        <div className="w-1/2 px-2">
                            <label htmlFor="telefono" className="text-gray-700 font-bold mb-2">
                                Teléfono
                            </label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                maxLength={10}
                                onChange={handleInputChange}
                                placeholder='Teléfono'
                                className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                                required
                            />
                        </div>

                        <div className="w-1/2 px-2">
                            <label htmlFor="correo" className="text-gray-700 font-bold mb-2">
                                Correo
                            </label>
                            <input
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleInputChange}
                                placeholder='Correo'
                                required
                                className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                            />
                        </div>
                    </div>

                    {/* Contenedor que tiene el input de contraseña*/}
                    <div className="mb-4">
                        <label htmlFor="contrasaena" className="block text-gray-700 font-bold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleInputChange}
                            placeholder='**********'
                            minLength={10}
                            maxLength={10}
                            className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                            required
                        />
                    </div>
                    {/* Contenedor que tiene el input de confirmar la contraseña*/}
                    <div className="mb-4">
                        <label htmlFor="confirmarContrasena" className="block text-gray-700 font-bold mb-2">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            name="confirmarContrasena"
                            value={formData.confirmarContrasena}
                            onChange={handleInputChange}
                            placeholder='**********'
                            minLength={10}
                            maxLength={10}
                            className="flexappearance-none bg-transparent border-b-2 border-x-0 border-t-0 border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-transparent focus:ring focus:border-pink-500"
                            required
                        />
                    </div>
                    <div className="flex">
                        <button type='submit' className="w-full bg-pink-500 group relative bg-gradient-to-r bg-length-0 bg-position-right text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:bg-length-full hover:bg-position-0 transition duration-1000 hover:bg-pink-300">
                            Regístrate
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default RegisterForm;