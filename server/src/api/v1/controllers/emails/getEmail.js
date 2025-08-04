import { 
    updatEmail 
} from "../../models/email/updatEmail.js";
import { handleError } from "../../utils/utils.js";

const getEmail = async (req, res) => {
    const { correo } = req.query;

        if (!correo) {
          return res.status(400).send('Correo no especificado');
        }
    
        try {
        const response = await updatEmail(correo);
        console.log("Respuesta de la actualización:", response);
        const wasUpdated = response[0] && response[0].create_date;
        return res.redirect('https://inacexcem.cl/confirmacion-exitosa');
    } catch (error) {
        const errorFound = handleError(error.code) || [
            { status: 500, message: "Error interno del servidor al confirmar correo" },
        ];
    return res
        .status(500)
        .json({ error });
        // .status(errorFound[0]?.status)
        // .json({ error: errorFound[0]?.message });
    }
}

export {
    getEmail
}