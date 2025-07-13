import pool from '../../../../../config/db/conectionDB.js';

const selectProspects = async () => {
 const query = `
  SELECT 
    id,
    rut,
    nombre,
    telefono,
    correo,
    sede,
    curso,
    direccion,
    confirmacion_correo,
    ejecutiva,
    TO_CHAR(create_date, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') AS create_date
  FROM registers
  ORDER BY create_date DESC;
`;

  const result = await pool.query(query);
  return result.rows;
};

export {
    selectProspects
}