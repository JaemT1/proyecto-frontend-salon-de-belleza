import React from 'react';

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">

      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Acerca de</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siguenos</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <button onClick={() => window.open("https://www.facebook.com/Gianasbeautyclub", "_blank")}>
                <img src="./src/images/icono-fb.png" alt="Facebook" className="px-3" style={{ width: '70px' }} />
              </button>
            </li>
            <li className="mb-4">
              <button onClick={() => window.open("https://www.instagram.com/gianasbeautyclub", "_blank")}>
                <img src="./src/images/icono-ig.png" alt="Instgram" className="px-3" style={{ width: '70px' }} />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              Sede Principal 
            </li>
            <li className="mb-4">
                Conjunto Villa Maravelez Bloque A Casa 2 , Armenia, Quindio, Colombia  
            </li>
            <li className="mb-4">
              3134318411
            </li>
            <li className="mb-4">
              gisellrodriguez571@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex sm:flex sm:items-center sm:justify-between">
        <span className="m-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Giana's Beauty Club. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;