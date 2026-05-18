import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import "./App.css"

import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
  <BrowserRouter>
      <Navbar />

    <AppRoutes />

      <Footer />
  </BrowserRouter>
  )
}

export default App