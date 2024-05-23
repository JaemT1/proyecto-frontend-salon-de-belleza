import React, { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import Navbar from './components/NavBar';
import ContenidoHomeNosotros from './components/ContenidoHomeNosotros';
import Footer from './components/footer';
import { GalleryWithTab } from './components/ContenidoHomeNuestroTrabajo';
import { GalleryWithCarousel } from './components/ContenidoHomeGaleria';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const myDecodedToken = decodeToken(storedUser);
      localStorage.setItem('linkFoto', JSON.stringify(myDecodedToken.linkFoto)); // Guardar en localStorage
      localStorage.setItem('nombre', JSON.stringify(myDecodedToken.name)); // Guardar en localStorage
      localStorage.setItem('correo', JSON.stringify(myDecodedToken.sub)); // Guardar en localStorage
      console.log(myDecodedToken);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <GalleryWithCarousel />
      <div className="w-[900px] h-px bg-pink-400 block mx-auto mb-[60px] mt-[60px]"></div>
      <ContenidoHomeNosotros />
      <div className="w-[900px] h-px bg-pink-400 block mx-auto mb-[60px]"></div>
      <GalleryWithTab />
      <Footer />
    </div>
  );
}

export default App;

