import { useRef, useState } from 'react';
import Swal from 'sweetalert2'
import loginUser from '../services/usuarioLoginService';
import RegisterForm from './RegisterForm';

const Login = ({ closeModal }) => {


    const modalRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    /* Manejo del modal de registro */
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const toggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    };

    const [formData, setFormData] = useState({
        correo: '',
        contrasena: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado con datos:', formData);
        
        const loginSuccess = await loginUser(formData);

        if(loginSuccess){
            Swal.fire({
                icon: "success",
                title: "Bienvenido (a)",
                text: "Sesión Iniciada con éxito",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.reload();
              }, 1600);
        }else {
            Swal.fire({
                title: "Hubo un error :(",
                text: "Verifica tu correo y contraseña",
                icon: "error"
            });
        }
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40" onClick={handleOutsideClick}>
            <div className="bg-white rounded-lg p-8 w-[800px]" ref={modalRef}>
                <form onSubmit={handleSubmit} >
                    <div className="flex items-center justify-center h-auto">
                        <div className="w-2/4">
                            <div className=" mb-4 w-auto m-auto">
                                <img src="./src/images/GR NEGRO recortado.png" alt="logo" />
                            </div>
                            <div className='flex items-center justify-center mb-4'>
                                <h1 className="font-serif font-bold text-gray-700 text-2xl">
                                    INICIO DE SESION
                                </h1>
                            </div>
                            <div className="mb-4 border-b-2 border-pink-500 ">
                                <label htmlFor="correo" className="block text-gray-600 font-bold mb-2 font-serif">
                                    CORREO ELECTRONICO
                                </label>
                                <input
                                    type="email"
                                    className=" flexappearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                                    id="correo"
                                    placeholder="ejemplo@correo.com"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-8 border-b-2 border-pink-500 py-2">
                                <label htmlFor="contrasena" className="block text-gray-700 font-bold mb-2 font-serif">
                                    CONTRASEÑA
                                </label>
                                <input
                                    type="password"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    id="contrasena"
                                    placeholder="*******"
                                    //maxLength={10}
                                    name="contrasena"
                                    value={formData.contrasena}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex">
                                <button 
                                onSubmit={handleSubmit}
                                className="w-full bg-pink-500 group relative bg-gradient-to-r bg-length-0 bg-position-right text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:bg-length-full hover:bg-position-0 transition duration-1000 hover:bg-pink-300">
                                    Iniciar Sesión
                                </button>
                            </div>
                            <div className="text-center mt-6">
                                <p className="inline-block align-baseline">
                                    ¿Olvidaste tu contraseña?
                                    <span className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-300 ml-2 cursor-pointer">Recuperala</span>
                                </p>
                            </div>
                            <div className="text-center mt-2">
                                <p className="inline-block align-baseline">
                                    ¿No tienes una cuenta?
                                    <span className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-300 ml-2 cursor-pointer" onClick={toggleRegisterModal}>Regístrate</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                {/* Renderizar el componente RegisterForm dentro del modal */}
                {showRegisterModal ? (<RegisterForm closeRegisterModal={toggleRegisterModal} />) : null}
            </div>
        </div>
    );
};

export default Login;