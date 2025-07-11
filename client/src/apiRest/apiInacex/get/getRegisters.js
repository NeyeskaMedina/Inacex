import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const getRegisters = async () => {
    const token = localStorage.getItem('token'); 
    try {
        const response = await axios.get(`${URL}/registers`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al obtener datos en BD", err);
        return { response: [], error: "Error al obtener datos en BD", loading: false };
    }
}

export {
    getRegisters
}