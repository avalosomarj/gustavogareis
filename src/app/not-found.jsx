import Link from "next/link"

const notFound = () => {
  return (
    <main>
      <section className="notFound dis-flex flex-dir-col ali-cen jus-cen">
        <div className="dis-flex flex-dir-col ali-cen jus-cen">
          <img src="/isotipo.png" alt="isotipo" className="isotipo"/>
          <img src="/logotipo.png" alt="logotipo" className="logotipo"/>
        </div>

        <span className="ubuntu-light">La página solicitada no existe</span>

        <button className="btnGlobal"><Link href={"/"}><span className="ubuntu-medium">Inicio</span></Link></button>
      </section>
    </main>
  )
}

export default notFound