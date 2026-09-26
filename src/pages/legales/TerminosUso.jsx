import heroImage from "../../assets/images/hero-legal.png";


function TerminosUso() {
  return (
    <div className="terms-page">


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
              Términos de Uso
            </h1>

            <p>
              Condiciones de uso del sitio web de AuraBee
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TÉRMINOS DE USO
      ===================================================== */}

      <section className="section legal-content">

        <div className="container">

          <div className="legal-content__document">

            <span className="eyebrow">
              INFORMACIÓN LEGAL
            </span>

            <h2 className="section__title">
              Términos de Uso
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


export default TerminosUso;