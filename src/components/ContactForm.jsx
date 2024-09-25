"use client"

import { useRef, useState } from "react"

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
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())

        if (response.status == 200) {
          setModalMessage(response.message)
          form.current.service.style.color = "#4E5A62"
          e.target.reset()
        } else {
          setModalMessage(response.message)
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
          onChange={e => {
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
        <textarea className="grid7" name="message" placeholder="Mensaje" maxLength={300} />
        <span className="grid8 ubuntu-light-italic">* Campos requeridos</span>
        <button type="submit" className="grid9"><span className="ubuntu-medium">Enviar</span></button>
      </form>
      <div className="modalBg ali-cen jus-cen" style={{ display: modalMessage == null ? 'none' : 'flex' }}>
        <div className="modalContent dis-flex flex-dir-col jus-cen">
          <span className="ubuntu-medium">{modalMessage}</span>
          <button onClick={() => setModalMessage(null)} id="btnClose"><span className="ubuntu-medium">Cerrar</span></button>
        </div>
      </div>
    </>
  )
}

export default ContactForm