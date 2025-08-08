import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { selectUser } from '../../models/users/selectUser.js';

export const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Datos recibidos:', { username, password });

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
    }

    // ✅ Buscar usuario en la base de datos
    const user = await selectUser(username);
    console.log('Usuario: ', user);
    
    
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // ✅ Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password); // user.password debe estar hasheado
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // ✅ Generar token JWT
    const token = jwt.sign(
      { id: user.id, name: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    return res.status(200).json({
      message: 'Login exitoso',
      token,
      // role: user.role,
      // name: user.name,
    });

  } catch (error) {
    console.error("❌ Error en postLogin:", error);
    return res.status(500).json({ message: 'Error interno en el servidor' });
  }
};
