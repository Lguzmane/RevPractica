import { NavLink } from "react-router-dom";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

import logo from "../../assets/logos/LogoAuraBee.png";
import googlePlay from "../../assets/images/GooglePlay.png";
import appStore from "../../assets/images/AppStore.png";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">


        {/* =====================================================
            PARTE SUPERIOR
        ===================================================== */}

        <div className="footer__top">


          {/* MARCA */}

          <div className="footer__brand">

            <img
              src={logo}
              alt="AuraBee"
              className="footer__logo"
            />

            <p className="footer__description">
              AuraBee es un proyecto de investigación aplicada y desarrollo
              tecnológico enfocado en la apicultura de precisión mediante
              bioacústica e Inteligencia Artificial.
            </p>

          </div>


          {/* DESCARGA + REDES */}

          <div className="footer__column footer__download">

            <h3 className="footer__title">
              Descarga la App
            </h3>

            <div className="footer__stores">

              <button
                type="button"
                className="footer__store-link"
                aria-label="Descargar en App Store"
              >
                <img
                  src={appStore}
                  alt="Descargar en App Store"
                />
              </button>

              <button
                type="button"
                className="footer__store-link"
                aria-label="Descargar en Google Play"
              >
                <img
                  src={googlePlay}
                  alt="Disponible en Google Play"
                />
              </button>

            </div>


            <div className="footer__social-block">

              <h4 className="footer__social-title">
                Síguenos
              </h4>

              <div className="footer__socials">

                <button
                  type="button"
                  className="footer__social"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </button>

                <button
                  type="button"
                  className="footer__social"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </button>

                <a
                  href="https://www.instagram.com/aurabee_usm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label="Instagram de AuraBee"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/aurabeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label="LinkedIn de AuraBee"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>


          {/* NAVEGACIÓN */}

          <div className="footer__column">

            <h3 className="footer__title">
              Navegación
            </h3>

            <ul className="footer__list">

              <li>
                <NavLink
                  to="/app"
                  className="footer__link"
                >
                  La App
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/nosotros"
                  className="footer__link"
                >
                  Nosotros
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contacto"
                  className="footer__link"
                >
                  Contacto
                </NavLink>
              </li>

            </ul>

          </div>


          {/* LEGAL */}

          <div className="footer__column">

            <h3 className="footer__title">
              Legal
            </h3>

            <ul className="footer__list">

              <li>
                <NavLink
                  to="/privacidad"
                  className="footer__link"
                >
                  Política de Privacidad
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/terminos"
                  className="footer__link"
                >
                  Términos de Uso
                </NavLink>
              </li>

            </ul>

          </div>

        </div>


        {/* =====================================================
            PARTE INFERIOR
        ===================================================== */}

        <div className="footer__bottom">


          {/* CONTACTO */}

          <div className="footer__contact">

            <span className="footer__contact-icon">
              <FiMail />
            </span>

            <p className="footer__contact-text">
              Envíanos tus comentarios a:
              <strong className="footer__contact-mail">
                {" "}equipo@aurabee.cl
              </strong>
            </p>

          </div>


          {/* COPYRIGHT */}

          <p className="footer__copyright">
            © 2026 AuraBee. Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}


export default Footer;