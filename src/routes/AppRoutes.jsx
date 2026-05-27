import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage/HomePage"
import NosotrosPage from "../pages/NosotrosPage/NosotrosPage"
import ContactoPage from "../pages/ContactoPage/ContactoPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage"
import Ligas from "../pages/Ligas/Ligas"
import Jugador from "../pages/Jugadores/Jugador"
import Equipo from "../pages/Equipos/Equipo"
import CrearLiga from "../pages/CrearLiga/CrearLiga"
import Dashboard from "../pages/Dashboard/Dashboard"


function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/nosotros" element={<NosotrosPage />} />

            <Route path="/contacto" element={<ContactoPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/estadisticas" element={<StatisticsPage />} />

            <Route path="/ligas" element={<Ligas />} />

            <Route path="/jugador" element={<Jugador />} />

            <Route path="/equipo" element={<Equipo />} />

            <Route path="/crear" element={<CrearLiga />} />

            <Route path="/dashboard" element={<Dashboard />} /> 



        </Routes>

    )
}

export default AppRoutes