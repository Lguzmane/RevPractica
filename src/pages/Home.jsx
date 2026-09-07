import { Link } from "react-router-dom";

import {
  MdGraphicEq,
  MdPsychology,
  MdAppRegistration,
  MdHistory,
  MdNotificationsActive
} from "react-icons/md";

import {
  FaTrophy,
  FaStar,
  FaMedal,
  FaLightbulb,
  FaGraduationCap,
  FaHandshake
} from "react-icons/fa";

import heroImage from "../assets/images/hero-home.png";
import monitorImage from "../assets/images/monitoreo-home.png";
import managementImage from "../assets/images/todoloque-home.png";
import fieldImage from "../assets/images/diseñadopara-home.png";

import queenIcon from "../assets/images/reina_aurabee.png";
import workerBeeIcon from "../assets/images/obrera_aurabee2.png";
import crownIcon from "../assets/images/corona_aurabee.png";


function Home() {
  return (
    <div className="home">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="page-hero home-hero">

        <img
          className="home-hero__background"
          src={heroImage}
          alt=""
          aria-hidden="true"
        />

        <div className="container">

          <div className="page-hero__content">

            <h1 className="home-hero__title">
              AuraBee:

              <span className="home-hero__highlight">
                Monitoreo Inteligente
                <br />
                de Tus Colmenas
              </span>
            </h1>

            <p className="home-hero__text">
              Revisa tu apiario de forma rápida y sencilla usando solo tu
              teléfono. AuraBee analiza el sonido de tus colmenas con Inteligencia
              Artificial para detectar si la reina está presente.
            </p>

            <p className="home-hero__text">
              Ahorra más de un 80 % del tiempo de revisión en terreno, sin necesidad de abrir tus colmenas.
            </p>

            <a
              href="#monitoreo"
              className="button button--dark"
            >
              Conoce AuraBee
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          MONITOREO
      ===================================================== */}

      <section
        className="section home-monitor"
        id="monitoreo"
      >

        <div className="container">

          <div className="section__row section--image-left">

            <div className="section__image">

              <img
                src={monitorImage}
                alt="Colmena monitoreada con AuraBee"
              />

            </div>


            <div className="section__content">

              <h2 className="section__title">
                Monitoreo Inteligente
              </h2>

              <p className="section__text">
                AuraBee permite evaluar el estado de las colmenas mediante
                el análisis bioacústico, utilizando el teléfono móvil para
                capturar el sonido de la colonia.
              </p>


              <div className="feature-list home-monitor__list">


                <div className="feature-item home-monitor__item">

                  <span className="home-feature-icon home-feature-icon--yellow">
                    <MdGraphicEq />
                  </span>

                  <div>

                    <h3 className="feature-title">
                      Audio de la colmena
                    </h3>

                    <p className="feature-text">
                      Captura el zumbido de la colonia acercando el micrófono
                      del teléfono a la piquera.
                    </p>

                  </div>

                </div>


                <div className="feature-item home-monitor__item">

                  <span className="home-feature-icon home-feature-icon--orange">
                    <MdPsychology />
                  </span>

                  <div>

                    <h3 className="feature-title">
                      Análisis con IA
                    </h3>

                    <p className="feature-text">
                      Analiza el audio mediante un modelo de Deep Learning
                      especializado en patrones acústicos.
                    </p>

                  </div>

                </div>


                <div className="feature-item home-monitor__item">

                  <span className="home-feature-icon home-feature-icon--brown">

                    <img
                      src={queenIcon}
                      alt=""
                      aria-hidden="true"
                    />

                  </span>

                  <div>

                    <h3 className="feature-title">
                      Detección de la abeja reina
                    </h3>

                    <p className="feature-text">
                      Identifica patrones asociados a la ausencia de la reina.
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GESTIÓN
      ===================================================== */}

      <section className="section home-management">

        <div className="container">

          <div className="section__row section--image-right">

            <div className="section__content">

              <h2 className="section__title">
                Todo lo que necesitas para gestionar tus colmenas
              </h2>

              <p className="section__text">
                AuraBee incorpora herramientas para registrar, monitorear y
                realizar seguimiento de las colmenas desde el teléfono móvil.
              </p>


              <div className="feature-list home-management__list">


                <div className="feature-item">

                  <span className="home-management__icon">
                    <MdAppRegistration />
                  </span>

                  <div>

                    <h3 className="feature-title">
                      Registro
                    </h3>

                    <p className="feature-text">
                      Registra cada colmena mediante un identificador
                      alfanumérico e incorpora información como raza de
                      abejas y tipo de cajón.
                    </p>

                  </div>

                </div>


                <div className="feature-item">

                  <span className="home-management__icon">
                    <MdHistory />
                  </span>

                  <div>

                    <h3 className="feature-title">
                      Diario de campo digital
                    </h3>

                    <p className="feature-text">
                      Mantén un historial de estados de cada colmena y
                      registra notas mediante voz.
                    </p>

                  </div>

                </div>


                <div className="feature-item">

                  <span className="home-management__icon">
                    <MdNotificationsActive />
                  </span>

                  <div>

                    <h3 className="feature-title">
                      Recordatorios
                    </h3>

                    <p className="feature-text">
                      Configura alertas de revisión según el historial
                      biológico y de riesgo detectado.
                    </p>

                  </div>

                </div>


              </div>

            </div>


            <div className="section__image">

              <img
                src={managementImage}
                alt="Gestión de colmenas con AuraBee"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APIARIO
      ===================================================== */}

      <section className="section section--honey home-field">

        <div className="container">

          <div className="section__row section--image-left">

            <div className="section__image">

              <img
                src={fieldImage}
                alt="Trabajo en el apiario"
              />

            </div>


            <div className="section__content">

              <h2 className="section__title">
                Diseñada Para El
                <br />
                Trabajo En El Apiario
              </h2>

              <p className="section__text">
                AuraBee está optimizada para funcionar en dispositivos
                móviles convencionales, sin exigir infraestructura
                informática de alto costo.
              </p>


              <div className="feature-list home-field__list">


                <div className="feature-item">

                  <span className="home-field__bee-icon">

                    <img
                      src={workerBeeIcon}
                      alt=""
                      aria-hidden="true"
                    />

                  </span>

                  <div>

                    <h3 className="feature-title">
                      100 % software
                    </h3>

                    <p className="feature-text">
                      No requiere adquirir, instalar ni mantener sensores
                      físicos o cables.
                    </p>

                  </div>

                </div>


                <div className="feature-item">

                  <span className="home-field__bee-icon">

                    <img
                      src={workerBeeIcon}
                      alt=""
                      aria-hidden="true"
                    />

                  </span>

                  <div>

                    <h3 className="feature-title">
                      Diagnóstico no invasivo
                    </h3>

                    <p className="feature-text">
                      Permite realizar una evaluación sanitaria sin
                      intervención física dentro del cajón.
                    </p>

                  </div>

                </div>


                <div className="feature-item">

                  <span className="home-field__bee-icon">

                    <img
                      src={workerBeeIcon}
                      alt=""
                      aria-hidden="true"
                    />

                  </span>

                  <div>

                    <h3 className="feature-title">
                      Gestión basada en datos
                    </h3>

                    <p className="feature-text">
                      Permite una gestión de precisión basada en datos
                      objetivos y oportunos.
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RECONOCIMIENTOS
      ===================================================== */}

      <section className="section home-awards">

        <div className="container">


          <div className="home-awards__header">

            <img
              src={crownIcon}
              alt=""
              aria-hidden="true"
              className="home-awards__crown"
            />

            <h2 className="section__title">
              Reconocimientos
            </h2>

            <p className="home-awards__description">
              AuraBee ha sido reconocido en distintas instancias de innovación,
              emprendimiento y desarrollo tecnológico.
            </p>

          </div>


          <div className="cards-grid home-awards__grid">


            {/* PRIMER LUGAR — SEMILLERO */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--yellow">
                <FaTrophy />
              </span>

              <h3 className="card-title">
                Primer Lugar
              </h3>

              <p className="card-text">
                Semillero USM 2025
              </p>

            </article>


            {/* PRIMER LUGAR — CHALLENGE */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--orange">
                <FaStar />
              </span>

              <h3 className="card-title">
                Primer Lugar
              </h3>

              <p className="card-text">
                Challenge Impact Our Communities GHD – Gobierno de Victoria
              </p>

            </article>


            {/* TOP 10 */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--brown">
                <FaMedal />
              </span>

              <h3 className="card-title">
                Top 10 Mejores Proyectos
              </h3>

              <p className="card-text">
                Impacto Emprendedor UDD – Banco de Chile
              </p>

            </article>


            {/* MÉRITO INNOVADOR */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--yellow">
                <FaLightbulb />
              </span>

              <h3 className="card-title">
                Mérito Innovador
              </h3>

              <p className="card-text">
                Feria de Software 2025 USM
              </p>

            </article>


            {/* MÉRITO ACADÉMICO */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--orange">
                <FaGraduationCap />
              </span>

              <h3 className="card-title">
                Mérito Académico
              </h3>

              <p className="card-text">
                Feria de Software 2025 USM
              </p>

            </article>


            {/* NETWORKING */}

            <article className="card home-awards__card">

              <span className="home-awards__icon home-awards__icon--brown">
                <FaHandshake />
              </span>

              <h3 className="card-title">
                Premio Networking
              </h3>

              <p className="card-text">
                Feria de Software 2025 USM
              </p>

            </article>


          </div>

        </div>

      </section>


{/* =====================================================
    CTA
===================================================== */}

<section className="cta home-cta">

  <div className="container">

    <div className="cta__content">

      <span className="eyebrow">
        DA EL PRIMER PASO
      </span>

      <h2>
        Empieza a usar AuraBee
        <br />
        hoy.
      </h2>

      <ul className="cta__list">

        <li className="cta__item">
          Conoce una forma más simple de monitorear el estado de tus colmenas
          desde tu teléfono móvil.
        </li>

        <li className="cta__item">
          Accede a herramientas de seguimiento y gestión diseñadas para apoyar
          el trabajo diario en el apiario.
        </li>

      </ul>

      <Link
        to="/contacto"
        className="cta__button"
      >
        Comienza Ahora
      </Link>

    </div>


    <div className="cta__visual">
  <img
    src={queenIcon}
    alt="Abeja reina AuraBee"
  />
</div>

  </div>

</section>


    </div>
  );
}


export default Home;