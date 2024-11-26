"use client"

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <FaXmark /> : <FaBars />}</div>
      <nav style={{ right: openMenu ? '0px' : '-192px' }}>
        <ul className="dis-flex ubuntu-regular">
          <li><a href={"#inicio"} onClick={() => setOpenMenu(false)}>Inicio</a></li>
          <li><a href={"#clientes"} onClick={() => setOpenMenu(false)}>Clientes</a></li>
          <li><a href={"#servicios"} onClick={() => setOpenMenu(false)}>Servicios</a></li>
          <li><a href={"#contacto"} onClick={() => setOpenMenu(false)}>Contacto</a></li>
          <li><a href={"#nosotros"} onClick={() => setOpenMenu(false)}>Sobre Nosotros</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar