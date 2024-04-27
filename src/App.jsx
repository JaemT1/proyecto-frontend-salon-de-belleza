import Navbar from './components/NavBar';
import ContenidoHomeNosotros from './components/ContenidoHomeNosotros';
import Footer from './components/footer';
import { GalleryWithTab } from './components/ContenidoHomeGaleria';
import { GalleryWithCarousel } from './components/ContenidoHomeMaterial';

function App() {
  return (
    
    /*
    <div>
      <Navbar />
      <ContenidoCarrusel/>
      <ContenidoHomeNosotros/>
      <Footer/>
    </div>
    */

    /*
    <div>
      <Login />
    </div>
    */

    /*
        <div>
          <RegisterForm />
        </div>
    */

    /*
    <div>
      <Routes/>
    </div>
    */

    
    <div>
      <Navbar/>
      <GalleryWithCarousel/>
      <ContenidoHomeNosotros/>
      <div className="w-[900px] h-px bg-[#883362]  block mx-auto mb-[60px]"></div>
      <GalleryWithTab/>
      <Footer/>
    </div>
    
  );
}

export default App;