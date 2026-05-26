
import "./Sidebar.css"

import { Link } from "react-router-dom"

function Sidebar() {

    return (

        <aside className="sidebar">

            <h2 className="sidebar-title">
                BEESOCC
            </h2>

            <nav className="side">

                <Link to="/">Dashboard</Link>
                <Link to="/nosotros">Equipos</Link>
                <Link to="/contacto">Jugadores</Link>
                <Link to="/login">Partidos</Link>
                <Link to="/register">Estadisticas</Link>

            </nav>

        </aside>

    )
}

export default Sidebar