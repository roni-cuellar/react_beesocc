
import { Link } from 'react-router-dom'
import logo_beesocc_negro from "../../assets/logo_beesocc_negro.png"
import "./Navbar.css"

function Navbar() {
    return (
    <nav>

        <img 
        src={logo_beesocc_negro} 
        alt="logo"
        className="logo"
    />

    <div className="nav-center">

        <Link to="/">Inicio</Link>

        <Link to="/nosotros" className="titulo"> BEESOCC</Link>

        <Link to="/contacto">Contacto</Link>

    </div>

    <div className="nav-right">

        <Link to="/login">Iniciar Sesion</Link>

        <Link to="/register">Registrate</Link>

    </div>
    

    </nav>
    )
}

export default Navbar
