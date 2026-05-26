import "./Footer.css"

function Footer() {
    return (
    <footer>

            <div className="footer-container">

                <h2>BEESOCC</h2>

                <p>
                    Plataforma enfocada en la gestión y organización
                    de fútbol amateur.
                </p>

                <div className="footer-links">

                    <a href="/">Inicio</a>

                    <a href="/contacto">Contacto</a>

                    <a href="/nosotros">Sobre Nosotros</a>

                </div>

                <p className="copy">
                    © 2026 BEESOCC - Todos los derechos reservados
                </p>

            </div>

        </footer>
  )
}

export default Footer
