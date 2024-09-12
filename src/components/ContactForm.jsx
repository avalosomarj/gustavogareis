"use client"

import { useRef } from "react"

const ContactForm = () => {
  const form = useRef()

  const dataToSend = async (e) => {
    e.preventDefault()

    if (form.current.service.value == 0) {
      alert("Elegí el servicio por el cual consultás")
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
          alert(response.message)
          form.current.service.style.color = "#4E5A62"
          e.target.reset()
        } else {
          alert(response.message)
        }
      }
      catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <form ref={form} className="dis-flex" onSubmit={dataToSend}>
      <input type="text" name="fullname" placeholder="Nombre y Apellido *" maxLength={20} required />
      <select className="service" name="service" defaultValue={"0"}
        onChange={e => {
          if (e.target.value != 0) {
            e.target.style.color = "black"
          }
        }}
        required >
        <option value="0" disabled hidden>Servicio *</option>
        <option value="Instalación">Instalación</option>
        <option value="Mantenimiento">Mantenimiento</option>
        <option value="Venta">Venta</option>
      </select>
      <input type="text" name="city" placeholder="Localidad *" maxLength={20} required />
      <input type="text" name="address" placeholder="Dirección *" maxLength={35} required />
      <input type="tel" name="tel" placeholder="Teléfono *" maxLength={10} required />
      <input type="email" name="mail" placeholder="E-mail *" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" maxLength={30} required />
      <textarea name="message" placeholder="Mensaje" maxLength={150} />
      <span className="ubuntu-light-italic">* Campos requeridos</span>
      <input type="submit" value="Enviar" className="ubuntu-medium" />
    </form>
  )
}

export default ContactForm