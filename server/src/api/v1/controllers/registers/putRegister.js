// controllers/registers/putRegister.js
import { modifRegister } from "../../models/registers/modifRegister.js";
import { handleError } from "../../utils/utils.js";

const putRegister = async (req, res) => {
  const { id } = req.params;
  const { ejecutiva } = req.body;
  console.log(id, ejecutiva)
  if (!ejecutiva) {
    return res.status(400).json({ error: "El campo 'ejecutiva' es requerido." });
  }

  try {
    const updated = await modifRegister(id, ejecutiva);
    res.status(200).json({ message: "Ejecutiva actualizada con éxito", updated });

    if (!updated) {
      return res.status(404).json({ error: "Registro no encontrado." });
    };
  } catch (error) {
    console.error("Error al actualizar ejecutiva:", error);
    const errorFound = handleError(error.code) || [
      { status: 500, message: "Error interno del servidor al actualizar ejecutiva" },
    ];
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

export {
  putRegister
};
