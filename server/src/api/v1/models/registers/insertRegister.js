import pool from "../../../../../config/db/conectionDB.js";

const insertRegister = async (rut, nombre, telefono, correo, sede, direccion, curso) => {
  const SQLquery = {
    text: `
      INSERT INTO registers (rut, nombre, telefono, correo, sede, direccion, curso, create_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      ON CONFLICT (rut)
      DO UPDATE SET
        nombre = EXCLUDED.nombre,
        telefono = EXCLUDED.telefono,
        correo = EXCLUDED.correo,
        sede = EXCLUDED.sede,
        direccion = EXCLUDED.direccion,
        curso = EXCLUDED.curso,
        create_date = NOW()
      RETURNING *;
    `,
    values: [rut, nombre, telefono, correo, sede, direccion, curso]
  };

  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.error("Error en insertRegister:", error);
    throw error;
  }
};

export {
  insertRegister
}
