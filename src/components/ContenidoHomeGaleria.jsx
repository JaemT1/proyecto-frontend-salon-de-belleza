import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <Carousel autoplayDelay={3000} loop={true} autoplay={true} className="w-full md:h-96 z-10">
      <img
        src="./PROYECTO-FRONTEND-SALON-DE-BELLEZA/src/images/Carrusel-item-1.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./src/images/Carrusel-item-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./src/images/Carrusel-item-3.jpg"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}