import nodemailer from "nodemailer"

const mailerService = async (content) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASS
    }
  })

  const mail = {
    from: `${process.env.NODEMAILER_MAILTEMPLATE_FROM} <${process.env.NODEMAILER_AUTH_USER}>`,
    to: process.env.NODEMAILER_AUTH_USER,
    subject: `${content.fullname} - ${content.city} - ${content.service}`,
    text:
      `Nuevo mensaje desde formulario web
    
    De: ${content.fullname}

    Ubicación: ${content.address}, ${content.city}

    Consulta por: ${content.service}

    Mensaje: ${content.message}

    E-mail: ${content.mail}

    Teléfono: ${content.tel}`,
    html:
      `<b style="font-size: 18px">Nuevo mensaje desde formulario web</b>
      <div style="font-family: sans-serif; background-color: #4E5A62; color: white; border-radius: 10px; padding: 8px 16px; margin: 20px 0px">
        <div style="margin-bottom: 16px;">
          <p style="font-size: 18px;">De: <b>${content.fullname}</b></p>
        </div>
        <div style="margin-bottom: 16px;">
          <p style="font-size: 18px;">Ubicación: <b>${content.address}, ${content.city}</b></p>
        </div>
        <div style="margin-bottom: 16px;">
          <p style="font-size: 18px;">Consulta por: <b>${content.service}</b></p>
        </div>
        <div style="margin-bottom: 16px;">
          <p style="font-size: 18px;">Mensaje: <b>${content.message}</b></p>
        </div>
      </div>
      <div style="margin-bottom: 16px;">
        <span style="font-size: 18px;">Responder mediante:</span>
      </div>
      <a href="mailto:${content.mail}"><button style="margin-right: 8px; width: 150px; height: 40px; background-color: #E63439; border-radius: 10px; border: none;"><b style="font-size: 18px; color: white;">E-mail</b></button></a>
      <a href="tel:${content.tel}"><button style="margin-right: 8px; width: 150px; height: 40px; background-color: #E63439; border-radius: 10px; border: none;"><b style="font-size: 18px; color: white;">Teléfono</b></button></a>`
  }

  try {
    const data = await transporter.sendMail(mail)
    if (data.messageId) {
      return 200
    }
  }
  catch (error) {
    console.error(error)
    return 500
  }
}

export default mailerService