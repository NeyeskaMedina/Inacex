import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.defaults = {
  from: `"INACEX Admisión" <${process.env.EMAIL_USER}>`,
};


export {
    transporter
}