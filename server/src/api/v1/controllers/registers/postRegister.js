import { 
    insertRegister
} from "../../models/registers/insertRegister.js";
import { handleError } from "../../utils/utils.js";

const addRegister = async (req, res) => {
    const { rut, nombre, telefono, correo, sede, direccion, curso } = req.body;
    console.log("Datos recibidos:", req.body);
    try {
        const response = await insertRegister(rut, nombre, telefono, correo, sede, direccion, curso);
        const wasUpdated = response[0] && response[0].create_date;
        // if (wasUpdated) {
        //   console.log('Registro actualizado');
        // } else {
        //   console.log('Nuevo registro insertado');
        // }

        return res.status(200).json({ 
            message: wasUpdated ? "Prospecto actualizado con éxito" : "Prospecto registrado con éxito", 
            data: response[0]
        });

    } catch (error) {
        console.error("💥 Error desde DB:", error); 
        const errorFound = handleError(error.code) || [
            { status: 500, message: "Error interno del servidor al insertar datos en db" },
        ];
        return res
            .status(errorFound[0]?.status || 500)
            .json({ error: errorFound[0]?.message || "Error interno del servidor al insertar datos en db" });
    }
};
export { addRegister };