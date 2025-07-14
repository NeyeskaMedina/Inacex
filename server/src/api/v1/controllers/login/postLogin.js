import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const postLogin = async (req, res) => {
  const { username, password } = req.body;
console.log(username, password);

  let validUser = null;
  let storedHash = null;
  let role = null;

  if (username === process.env.ADMIN_USER) {
    console.log(process.env.ADMIN_USER);
    
    validUser = process.env.ADMIN_USER;
    storedHash = process.env.ADMIN_PASS_HASH;
    role = 'admin';
    
  } else if (username === process.env.EJEC_USER) {
    validUser = process.env.EJEC_USER;
    storedHash = process.env.EJEC_PASS_HASH;
    role = 'ejecutiva';
  } else {
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  const isMatch = await bcrypt.compare(password, storedHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  // ✅ Generar el token
  const token = jwt.sign(
    { username: validUser, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res.status(200).json({
    message: 'Login exitoso',
    token,
    role
  });
};

export { postLogin };
