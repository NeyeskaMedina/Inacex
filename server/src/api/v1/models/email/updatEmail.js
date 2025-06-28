import pool from '../../../../../config/db/conectionDB.js';

const updatEmail = async (correo) => {
 const SQLquery = {
        text: 'UPDATE registers SET confirmacion_correo = true WHERE correo = $1 RETURNING *',
        values: [correo]
    };
    const response = await pool.query(SQLquery);    
    
    return response.rows
}
export {
    updatEmail
}