"use client"

import { useRef, useState } from "react"
import mailerService from '@/services/mailerService'

const ContactForm = () => {
  const form = useRef()
  const [modalMessage, setModalMessage] = useState(null)

  const dataToSend = async (e) => {
    e.preventDefault()

    if (form.current.service.value == 0) {
      form.current.service.style.border = "solid 1px red"
      form.current.service.style.color = "red"
      setModalMessage("No seleccionaste el servicio por el cual consultás")
    }
    else {
      form.current.btnSubmit.disabled = true

      const formData = {
        fullname: form.current.fullname.value,
        service: form.current.service.value,
        city: form.current.city.value,
        address: form.current.address.value,
        tel: form.current.tel.value,
        mail: form.current.mail.value,
        message: form.current.message.value.length > 0 ? form.current.message.value : "-"
      }

      try {
        const response = await mailerService(formData)

        if (response == 200) {
          setModalMessage("Tu consulta se envió correctamente! En breve te responderemos.")
          form.current.service.style.color = "#4E5A62"
          e.target.reset()
        } else {
          setModalMessage("El envío falló, intente nuevamente y si el problema persiste, intente más tarde. Disculpe las molestias.")
        }
      }
      catch (error) {
        console.error(error)
        setModalMessage("Servicio en mantenimiento, intente más tarde. Disculpe las molestias")
      }
    }
  }

  return (
    <>
      <form ref={form} className="dis-flex" onSubmit={dataToSend} style={{ filter: `blur(${modalMessage != null ? '5px' : '0px'})` }}>
        <input type="text" name="fullname" placeholder="Nombre y Apellido *" className="grid1" maxLength={50} required />
        <select name="service" defaultValue={"0"} className="grid2"
          onChange={(e) => {
            if (e.target.value != 0) {
              e.target.style.color = "black"
              e.target.style.border = "none"
            }
          }}
          required >
          <option value="0" disabled hidden>Servicio *</option>
          <option value="Instalación">Instalación</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Venta">Venta</option>
        </select>
        <input type="text" name="city" placeholder="Localidad *" className="grid3" maxLength={30} required />
        <input type="text" name="address" placeholder="Dirección *" className="grid4" maxLength={50} required />
        <input type="tel" name="tel" placeholder="Teléfono (sin 0 ni 15) *" className="grid5" maxLength={10} required />
        <input type="email" name="mail" placeholder="E-mail *" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" className="grid6" maxLength={50} required />
        <textarea name="message" placeholder="Mensaje" className="grid7" maxLength={300} />
        <button type="submit" name="btnSubmit" className="grid8"><span className="ubuntu-medium">Enviar</span></button>
      </form>
      <div className="modalBg ali-cen jus-cen" style={{ display: modalMessage == null ? 'none' : 'flex' }}>
        <div className="modalContent dis-flex flex-dir-col jus-cen">
          <span className="ubuntu-medium">{modalMessage}</span>
          <button onClick={() => {
            setModalMessage(null)
            form.current.btnSubmit.disabled = false
          }}>
            <span className="ubuntu-medium">Cerrar</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactForm