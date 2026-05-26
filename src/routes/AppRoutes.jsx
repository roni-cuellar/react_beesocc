import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage/HomePage"
import NosotrosPage from "../pages/NosotrosPage/NosotrosPage"
import ContactoPage from "../pages/ContactoPage/ContactoPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/nosotros" element={<NosotrosPage />} />

            <Route path="/contacto" element={<ContactoPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/login" element={<LoginPage />} />

        </Routes>

    )
}

export default AppRoutes