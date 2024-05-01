function ContenidoHomeNosotros() {
  return (
    <div className="flex flex-wrap mt-[60px] mb-[60px]">
      <div className="mr-[130px] mb-[4px] flex items-center">
        
        <div className="text-gray-600 ml-40 mr-40">
          <p className="text-2xl font-semibold m-2 text-center">Nosotros</p>

          {/* Lorem Ipsum debajo del botón */}
          <div className="w-1/5 h-1 bg-pink-400 block mx-auto mb-[60px]"></div>
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
        <img
          src="./src/images/Nosotros.jpg"
          alt="Imagen"
          className="w-[300px] h-[500] rounded"
        />   

      </div>
    </div>
  );
}
export default ContenidoHomeNosotros;
