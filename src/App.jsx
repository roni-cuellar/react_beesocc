import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import "./App.css"

import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
  <>
      <Navbar />

    <AppRoutes />

      <Footer />
  </>
  )
}

export default App