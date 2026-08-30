import { NavLink } from "react-router-dom";

import logo from "../../assets/logos/LogoAuraBee.png";


function Navbar() {
  return (
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


      <NavLink
        to="/app"
        className="navbar__download"
      >
        Descargar
      </NavLink>

    </nav>
  );
}


export default Navbar;