import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logos/LogoAuraBee.png";

import DownloadModal from "../common/DownloadModal";


function Navbar() {

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);


  return (
    <>

      <nav className="navbar">

        <NavLink
          to="/"
          className="navbar__logo"
          aria-label="Ir al inicio"
        >
          <img
            src={logo}
            alt="AuraBee"
          />
        </NavLink>


        <ul className="navbar__links">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/app"
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              App
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              Nosotros
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              Contacto
            </NavLink>
          </li>

        </ul>


        <button
          type="button"
          className="navbar__download"
          onClick={() => setDownloadModalOpen(true)}
        >
          Descargar
        </button>

      </nav>


      {/* =====================================================
          MODAL DESCARGAR APP
      ===================================================== */}

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

    </>
  );
}


export default Navbar;