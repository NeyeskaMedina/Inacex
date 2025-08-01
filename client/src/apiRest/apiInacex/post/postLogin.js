import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const postLogin = async ({ username, password }) => {
    try {
        console.log("📤 Enviando login:", { username, password });
        const response = await axios.post(
            `${URL}/login`,
            JSON.stringify({ username, password }),
            {
                headers: { "Content-Type": "application/json" }
            }
        );
        return { response: response.data, error: null, loading: false }
    } catch (err) {
        console.error("❌ Error al ingresar", err.response?.data || err.message);
        return { response: [], error: "Credenciales incorrectas", loading: false };
    }
}

export { postLogin };
