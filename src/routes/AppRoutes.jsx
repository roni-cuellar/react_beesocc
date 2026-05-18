import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage/HomePage"
import NosotrosPage from "../pages/NosotrosPage/NosotrosPage"
import ContactoPage from "../pages/ContactoPage/ContactoPage"

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/nosotros" element={<NosotrosPage />} />

            <Route path="/contacto" element={<ContactoPage />} />

        </Routes>

    )
}

export default AppRoutes