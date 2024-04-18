import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/NavBar';
import ContenidoHome from './components/ContenidoHome';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            {/*
            <Routes>
                <Route path="/" element={<ContenidoHome />} />
            </Routes>
            */}
        </Router>
    );
};
export default AppRoutes;
