import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <Carousel autoplayDelay={3000} loop={true} autoplay={true} className="w-full md:h-96 z-10">
      <img
        src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585613/Im%C3%A1genes%20de%20recursos/x5tkep3pnytofad4gmuf.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585657/Im%C3%A1genes%20de%20recursos/zeqkpmpaaojjhjcgt28u.jpg"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585658/Im%C3%A1genes%20de%20recursos/umgpevkew8thytxhuijb.jpg"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
  );
}