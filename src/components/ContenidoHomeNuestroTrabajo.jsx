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
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585878/Im%C3%A1genes%20de%20recursos/xdip9pm7b66qt3l6ewv2.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585906/Im%C3%A1genes%20de%20recursos/juuvy8rnmuvbjn6ksphd.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585907/Im%C3%A1genes%20de%20recursos/jymxt01rugirtczxsnur.jpg",
        },
      ],
    },
    {
      label: "Pestañas",
      value: "pestañas",
      images: [
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585964/Im%C3%A1genes%20de%20recursos/gskguz4pfdvgchizkvho.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585964/Im%C3%A1genes%20de%20recursos/jfxvaxhqm5n1eg6rpyos.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716585965/Im%C3%A1genes%20de%20recursos/osm1zn5hgagaharxidqe.jpg",
        },
      ],
    },
    {
      label: "Cejas",
      value: "cejas",
      images: [
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586086/Im%C3%A1genes%20de%20recursos/jmgrluquslm6958ppxuh.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586086/Im%C3%A1genes%20de%20recursos/imlu6ucaywpgxzfohnbz.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586086/Im%C3%A1genes%20de%20recursos/ffctqsl93d2i1v21vxuj.jpg",
        },
      ],
    },
    {
      label: "Uñas",
      value: "uñas",
      images: [
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586173/Im%C3%A1genes%20de%20recursos/rhomtfsvexvvnwnuy5ii.jpg",
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586173/Im%C3%A1genes%20de%20recursos/easvxs4jek5obfhyyasf.jpg"
        },
        {
          imageLink:
            "https://res.cloudinary.com/dkm9g0zpt/image/upload/v1716586173/Im%C3%A1genes%20de%20recursos/ujwjueg6mut3bvxxh4sh.jpg"
        },
      ],
    },
  ];

  return (
    <div className="mb-8 text-gray-600 ml-40 mr-40">
      <h2 className="text-2xl font-semibold mb-[6px] text-center">Nuestro Trabajo</h2>
      <div className="w-1/5 h-1 bg-pink-400  block mx-auto mb-[60px]"></div>
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
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