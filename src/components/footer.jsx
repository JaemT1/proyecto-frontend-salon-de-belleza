function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-900 border-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"></div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div className="col-span-1 border-r border-black pt-4">
          <div>
            <h2 className="ml-4 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Acerca de
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 ml-4">
                Invertir en tu cuerpo, piel, pelo, cejas, pestañas, uñas,
                rostro, NUNCA es malgastar. Cuidarse, mimarse y
                sentirse bien con uno mismo, para nosotros, no tiene precio.
              </li>
              <li className="ml-4">Trabajamos para resaltar tu belleza.</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 border-r border-black pt-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Siguenos
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex items-center">
              <li className="mb-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/Gianasbeautyclub",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586286/Im%C3%A1genes%20de%20recursos/jb7wiltbzc4klab69hwc.png"
                    alt="Facebook"
                    className="px-3"
                    style={{ width: "70px" }}
                  />
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/gianasbeautyclub",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586304/Im%C3%A1genes%20de%20recursos/xpk8cewqnfrdgza2p8wj.png"
                    alt="Instgram"
                    className="px-3"
                    style={{ width: "70px" }}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 pt-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contacto
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586696/Im%C3%A1genes%20de%20recursos/ewqalvkkgaofsoea1fsz.png"
                  alt="Logo"
                  className="px-3"
                  style={{ width: "70px" }}
                />
                Conjunto Villa Maravelez Bloque A Casa 2 Armenia, Quindio,
                Colombia
              </li>
              <li className="mb-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586744/Im%C3%A1genes%20de%20recursos/genwzpmsbwbndperxudz.png"
                  alt="Contacto"
                  className="px-3"
                  style={{ width: "70px" }}
                />
                <span>3134318411</span>
              </li>
              <li className="mb-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586778/Im%C3%A1genes%20de%20recursos/wvlrnwrllamwarynjvxo.png"
                  alt="correo"
                  className="px-3"
                  style={{ width: "70px" }}
                />
                gisellrodriguez571@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex sm:flex sm:items-center sm:justify-between">
        <span className="m-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Giana&apos;s Beauty Club. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
