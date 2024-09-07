import NavBar from "@/components/NavBar";
import { FaSquareEnvelope, FaSquareInstagram, FaSquarePhone, FaSquareWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <header className="dis-flex ali-cen">
        <a href={"#inicio"}><img src="gg-logo.png" alt="logo" /></a>
        <NavBar />
      </header>

      <main>
        <section className="heroArea dis-flex">
          <div className="cta dis-flex">
            <h1 className="ubuntu-medium">Brindamos soluciones<br />en seguridad electrónica<br />para tu empresa, comercio<br />u oficina</h1>
            <button className="dis-flex jus-cen ali-cen ubuntu-medium">
            <a href={"#contacto"}><span>Contactanos</span></a>
            </button>
          </div>
          <img src="hero.png" alt="hero" />
        </section>

        <section className="customersArea" id="clientes">
          <h2 className="ubuntu-regular">Confían en nosotros</h2>
          <div className="customersBg dis-flex ali-cen">
            <div className="slider" />
          </div>
        </section>

        <section className="servicesArea dis-flex flex-dir-col" id="servicios">
          <h2 className="ubuntu-regular">Nuestros servicios</h2>

          <div className="cardsCont dis-flex jus-cen">
            <article className="card dis-flex">
              <img src="s1.jpg" alt="" />

              <div className="infoCard dis-flex flex-dir-col">
                <h3 className="ubuntu-regular">Instalación</h3>
                <p className="ubuntu-light">
                  Videovigilancia analógica, cámaras IP, soluciones en cableado estructurado y redes informáticas
                </p>
              </div>
            </article>

            <article className="card dis-flex">
              <img src="s2.jpg" alt="" />

              <div className="infoCard dis-flex flex-dir-col">
                <h3 className="ubuntu-regular">Mantenimiento</h3>
                <p className="ubuntu-light">
                  Soporte técnico para tus equipos e instalaciones, garantizando así un óptimo rendimiento
                </p>
              </div>
            </article>

            <article className="card dis-flex">
              <img src="s3.jpg" alt="" />

              <div className="infoCard dis-flex flex-dir-col">
                <h3 className="ubuntu-regular">Venta</h3>
                <p className="ubuntu-light">
                  Somos distribuidor oficial <span className="ubuntu-medium-italic">HIKVISION</span>, resolvemos tus consultas sobre reventa de equipos
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contactArea" id="contacto">
          <h2 className="ubuntu-regular">Contactanos</h2>

          <form className="dis-flex" action="">
            <input type="text" placeholder="Nombre y Apellido *" />
            <input type="text" placeholder="Servicio *" />
            <input type="text" placeholder="Localidad *" />
            <input type="text" placeholder="Dirección *" />
            <input type="tel" placeholder="Teléfono *" />
            <input type="email" placeholder="E-mail *" />
            <textarea name="mensaje" placeholder="Mensaje" />
            <span className="ubuntu-light-italic">* Campos requeridos</span>
            <input type="button" value="Enviar" className="ubuntu-medium" />
          </form>
        </section>

        <section className="aboutArea" id="sobre">
          <h2 className="ubuntu-regular">Sobre nosotros</h2>

          <div className="infoCont dis-flex flex-dir-col">
            <p className="ubuntu-regular">
              Desde 2017 nos dedicamos a la venta e instalación de seguridad electrónica
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
                    <FaSquareWhatsapp />
                    <FaSquarePhone />
                    <FaSquareEnvelope />
                  </div>
                </div>

                <div className="separador dis-flex flex-dir-col">
                  <h4 className="ubuntu-regular">Área Comercial</h4>
                  <div className="iconsCont dis-flex">
                    <FaSquareWhatsapp />
                    <FaSquarePhone />
                    <FaSquareEnvelope />
                  </div>
                </div>
              </div>

              <div className="separador dis-flex flex-dir-col">
                <h4 className="ubuntu-regular">Seguinos</h4>
                <FaSquareInstagram />
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13595.635844407296!2d-60.0742123!3d-31.5815443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b46551a4e3dc63%3A0xf4ae0a82e0134795!2sGustavo%20Gareis%20-%20Seguridad%20Electr%C3%B3nica.!5e0!3m2!1ses-419!2sar!4v1725284046819!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="dis-flex ali-cen">
        <p className="ubuntu-light">Diseño y Desarrollo por <span className="ff-orb">Ergonomic</span></p>
      </footer>
    </>
  );
}