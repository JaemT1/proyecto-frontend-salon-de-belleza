import React from 'react';
import Navbar from './components/NavBar';
import ContenidoHomeNosotros from './components/ContenidoHomeNosotros';
import ContenidoHome from './components/ContenidoHome';
import Login from './components/login';
import Routes from './Routes'
import RegisterForm from './components/RegisterForm';
import Footer from './components/footer';
import ContenidoCarrusel from './components/carrusel';

function App() {
  return (
    
    <div>
      <Navbar />
      <ContenidoCarrusel/>
      <Footer/>
    </div>
    

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

    /*
    <div>
      <Navbar/>
      <ContenidoHomeNosotros/>
      <ContenidoHome/>
      <Footer/>
    </div>
    */

  );
}

export default App;
