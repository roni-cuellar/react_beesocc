import {Routes,Route,useLocation} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import ContactoPage from "./pages/ContactoPage/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage/NosotrosPage";

import Ligas from "./pages/Ligas/Ligas";
import CrearLiga from "./pages/CrearLiga/CrearLiga";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";

function App() {

  const location = useLocation();

  const ocultarLayout =
    location.pathname === "/ligas" ||
    location.pathname === "/crear-liga" ||
    location.pathname === "/dashboard";

  return (

    <>

      {!ocultarLayout && <Navbar />}

      <Routes>

        <Route path="/"element={<HomePage />} />

        <Route path="/contacto" element={<ContactoPage />}/>

        <Route path="/nosotros" element={<NosotrosPage />}  />

        <Route path="/ligas" element={<Ligas />} />

        <Route path="/crear-liga" element={<CrearLiga />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

      {!ocultarLayout && <Footer />}

    </>

  );
}

export default App;