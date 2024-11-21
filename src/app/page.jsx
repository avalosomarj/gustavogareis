import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import ServiceCard from "@/components/ServiceCard";
import { servicesDesc } from "@/services/data";
import { FaSquareEnvelope, FaSquareInstagram, FaSquarePhone, FaSquareWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <header className="dis-flex ali-cen">
        <a href={"#inicio"}><img src="isotipo.png" alt="isotipo" /></a>
        <NavBar />
      </header>

      <main>
        <section className="heroArea dis-flex">
          <div className="cta dis-flex" style={{ "--offset": '-50%' }}>
            <h1 className="ubuntu-medium">Brindamos soluciones<br />en seguridad electrónica<br />para tu empresa, comercio<br />u oficina</h1>
            <button className="dis-flex jus-cen ali-cen ubuntu-medium">
              <a href={"#contacto"}><span>Consultanos</span></a>
            </button>
          </div>
          <img src="hero.png" alt="hero" style={{ "--offset": '50%' }} />
        </section>

        <section className="customersArea dis-flex flex-dir-col" id="clientes">
          <h2 className="ubuntu-regular"><span />Confían en nosotros</h2>
          <div className="slider" style={{ backgroundImage: `url(${process.env.IMG_SLIDER_URL})`, "--width-img": process.env.IMG_SLIDER_CSS }} />
        </section>

        <section className="servicesArea dis-flex flex-dir-col" id="servicios">
          <h2 className="ubuntu-regular"><span />Nuestros servicios</h2>

          <div className="cardsCont dis-flex jus-cen">
            {
              servicesDesc.map(service => {
                return (
                  <ServiceCard key={service.id} img={service.img} altimg={service.altimg} title={service.title} desc={service.desc} />
                )
              })
            }
          </div>
        </section>

        <section className="contactArea dis-flex flex-dir-col" id="contacto">
          <h2 className="ubuntu-regular"><span />Contactanos</h2>
          <p className="ubuntu-light-italic info-brand">Completá el formulario con tus datos para que podamos responderte. Tené en cuenta que los campos marcados con <span className="ubuntu-medium-italic">*</span> son obligatorios</p>
          <ContactForm />
        </section>

        <section className="aboutArea dis-flex flex-dir-col" id="nosotros">
          <h2 className="ubuntu-regular ff-white"><span />Sobre Nosotros</h2>
          <p className="ubuntu-light">
            Somos una empresa dedicada a la seguridad electrónica en la provincia de Entre Ríos. Además somos distribuidor de productos oficiales <span className="ubuntu-medium-italic ff-red">HIK</span><span className="ubuntu-medium-italic">VISION</span>.
          </p>

          <div className="subCont dis-flex">
            <div className="navCont">
              <ul className="dis-flex flex-dir-col ubuntu-light">
                <li className="ubuntu-regular">Navegación</li>
                <li><a href={"#inicio"}>Inicio</a></li>
                <li><a href={"#clientes"}>Clientes</a></li>
                <li><a href={"#servicios"}>Servicios</a></li>
                <li><a href={"#contacto"}>Contacto</a></li>
              </ul>
            </div>

            <div className="groupCont dis-flex">
              <div className="separador dis-flex flex-dir-col">
                <h4 className="ubuntu-regular">Área Técnica</h4>
                <div className="iconsCont dis-flex">
                  <a href={`https://wa.me/${process.env.CONTACT_TEC_WSP}/?text=Hola,%20me%20contacto%20desde%20gustavogareis.com.ar`} target="_blank"><FaSquareWhatsapp /></a>
                  <a href={"tel:" + process.env.CONTACT_TEC_TEL} target="_blank"><FaSquarePhone /></a>
                  <a href={"mailto:" + process.env.CONTACT_TEC_MAIL} target="_blank"><FaSquareEnvelope /></a>
                </div>
              </div>

              <div className="separador dis-flex flex-dir-col areacom">
                <h4 className="ubuntu-regular">Área Comercial</h4>
                <div className="iconsCont dis-flex">
                  <a href={`https://wa.me/${process.env.CONTACT_COM_WSP}/?text=Hola,%20me%20contacto%20desde%20gustavogareis.com.ar`} target="_blank"><FaSquareWhatsapp /></a>
                  <a href={"tel:" + process.env.CONTACT_COM_TEL} target="_blank"><FaSquarePhone /></a>
                  <a href={"mailto:" + process.env.CONTACT_COM_MAIL} target="_blank"><FaSquareEnvelope /></a>
                </div>
              </div>
            </div>

            <div className="separador dis-flex flex-dir-col">
              <h4 className="ubuntu-regular">Seguinos</h4>
              <a href={"https://www.instagram.com/" + process.env.CONTACT_GG_IG} target="_blank"><FaSquareInstagram /></a>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13595.635844407296!2d-60.0742123!3d-31.5815443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b46551a4e3dc63%3A0xf4ae0a82e0134795!2sGustavo%20Gareis%20-%20Seguridad%20Electr%C3%B3nica.!5e0!3m2!1ses-419!2sar!4v1725284046819!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <span className="ubuntu-light ff-white info-brand">gustavogareis.com.ar | 2017 - 2024</span>
        </section >
      </main >

      <footer className="dis-flex flex-dir-col">
        <p className="ubuntu-light">Diseño y Desarrollo por <a href={process.env.ERGONOMIC_URL} target="_blank"><span className="ff-orb">Ergonomic</span></a></p>
      </footer>
    </>
  );
}