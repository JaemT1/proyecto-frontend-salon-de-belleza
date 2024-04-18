import React from 'react';

function ContenidoHomeNosotros() {
    return (
        <div className="flex flex-wrap mt-[4px]">


            <div className="mr-[5px] mb-[4px]">
                {/* Imagen a la izquierda */}
                <img src="./src/images/curso-de-peinados-online.jpg" alt="Imagen" className="w-[500px] h-[500] rounded"/>
            </div>
            
            
            <div className="flex flex-col w-[990px] ">

                {/* Título "Nosotros" */}
                <p className="text-xl font-semibold m-2">Nosotros</p>
                    {/* Lorem Ipsum debajo del botón */}
                    <p className="text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>

            </div>

        </div>

        
    );
}
export default ContenidoHomeNosotros;