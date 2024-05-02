const BASE_URL = 'http://localhost:9009'; // Reemplaza con la URL base de tu servidor

const passwordRecoveryService = {
    passwordRecoveryVerificationCode: async (correo) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/verificationCodePasswordRecovery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: correo }),
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error al enviar el código de verificación:', error);
            return false;
        }
    },


    passwordRecoveryChangePassword: async (formData) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/changePassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if(response.ok){
                return true;
            }

        }catch (error){
            console.error('Error al enviar el código de verificación:', error);
            return false;
        }
    }
    
};

export default passwordRecoveryService;