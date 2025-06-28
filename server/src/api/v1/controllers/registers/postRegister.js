import { 
    insertRegister
} from "../../models/registers/insertRegister.js";
import { handleError } from "../../utils/utils.js";
import { transporter } from "../../../../../config/email/correoPrueba.js";

const addRegister = async (req, res) => {
    const { rut, nombre, telefono, correo, sede, direccion, curso } = req.body;

    try {
        const response = await insertRegister(rut, nombre, telefono, correo, sede, direccion, curso);
        const wasUpdated = response[0] && response[0].create_date;
            
        // ENVIO DE CORREO AUTOMATICO.....................
        // .................................................
        // ...................................................
        
        await transporter.sendMail({
              to: correo,
              subject: 'Confirma tu registro en INACEX',
              html: `
                <div style="font-family: 'Roboto', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                  <h2 style="color: #007d3c;">¡Hola ${nombre}!</h2>
                  <p style="font-size: 16px">Gracias por registrarte en <span style="color: #007d3c;">INACEX</span> para el curso <strong>${curso}</strong>.</p>
                  <p style="font-size: 16px">Para continuar con el proceso de inscripción, por favor confirma tu correo electrónico:</p>

                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://inacex.vercel.app/api/v1/confirmar-correo?correo=${correo}" 
                       style="background-color: #007d3c; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                       ✅ Confirmar correo
                    </a>
                  </div>

                  <p style="font-size: 13px; color: gray;">Este es un mensaje automático, por favor no respondas.</p>
                </div>
              `
            });

        // CULMINA ENVIO DENTRO DE TRY-CATCH
        // ...................................................
        return res.status(200).json({ 
            message: wasUpdated ? "Prospecto actualizado con éxito" : "Prospecto registrado con éxito", 
            data: response[0]
        });

    } catch (error) {
        console.error("💥 Error desde DB:", error); 
        const errorFound = handleError(error.code) || [
            { status: 500, message: "Error interno del servidor al insertar datos en db" },
        ];
        return res
            .status(errorFound[0]?.status || 500)
            .json({ error: errorFound[0]?.message || "Error interno del servidor al insertar datos en db" });
    }
};

export const sendEmail = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
        await transporter.sendMail({
      to: correo,
      subject: 'Confirma tu registro en INACEX',
      html: `
        <div style="font-family: 'Roboto', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #007d3c;">¡Hola ${nombre}!</h2>
          <p>Gracias por registrarte en INACEX para el curso <strong>${curso}</strong>.</p>
          <p>Para continuar, por favor confirma tu correo electrónico:</p>
        
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://inacex.cl/api/v1/confirmar-correo?correo=${correo}" 
               style="background-color: #007d3c; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
               ✅ Confirmar correo
            </a>
          </div>
        
          <p style="font-size: 13px; color: gray;">Este es un mensaje automático, por favor no respondas.</p>
        </div>
      `
    });

    res.status(200).json({ ok: true, msg: 'Correo enviado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: 'Error enviando el correo' });
  }
};

export { 
    addRegister,
 };