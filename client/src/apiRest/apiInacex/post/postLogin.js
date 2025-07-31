import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const postLogin = async ({ username, password }) => {
    try {
        const response = await axios.post(`${URL}/login`,{
            username, 
            password
        },
        {
            headers: { "Content-Type": "application/json" }
        }
    );
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al ingresar", err);
        return { response: [], error: "Credenciales incorrectas", loading: false };
    }
}

export {
    postLogin
}