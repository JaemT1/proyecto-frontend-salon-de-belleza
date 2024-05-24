import axios from 'axios';

const loginUser = async (formData) => {
    try {
        const response = await axios.post('https://demoproyectosalondebelleza.fly.dev/auth/authenticate', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            const userData = response.data;
            console.log(userData);
            // Devuelve los datos del usuario para actualizar el estado en el App
            return userData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return null;
    }
};

export default loginUser;