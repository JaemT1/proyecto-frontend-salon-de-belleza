import axios from 'axios';

const loginUser = async (formData) => {
    try {
        const response = await axios.post('http://localhost:9009/auth/authenticate', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            const userData = response.data;
            console.log(userData);
            // Almacenar datos en el localStorage para el tipo "paciente"
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return false;
    }
};

export default loginUser;