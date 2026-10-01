import { useEffect, useState } from "react";

import DownloadModal from "../components/common/DownloadModal";

import heroImage from "../assets/images/hero-app.png";
import featuresImage from "../assets/images/funcionalidades-app.png";
import ctaImage from "../assets/images/panal_cta.png";

import bienvenidaImage from "../assets/images/Pantalla-Bienvenidos.png";
import crearCuentaImage from "../assets/images/Pantalla-Crearcuenta.png";
import misColmenasImage from "../assets/images/Pantalla-Miscolmenas.png";
import anadirColmenaImage from "../assets/images/Pantalla-Añadircolmena.png";
import grabacionGuiadaImage from "../assets/images/Pantalla-Grabacionguiada.png";
import diagnosticoImage from "../assets/images/Pantalla-Diagnostico.png";

import {
  FaWaveSquare,
  FaBookOpen,
  FaBell
} from "react-icons/fa6";


function App() {

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="page-hero app-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="container">

          <div className="page-hero__content">

            <h1>
              Nuestra App
            </h1>

            <p>
              Monitoreo Inteligente de Tus
              <br />
              Colmenas
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTELIGENCIA ARTIFICIAL
      ===================================================== */}

      <section className="section app-ai">

        <div className="container">

          <div className="section__row section--image-right">


            {/* CONTENIDO */}

            <div className="section__content" data-animate="left">

              <span className="eyebrow">
                TECNOLOGÍA DE PUNTA
              </span>

              <h2 className="section__title">
                Inteligencia Artificial al
                <br />
                servicio de tu negocio
              </h2>

              <p className="section__text">
                AuraBee transforma el sonido de las colmenas en información para
                su monitoreo. La señal de audio capturada es procesada mediante
                filtros digitales que reducen el ruido de fondo y posteriormente
                se transforma en un espectrograma para su análisis.
              </p>

              <p className="section__text">
                El sistema utiliza Redes Neuronales profundas especializadas en
                el tratamiento computacional de espectrogramas. El modelo ha sido
                entrenado con una base de datos propia de registros de audio de
                colmenas reales, debidamente etiquetados y contrastados.
              </p>

              <p className="section__text">
                A partir de estos registros, AuraBee reconoce patrones acústicos
                y armónicos asociados al “llanto de orfandad”, una firma sonora
                biológica imperceptible para el oído humano que aparece cuando
                la reina está ausente.
              </p>

              <p className="section__text">
                Su arquitectura está optimizada para operar fluidamente en
                dispositivos móviles convencionales, sin exigir infraestructura
                informática de alto costo en el apiario.
              </p>

            </div>


            {/* PANTALLAS DE LA APP */}

            <div className="app-ai__visual">

              <img
                src={bienvenidaImage}
                alt="Pantalla de bienvenida de AuraBee"
                className="app-ai__image"
              />

              <img
                src={crearCuentaImage}
                alt="Pantalla para crear una cuenta en AuraBee"
                className="app-ai__image"
              />

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          FUNCIONALIDADES
      ===================================================== */}

      <section className="section app-features">

        <div className="container">


          {/* ENCABEZADO */}

          <div className="app-section-header">

            <span className="eyebrow app-features__eyebrow">
              LO QUE HACE AURABEE
            </span>

            <h2 className="section__title">
              Funcionalidades
            </h2>

            <p className="section__text app-features__intro">
              AuraBee integra diagnóstico, registro y seguimiento de cada colmena
              en una herramienta diseñada para operar directamente desde el
              teléfono móvil.
            </p>

          </div>


          {/* CONTENIDO */}

          <div className="section__row section--image-left">

            <div className="section__image" data-animate="left">

              <img
                src={featuresImage}
                alt="Funcionalidades de AuraBee"
              />

            </div>


            <div className="feature-list app-features__list">


              <article className="card app-features__card" data-animate>

                <div className="app-features__icon">
                  <FaWaveSquare />
                </div>

                <div className="app-features__card-content">

                  <h3 className="feature-title">
                    Diagnóstico bioacústico
                  </h3>

                  <p className="feature-text">
                    Evalúa el estado sanitario y biológico de la colmena mediante
                    el análisis de su sonido, sin intervención física dentro del
                    cajón.
                  </p>

                </div>

              </article>


              <article className="card app-features__card" data-animate>

                <div className="app-features__icon">
                  <FaBookOpen />
                </div>

                <div className="app-features__card-content">

                  <h3 className="feature-title">
                    Diario de campo digital
                  </h3>

                  <p className="feature-text">
                    Registra cada colmena mediante un identificador alfanumérico
                    e incorpora datos como raza de abejas, tipo de cajón,
                    historial de estados y notas por voz.
                  </p>

                </div>

              </article>


              <article className="card app-features__card" data-animate>

                <div className="app-features__icon">
                  <FaBell />
                </div>

                <div className="app-features__card-content">

                  <h3 className="feature-title">
                    Recordatorios inteligentes
                  </h3>

                  <p className="feature-text">
                    Configura alertas de revisión recomendada cada 3 días u
                    obligatoria cada 5 días, según el historial biológico y de
                    riesgo de cada colmena.
                  </p>

                </div>

              </article>


            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CÓMO FUNCIONA
      ===================================================== */}

      <section className="section app-process">

        <div className="container">


          {/* ENCABEZADO */}

          <div className="app-section-header">

            <span className="eyebrow">
              PROCESO SIMPLE
            </span>

            <h2 className="section__title">
              ¿Cómo funciona AuraBee?
            </h2>

          </div>


          {/* PASOS */}

          <div className="app-process__grid">


            <article className="app-process__item">

              <span className="app-process__number app-process__number--yellow">
                1
              </span>

              <h3 className="feature-title">
                Captura el audio
              </h3>

              <p className="feature-text">
                Acerca el micrófono de tu teléfono móvil a la piquera de la
                colmena durante 2 a 10 segundos, sin necesidad de abrir la tapa
                ni alterar el microclima interno.
              </p>

            </article>


            <article className="app-process__item">

              <span className="app-process__number app-process__number--orange">
                2
              </span>

              <h3 className="feature-title">
                Procesamiento de la señal
              </h3>

              <p className="feature-text">
                AuraBee aplica filtros digitales para reducir el ruido de fondo
                y transforma matemáticamente el audio capturado.
              </p>

            </article>


            <article className="app-process__item">

              <span className="app-process__number app-process__number--brown">
                3
              </span>

              <h3 className="feature-title">
                Análisis con IA
              </h3>

              <p className="feature-text">
                El espectrograma es analizado por un modelo de Deep Learning
                entrenado para reconocer patrones acústicos y armónicos
                asociados al “llanto de orfandad”.
              </p>

            </article>


            <article className="app-process__item">

              <span className="app-process__number app-process__number--yellow">
                4
              </span>

              <h3 className="feature-title">
                Recibe el diagnóstico
              </h3>

              <p className="feature-text">
                En menos de 8 segundos, AuraBee muestra si la reina está presente
                o ausente y registra el resultado en el historial del apiario.
              </p>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          PANTALLAS DE AURABEE
      ===================================================== */}

      <section className="section app-screens">

        <div className="container">


          {/* ENCABEZADO */}

          <div className="app-section-header">

            <span className="eyebrow">
              EXPLORA LA APP
            </span>

            <h2 className="section__title">
              Conoce las pantallas de AuraBee
            </h2>

          </div>


          {/* PANTALLAS */}

          <div className="app-screens__grid">


            <article className="app-screens__item">

              <div className="app-screens__phone">

                <img
                  src={misColmenasImage}
                  alt="Pantalla Mis Colmenas de AuraBee"
                />

              </div>

              <h3 className="feature-title">
                Mis Colmenas
              </h3>

              <p className="feature-text">
                Consulta el inventario de cajones registrados, revisa su estado
                sanitario consolidado y accede directamente a diagnósticos
                rápidos.
              </p>

            </article>


            <article className="app-screens__item">

              <div className="app-screens__phone">

                <img
                  src={anadirColmenaImage}
                  alt="Pantalla Añadir Colmena de AuraBee"
                />

              </div>

              <h3 className="feature-title">
                Añadir Colmena
              </h3>

              <p className="feature-text">
                Registra los datos descriptivos de la colmena, fotografías del
                marco, código identificador y tipo de colmena.
              </p>

            </article>


            <article className="app-screens__item">

              <div className="app-screens__phone">

                <img
                  src={grabacionGuiadaImage}
                  alt="Pantalla Grabación Guiada de AuraBee"
                />

              </div>

              <h3 className="feature-title">
                Grabación Guiada
              </h3>

              <p className="feature-text">
                Sigue instrucciones paso a paso para posicionar correctamente el
                micrófono en la piquera y realizar la captura sonora durante el
                tiempo indicado.
              </p>

            </article>


            <article className="app-screens__item">

              <div className="app-screens__phone">

                <img
                  src={diagnosticoImage}
                  alt="Pantalla Diagnóstico de AuraBee"
                />

              </div>

              <h3 className="feature-title">
                Diagnóstico
              </h3>

              <p className="feature-text">
                Consulta la ficha de cada colmena con el resultado del análisis
                —reina presente o ausente— y activa recordatorios personalizados
                para su seguimiento.
              </p>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta app-cta">

        <div className="container">


          {/* CONTENIDO */}

          <div className="cta__content">

            <span className="eyebrow">
              LLEVA AURABEE CONTIGO
            </span>

            <h2>
              Descarga AuraBee y
              <br />
              empieza hoy
            </h2>

            <p>
              Lleva el monitoreo de tus colmenas directamente en tu teléfono
              y accede a herramientas para apoyar la gestión del apiario.
            </p>

            <button
              type="button"
              className="cta__button"
              onClick={() => setDownloadModalOpen(true)}
            >
              Descargar Ahora
            </button>

          </div>


          {/* VISUAL */}

          <div className="cta__visual">

            <img
              src={ctaImage}
              alt="Panal AuraBee"
            />

          </div>


        </div>

      </section>


      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />


    </div>
  );
}


export default App;