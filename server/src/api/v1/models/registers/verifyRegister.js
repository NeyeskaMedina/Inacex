import pool from "../../../../../config/db/conectionDB.js";

const verifyRegister = async (rut) => {
    console.log("verificar rut:", rut);
    const SQLquery = {
        text: `SELECT * FROM registers WHERE rut = $1`,
        values: [rut]
    };
    const response = await pool.query(SQLquery);    
    
    return response.rows
}

export {
    verifyRegister
}