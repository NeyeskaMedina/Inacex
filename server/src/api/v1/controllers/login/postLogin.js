import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Datos recibidos: ', { username, password });

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
    }

    let validUser = null;
    let storedHash = null;
    let role = null;

    if (username === process.env.ADMIN_USER) {
      if (!process.env.ADMIN_PASS_HASH) {
        return res.status(500).json({ message: 'Configuración de admin inválida' });
      }
      validUser = process.env.ADMIN_USER;
      storedHash = process.env.ADMIN_PASS_HASH;  // <-- usar hash directamente, sin base64
      role = 'admin';

    } else if (username === process.env.EJEC_USER) {
      if (!process.env.EJEC_PASS_HASH) {
        return res.status(500).json({ message: 'Configuración de ejecutiva inválida' });
      }
      validUser = process.env.EJEC_USER;
      storedHash = process.env.EJEC_PASS_HASH;  // <-- usar hash directamente, sin base64
      role = 'ejecutiva';

    } else {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // ✅ Comparar la contraseña con bcrypt directamente
    const isMatch = await bcrypt.compare(password, storedHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // ✅ Generar el token JWT
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

  } catch (error) {
    console.error("❌ Error en postLogin:", error);
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};

export { postLogin };
