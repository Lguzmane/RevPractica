import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero-home.png";
import monitorImage from "../assets/images/monitoreo-home.png";
import managementImage from "../assets/images/todoloque-home.png";
import fieldImage from "../assets/images/diseñadopara-home.png";


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
              AuraBee es un proyecto de investigación aplicada y desarrollo
              tecnológico enfocado en la apicultura de precisión mediante
              bioacústica e Inteligencia Artificial.
            </p>

            <p className="home-hero__text">
              Monitorea y diagnostica el estado sanitario y biológico de las
              colmenas a través del análisis de las frecuencias acústicas y
              vibratorias emitidas por la colonia en tiempo real.
            </p>

            <a
              href="#monitoreo"
              className="button button--dark"
            >
              Comenzar
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          MONITOREO
      ===================================================== */}

      <section
        className="section"
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


              <div className="feature-list">

                <div className="feature-item">

                  <span className="feature-dot" />

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


                <div className="feature-item">

                  <span className="feature-dot" />

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


                <div className="feature-item">

                  <span className="feature-dot" />

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

      <section className="section">

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


              <div className="feature-list">

                <div className="feature-item">

                  <span className="feature-dot" />

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

                  <span className="feature-dot" />

                  <div>
                    <h3 className="feature-title">
                      Control integral
                    </h3>

                    <p className="feature-text">
                      Mantén un historial de estados de cada colmena y
                      registra notas mediante voz.
                    </p>
                  </div>

                </div>


                <div className="feature-item">

                  <span className="feature-dot" />

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

      <section className="section section--honey">

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


              <div className="feature-list">

                <div className="feature-item">

                  <span className="feature-dot" />

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

                  <span className="feature-dot" />

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

                  <span className="feature-dot" />

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

      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">
              Reconocimientos
            </h2>

          </div>


          <div className="cards-grid">

            <article className="card">
              <h3 className="card-title">
                Primer Lugar
              </h3>

              <p className="card-text">
                Semillero USM 2025
              </p>
            </article>


            <article className="card">
              <h3 className="card-title">
                Primer Lugar
              </h3>

              <p className="card-text">
                Challenge Impact Our Communities GHD – Gobierno de Victoria
              </p>
            </article>


            <article className="card">
              <h3 className="card-title">
                Top 10 Mejores Proyectos
              </h3>

              <p className="card-text">
                Impacto Emprendedor UDD – Banco de Chile
              </p>
            </article>


            <article className="card">
              <h3 className="card-title">
                Mérito Innovador
              </h3>

              <p className="card-text">
                Feria de Software 2025 USM
              </p>
            </article>


            <article className="card">
              <h3 className="card-title">
                Mérito Académico
              </h3>

              <p className="card-text">
                Feria de Software 2025 USM
              </p>
            </article>


            <article className="card">
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

      <section className="cta">

        <div className="container">

          <span className="eyebrow">
            DA EL PRIMER PASO
          </span>

          <h2>
            Empieza a usar AuraBee
            <br />
            hoy.
          </h2>

          <Link
            to="/contacto"
            className="button button--primary"
          >
            Comienza Ahora →
          </Link>

        </div>

      </section>

    </div>
  );
}


export default Home;