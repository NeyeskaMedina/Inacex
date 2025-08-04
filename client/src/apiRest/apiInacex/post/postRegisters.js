import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK; 

const postRegisters = async (form) => {
    try {
        const response = await axios.post(`${URL}/registers`, form, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
                
        return { response: response.data, error: null, loading: true };
    } catch (err) {
        console.error("Error al enviar datos al bk", err);
        return { response: [], error: "Error al enviar datos al bk", loading: false };
    }
};
export {
    postRegisters
};