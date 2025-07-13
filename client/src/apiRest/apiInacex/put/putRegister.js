import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK; 

const putRegister = async ( id, selectedEjecutiva ) => {
    const token = localStorage.getItem('token'); 
    try {
        const response = await axios.put(`${URL}/registers/${id}`,
            { ejecutiva: selectedEjecutiva }, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
                
        return { response: response.data, error: null, loading: true };
    } catch (err) {
        console.error("Error al enviar datos al bk", err);
        return { response: [], error: "Error al enviar datos al bk", loading: false };
    }
};
export {
    putRegister
};