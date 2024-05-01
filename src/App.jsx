import Navbar from './components/NavBar';
import ContenidoHomeNosotros from './components/ContenidoHomeNosotros';
import Footer from './components/footer';
import { GalleryWithTab } from './components/ContenidoHomeNuestroTrabajo';
import { GalleryWithCarousel } from './components/ContenidoHomeGaleria';
import PasswordRecoveryModal from './components/PasswordRecoveryModal';
import PasswordResetModal from './components/PasswordResetModal';

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
      <div className="w-[900px] h-px bg-pink-400 block mx-auto mb-[60px] mt-[60px]"></div>
      <ContenidoHomeNosotros/>
      <div className="w-[900px] h-px bg-pink-400 block mx-auto mb-[60px]"></div>
      <GalleryWithTab/>
      <Footer/>
    </div>
    

    /*
    <div>
      <PasswordResetModal/>
    </div>
    */
  );
}

export default App;