import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ContenidoHome from './components/ContenidoHome';


const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            {
            <Routes>
                <Route path="/" element={<ContenidoHome />} />
            </Routes>
            }
        </Router>
    );
};
export default AppRoutes;
