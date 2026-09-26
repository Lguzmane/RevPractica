import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import AppPage from "../pages/App";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";

import PoliticaPrivacidad from "../pages/legales/PoliticaPrivacidad";
import TerminosUso from "../pages/legales/TerminosUso";


function AppRoutes() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* LEGALES */}

        <Route
          path="/privacidad"
          element={<PoliticaPrivacidad />}
        />

        <Route
          path="/terminos"
          element={<TerminosUso />}
        />

      </Route>

    </Routes>
  );
}


export default AppRoutes;