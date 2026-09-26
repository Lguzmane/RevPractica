import heroImage from "../../assets/images/hero-legal.png";


function PoliticaPrivacidad() {
  return (
    <div className="privacy-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="page-hero legal-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="container">

          <div className="page-hero__content">

            <h1>
              Política de Privacidad
            </h1>

            <p>
              Información sobre privacidad y tratamiento de datos en AuraBee
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          POLÍTICA DE PRIVACIDAD
      ===================================================== */}

      <section className="section legal-content">

        <div className="container">

          <div className="legal-content__document">

            <span className="eyebrow">
              INFORMACIÓN LEGAL
            </span>

            <h2 className="section__title">
              Política de Privacidad
            </h2>

            <p className="legal-content__updated">
              Última actualización: PENDIENTE
            </p>


            <div className="legal-content__body">

              <p className="section__text">
                PENDIENTE
              </p>

            </div>

          </div>

        </div>

      </section>


    </div>
  );
}


export default PoliticaPrivacidad;