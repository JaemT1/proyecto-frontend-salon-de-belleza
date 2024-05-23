import React, { useState } from 'react';
import Login from './login';

const Navbar = ({ user, setUser }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="bg-pink-600 py-4 px-6 flex justify-between items-center">
      <div>
        <img
          src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1713123040/logo%20blanco.png"
          alt="Logo"
          style={{ width: '135px' }}
        />
      </div>
      <ul className="flex space-x-4 items-center">
        <li className="text-white hover:text-white hover:border-b-4 rounded border-white-400 transition duration-300 px-4 font-mono">
          Inicio
        </li>
        <li className="text-white hover:text-white hover:border-b-4 rounded border-white-400 transition duration-300 px-4 font-mono">
          Agenda tu cita
        </li>
        <li className="text-white hover:text-white hover:border-b-4 rounded border-white-400 transition duration-300 px-4 font-mono">
          Cotización Personalizada
        </li>
        <li className="text-white hover:text-white hover:border-b-4 rounded border-white-400 transition duration-300 px-4 font-mono">
          Boutique de Belleza
        </li>
        <li>
          {user ? (
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
              </button>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">ejemplo</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">ejemplo.gmail.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="text-white bg-[#be123c] hover:bg-pink-400 border-transparent px-4 py-2 rounded-full transition duration-300 font-mono"
              onClick={openLogin}
            >
              Iniciar Sesión
            </button>
          )}
        </li>
      </ul>
      {isLoginOpen && <Login closeModal={closeModal} setUser={setUser} />}
    </nav>
  );
};

export default Navbar;
