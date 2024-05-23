import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ContenidoHome from './components/ContenidoHome';


const AppRoutes = () => {
    // Obtener el tipo de usuario almacenado en localStorage
    const userType = localStorage.getItem('');
    // Estado para forzar la actualización de las rutas al cambiar el tipo de usuario
    const [userTypeState, setUserTypeState] = useState(userType);

    useEffect(() => {
        // Obtener el tipo de usuario almacenado en localStorage
        const storedUserType = localStorage.getItem('userType');

        // Actualizar el estado con el tipo de usuario
        setUserTypeState(storedUserType);
    }, []);

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
