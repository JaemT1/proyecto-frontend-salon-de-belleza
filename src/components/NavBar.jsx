import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";

// ... (importaciones previas)

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <nav className="bg-blue-900 py-4 px-6 flex justify-between items-center">
      <div>
        {/* Enlace a la página de inicio */}

        <img
          src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1713123040/logo%20blanco.png"
          alt="Logo"
          style={{ width: "135px" }}
        />
      </div>
      <ul className="flex space-x-4 items-center">
        {/* Botones para otras páginas */}
        <li className="text-white hover:text-pink-400 hover:border-b-4 rounded border-pink-400 transition duration-300 px-4 font-mono">
          {/* Puedes agregar más enlaces según tus necesidades */}
          Inicio
        </li>
        <li className="text-white hover:text-pink-400 hover:border-b-4 rounded border-pink-400 transition duration-300 px-4 font-mono">
          {/* Puedes agregar más enlaces según tus necesidades */}
          Agenda tu cita
        </li>
        <li className="text-white hover:text-pink-400 hover:border-b-4 rounded border-pink-400 transition duration-300 px-4 font-mono">
          {/* Puedes agregar más enlaces según tus necesidades */}
          Cotización Personalizada
        </li>
        <li className="text-white hover:text-pink-400 hover:border-b-4 rounded border-pink-400 transition duration-300 px-4 font-mono">
          Boutique de Belleza
        </li>
        <li>
          <button
            className="text-white bg-blue-500 hover:bg-pink-500 border-transparent px-4 py-2 rounded-full transition duration-300 font-mono"
            onClick={openLogin}
          >
            Iniciar Sesión
          </button>
        </li>
      </ul>
      {/* Abre el modal de inicio de sesión si está activo */}
      {isLoginOpen && <Login closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
