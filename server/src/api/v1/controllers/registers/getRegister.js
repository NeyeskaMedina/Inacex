import { 
    selectProspects 
} from "../../models/registers/selectRegister.js";
import { handleError } from "../../utils/utils.js";

const getRegister = async (req, res) => {
    try {
        const prospects = await selectProspects();
        console.log("Prospectos con fecha:", prospects);
        res.status(200).json({ prospects : prospects });
    } catch (error) {
        const errorFound = handleError(error.code) || [
            { status: 500, message: "Error interno del servidor al obtener prospectos" },
        ];
    return res
        .status(500)
        .json({ error });
        // .status(errorFound[0]?.status)
        // .json({ error: errorFound[0]?.message });
    }
}

export {
    getRegister
}