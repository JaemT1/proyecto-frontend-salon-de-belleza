import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function GalleryWithTab() {
  const data = [
    {
      label: "Peluqueria",
      value: "peluqueria",
      images: [
        {
          imageLink:
            "./src/images/Peluqueria.jpg",
        },
        {
          imageLink:
          "./src/images/Peluqueria1.jpg",
        },
        {
          imageLink:
          "./src/images/Peluqueria2.jpg",
        },
      ],
    },
    {
      label: "Pestañas",
      value: "pestañas",
      images: [
        {
          imageLink:
          "./src/images/Pestanas.jpg",
        },
        {
          imageLink:
            "./src/images/Pestanas1.jpg",
        },
        {
          imageLink:
          "./src/images/Pestanas2.jpg",
        },
      ],
    },
    {
      label: "Cejas",
      value: "cejas",
      images: [
        {
          imageLink:
          "./src/images/Cejas.jpg",
        },
        {
          imageLink:
          "./src/images/Cejas1.jpg",
        },
        {
          imageLink:
          "./src/images/Cejas2.jpg",
        },
      ],
    },
    {
      label: "Uñas",
      value: "uñas",
      images: [
        {
          imageLink:
            "./src/images/Manos.jpg",
        },
        {
          imageLink:
          "./src/images/Manos1.jpg"
        },
        {
          imageLink:
          "./src/images/Manos2.jpg"
        },
      ],
    },
  ];
 
  return (
    <div className="mb-8 text-gray-600 ml-40 mr-40">
    <h2 className="text-2xl font-semibold mb-[6px] text-center">Nuestro Trabajo</h2>
    <div className="w-1/5 h-1 bg-[#ac407b]  block mx-auto mb-[60px]"></div>
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4 ">
        {data.map(({ value, images }) => (
          <TabPanel
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
            key={value}
            value={value}
          >
            {images?.map(({ imageLink }, index) => (
              <div key={index}>
                <img
                  className="h-80 w-full max-w-full rounded-lg object-center object-cover"
                  src={imageLink}
                  alt="image-photo"
                />
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
      </Tabs>
      
    </div>

    
  );
}