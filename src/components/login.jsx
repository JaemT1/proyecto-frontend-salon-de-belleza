import { useRef, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Login = ({closeModal}) => {

    //const navigate = useNavigate();

    //const [loginType, setLoginType] = useState('user');
    //const [showContent, setShowContent] = useState(true);

    const modalRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal();
        }
      };
      
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
        <div className="bg-white rounded-lg p-8 w-[800px]" ref={modalRef}>
            <form action="" >
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
                            <label htmlFor="email" className="block text-gray-600 font-bold mb-2 font-serif">
                                CORREO ELECTRONICO
                            </label>
                            <input
                                type="email"
                                className=" flexappearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                                id="email"
                                placeholder="ejemplo@correo.com"
                            />
                        </div>

                        <div className="mb-8 border-b-2 border-pink-500 py-2">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2 font-serif">
                                CONTRASEÑA
                            </label>
                            <input
                                type="password"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                id="password"
                                placeholder="*******"
                            />
                        </div>

                        <div className="flex">
                            {/*
                            <button className="transition duration-150 ease-in-out bg-pink-500 text-white hover:bg-pink-300 font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Iniciar Sesión
                            </button>*/}
                            <button className="w-full bg-pink-500 group relative bg-gradient-to-r bg-length-0 bg-position-right text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:bg-length-full hover:bg-position-0 transition duration-1000 hover:bg-pink-300">
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="text-center mt-6">
                            <p className="inline-block align-baseline">
                                ¿Olvidaste tu contraseña?
                                <a className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-300 ml-2" href="#">
                                    Recuperala
                                </a>
                            </p>
                        </div>
                        <div className="text-center mt-2">
                            <p className="inline-block align-baseline">
                                ¿No tienes una cuenta?
                                <a className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-300 ml-2" href="#">
                                    Registrate
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;