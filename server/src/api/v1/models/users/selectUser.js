import pool from '../../../../../config/db/conectionDB.js';

const selectUser = async (username) => {
 const query = `
  SELECT * FROM users WHERE name = $1
`;

  const result = await pool.query(query, [username]);
  return result.rows[0];
};

export {
    selectUser
}