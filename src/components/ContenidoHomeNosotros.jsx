function ContenidoHomeNosotros() {
  return (
    <div className="flex flex-wrap mt-[4px]">
      <div className="mr-[5px] mb-[4px] flex items-center">
        <img
          src="./src/images/Nosotros.png"
          alt="Imagen"
          className="w-[300px] h-[500] rounded"
        />

        <div>
          <p className="text-xl font-semibold m-2 text-center">Nosotros</p>
          {/* Lorem Ipsum debajo del botón */}
          <p className="text-gray-600 ml-4">
            ¡Bienvenidos a Giana&apos;s Beauty Club! Somos un oasis de elegancia
            y bienestar, donde la belleza y la relajación se unen en perfecta
            armonía. Nuestro equipo de expertos en belleza está comprometido en
            ofrecerte servicios de alta calidad, desde cortes de cabello y
            peinados hasta tratamientos faciales y corporales rejuvenecedores.
            En un ambiente moderno y acogedor, te invitamos a descubrir tu mejor
            versión con nosotros. ¡Déjanos mimarte y resaltar tu belleza natural
            en Giana&apos;s Beauty Club!
          </p>
        </div>
      </div>

      <div className="mb-[4px] mt-2 ml-2">
        <p className="text-xl font-semibold m-2 text-center">Nuestros servicios</p>
        <div className="mb-[4px] flex items-center mt-2">
          <img
            src="./src/images/Peluqueria-servicio.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          <img
            src="./src/images/Peinado.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
        </div>
        <div className="mb-[4px] flex items-center mt-2">
          <img
            src="./src/images/Manos-servicio.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          <img
            src="./src/images/Manos.jpg"
            className="w-[300px] h-[500] rounded"
          />
          </div>
          <div className="mb-[4px] flex items-center mt-2">
          <img
            src="./src/images/cejas-servicio.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          <img
            src="./src/images/Cejas.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          <img
            src="./src/images/Cejas1.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          </div>
          <div className="mb-[4px] flex items-center mt-2">
          <img
            src="./src/images/pestanas-servicio.jpg"
            className="w-[300px] h-[500] rounded mr-2"
          />
          <img
            src="./src/images/Pestanas.jpg"
            className="w-[300px] h-[500] rounded"
          />
          </div>
      </div>

      <div className="flex flex-col w-[990px] "></div>
    </div>
  );
}
export default ContenidoHomeNosotros;
