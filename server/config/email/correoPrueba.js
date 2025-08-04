// import nodemailer from 'nodemailer';
// import 'dotenv/config';

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: Number(process.env.EMAIL_PORT) || 465,
//   secure: Number(process.env.EMAIL_PORT) === 465, // true para SSL
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false, // evita problemas con certificados no válidos
//   },
//   logger: true, // activa logs para depuración
//   debug: true,  // muestra detalles en consola
// });

// // Configuración predeterminada del remitente
// transporter.defaults = {
//   from: `${process.env.EMAIL_USER}`, 
// };

// export {
//   transporter
// };

import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: Number(process.env.EMAIL_PORT) === 465, // true para SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // evita problemas con certificados no válidos
  },
  logger: true, // activa logs para depuración
  debug: true,  // muestra detalles en consola
});

/**
 * ✅ Ajuste importante:
 * Siempre se define un remitente válido para evitar que el servidor SMTP
 * asigne MAIL FROM: <>
 */
transporter.use('stream', (mail, callback) => {
  if (!mail.data.from) {
    mail.data.from = `"INACEX Matricúlate" <${process.env.EMAIL_USER}>`;
  }
  callback();
});

// Configuración predeterminada del remitente
transporter.defaults = {
  from: `"INACEX Matricúlate" <${process.env.EMAIL_USER}>`,
};

export {
  transporter
};
