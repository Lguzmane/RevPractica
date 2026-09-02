import heroImage from "../assets/images/hero-app.png";
import featuresImage from "../assets/images/funcionalidades-app.png";


function App() {
  return (
    <div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="page-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="container">

          <div className="page-hero__content">

            <h1>
              Nuestra App
            </h1>

            <p>
              Monitoreo Inteligente de Tus Colmenas
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTELIGENCIA ARTIFICIAL
      ===================================================== */}

      <section className="section">

        <div className="container">

          <div className="section__row section--image-right">


            <div className="section__content">

              <span className="eyebrow">
                TECNOLOGÍA DE PUNTA
              </span>

              <h2 className="section__title">
                Inteligencia Artificial al servicio de tu negocio
              </h2>

              <p className="section__text">
                AuraBee transforma el sonido de las colmenas en información
                para su monitoreo. La señal capturada es procesada mediante
                filtros digitales para reducir el ruido de fondo y
                posteriormente transformada para su análisis.
              </p>

              <p className="section__text">
                El sistema utiliza Redes Neuronales profundas especializadas
                en el tratamiento computacional de espectrogramas y ha sido
                entrenado sobre una base de datos propia de registros de audio
                de colmenas reales, etiquetados y contrastados.
              </p>

            </div>


            <div className="section__image">

              <div className="card">
                {/* IMAGEN / PANTALLA PENDIENTE */}
              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          FUNCIONALIDADES
      ===================================================== */}

      <section className="section section--honey">

        <div className="container">


          <div className="section__content">

            <span className="eyebrow">
              LO QUE HACE AURABEE
            </span>

            <h2 className="section__title">
              Funcionalidades
            </h2>

          </div>


          <div className="section__row section--image-left">


            <div className="section__image">

              <img
                src={featuresImage}
                alt="Funcionalidades de AuraBee"
              />

            </div>


            <div className="feature-list">


              <article className="card">

                <h3 className="feature-title">
                  Diagnóstico bioacústico
                </h3>

                <p className="feature-text">
                  Evaluación sanitaria instantánea mediante el sonido de la
                  colonia, sin intervención física dentro del cajón.
                </p>

              </article>


              <article className="card">

                <h3 className="feature-title">
                  Diario de campo digital
                </h3>

                <p className="feature-text">
                  Registra cada colmena, sus características, historial de
                  estados y notas por voz.
                </p>

              </article>


              <article className="card">

                <h3 className="feature-title">
                  Recordatorios inteligentes
                </h3>

                <p className="feature-text">
                  Configura alertas de revisión de acuerdo con el historial
                  biológico y de riesgo detectado en cada colmena.
                </p>

              </article>


            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          CÓMO FUNCIONA
      ===================================================== */}

      <section className="section">

        <div className="container">


          <div className="section__content">

            <span className="eyebrow">
              PROCESO SIMPLE
            </span>

            <h2 className="section__title">
              ¿Cómo funciona AuraBee?
            </h2>

          </div>


          <div className="cards-grid">


            <article className="card">

              <h3 className="card-title">
                1. Captura el audio
              </h3>

              <p className="card-text">
                Acerca el micrófono de tu teléfono móvil a la piquera de la
                colmena durante 2 a 10 segundos.
              </p>

            </article>


            <article className="card">

              <h3 className="card-title">
                2. Procesamiento de la señal
              </h3>

              <p className="card-text">
                AuraBee aplica filtros digitales para reducir el ruido de
                fondo y transforma matemáticamente el audio capturado.
              </p>

            </article>


            <article className="card">

              <h3 className="card-title">
                3. Análisis con IA
              </h3>

              <p className="card-text">
                El espectrograma es analizado por un modelo de Deep Learning
                entrenado para reconocer patrones acústicos asociados al
                “llanto de orfandad”.
              </p>

            </article>


            <article className="card">

              <h3 className="card-title">
                4. Recibe el diagnóstico
              </h3>

              <p className="card-text">
                En menos de 8 segundos, AuraBee muestra si la reina está
                presente o ausente y registra el resultado en el historial
                del apiario.
              </p>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          PANTALLAS DE AURABEE
      ===================================================== */}

      <section className="section">

        <div className="container">


          <div className="section__content">

            <span className="eyebrow">
              EXPLORA LA APP
            </span>

            <h2 className="section__title">
              Conoce estas pantallas de AuraBee
            </h2>

          </div>


          <div className="cards-grid">


            <article className="card">

              <div className="section__image">
                {/* CAPTURA PENDIENTE */}
              </div>

              <h3 className="card-title">
                Mis Colmenas
              </h3>

              <p className="card-text">
                Consulta el inventario de cajones registrados, su estado
                sanitario y accede a diagnósticos rápidos.
              </p>

            </article>


            <article className="card">

              <div className="section__image">
                {/* CAPTURA PENDIENTE */}
              </div>

              <h3 className="card-title">
                Añadir Colmena
              </h3>

              <p className="card-text">
                Registra los datos de la colmena, fotografías del marco,
                código identificador y tipo de colmena.
              </p>

            </article>


            <article className="card">

              <div className="section__image">
                {/* CAPTURA PENDIENTE */}
              </div>

              <h3 className="card-title">
                Grabación Guiada
              </h3>

              <p className="card-text">
                Sigue las instrucciones para posicionar correctamente el
                micrófono y realizar la captura sonora.
              </p>

            </article>


            <article className="card">

              <div className="section__image">
                {/* CAPTURA PENDIENTE */}
              </div>

              <h3 className="card-title">
                Diagnóstico
              </h3>

              <p className="card-text">
                Consulta el resultado del análisis —reina presente o ausente—
                y configura recordatorios para el seguimiento del apiario.
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

          <div className="cta__content">

            <span className="eyebrow">
              DESCARGA GRATIS
            </span>

            <h2>
              Descarga AuraBee y
              <br />
              empieza hoy
            </h2>

            {/* CONTENIDO CTA PENDIENTE */}

          </div>

        </div>

      </section>


    </div>
  );
}


export default App;