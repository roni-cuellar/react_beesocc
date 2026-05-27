
import "./Sidebar.css"

import { Link } from "react-router-dom"

function Sidebar() {

    return (

        <aside className="sidebar_unico">

            <h2 className="sidebar-title">
                BEESOCC
            </h2>

            <nav className="side">

                <Link to="/">Dashboard</Link>
                <Link to="/equipo">Equipo </Link>
                <Link to="/jugador">Jugador</Link>
                <Link to="/login">Partidos</Link>
                <Link to="/register">Estadisticas</Link>
                
        <Link to="/ligas"> Ligas </Link>


            </nav>

        </aside>

    )
}

export default Sidebar