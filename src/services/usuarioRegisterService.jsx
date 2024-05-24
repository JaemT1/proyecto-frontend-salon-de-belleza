const BASE_URL = 'https://demoproyectosalondebelleza.fly.dev'; // Reemplaza con la URL base de tu servidor

const userRegisterService = {

    registerUser: async (formularioUsuario) => {
        try {
            const responseRegister = await fetch(`${BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formularioUsuario),
              });

            if (responseRegister.ok) {
                const usuarioCreado = await responseRegister.json();
                console.log(responseRegister);
                console.log(usuarioCreado);
            } else {
                throw new Error('Error en la primera petición');
            }
        } catch (error) {
            throw new Error(`Error al registrar al usuario: ${error.message}`);
        }
    },


    uploadPhotoToCloudinary: async (photo, correo) => {
        try {
            const cloudinaryData = new FormData();
            cloudinaryData.append('file', photo);
            cloudinaryData.append('public_id', correo);
            cloudinaryData.append('upload_preset', 'ml_default');
            cloudinaryData.append('cloud_name', 'dkm9g0zpt'); // Reemplaza con tu cloud_name
            cloudinaryData.append('api_key', '654495213436479'); // Reemplaza con tu api_key
            cloudinaryData.append('api_secret', 'PIJO3ukm6rEsZFGjOIK7gcVDV-g'); // Reemplaza con tu api_secret

            const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/tu_cloud_name/image/upload', {
                method: 'post',
                body: cloudinaryData,
            });

            if (cloudinaryResponse.ok) {
                const cloudinaryData = await cloudinaryResponse.json();
                return cloudinaryData.url;
            } else {
                throw new Error('Error al cargar la foto en Cloudinary');
            }
        } catch (error) {
            throw new Error(`Error al subir la foto a Cloudinary: ${error.message}`);
        }
    },
};

export default userRegisterService;
