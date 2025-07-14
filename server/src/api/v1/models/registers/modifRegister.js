// models/registers/modifProspects.js
import pool from "../../../../../config/db/conectionDB.js";

const modifRegister = async (id, ejecutiva) => {
  const SQLquery = {
    text: `
      UPDATE registers
      SET ejecutiva = $1
      WHERE id = $2
      RETURNING *;
    `,
    values: [ejecutiva, id]
  };

  try {
    const response = await pool.query(SQLquery);
    return response.rows[0]; // Si quieres retornar el registro actualizado
  } catch (error) {
    console.error("Error en modifRegister:", error);
    throw error;
  }
};

export {
  modifRegister
};
