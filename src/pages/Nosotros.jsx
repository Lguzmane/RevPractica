import heroImage from "../assets/images/hero-nosotros.png";
import companyImage from "../assets/images/nuestraempresa-nosotros.png";
import valuesImage from "../assets/images/nuestrosvalores-nosotros.png";

import workerBeeIcon from "../assets/images/obrera_aurabee2.png";
import crownIcon from "../assets/images/corona_aurabee2.png";
import ctaImage from "../assets/images/panal_cta.png";

import {
  FaFlask,
  FaLeaf
} from "react-icons/fa6";

import {
  MdHealthAndSafety,
  MdAccessibilityNew,
  MdPublic
} from "react-icons/md";


function Nosotros() {
  return (
    <div className="about-page">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="page-hero about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container">
          <div className="page-hero__content">
            <h1>Nosotros</h1>

            <p>
              Conoce Nuestro Propósito y La Historia Detrás De AuraBee
            </p>
          </div>
        </div>
      </section>


      {/* ======================================================
          NUESTRA EMPRESA
      ====================================================== */}

      <section className="section about-company">
        <div className="container">
          <div className="section__row section--image-right">

            <div className="section__content about-company__content">
              <span className="eyebrow">
                SOBRE AURABEE
              </span>

              <h2 className="section__title">
                Nuestra Empresa
              </h2>

              <p className="section__text">
                AuraBee nació a partir del trabajo de titulación e investigación
                aplicada desarrollado en el Departamento de Electrónica e
                Informática de la Universidad Técnica Federico Santa María
                (UTFSM).
              </p>

              <p className="section__text">
                Es un proyecto de investigación aplicada y desarrollo
                tecnológico enfocado en la apicultura de precisión mediante
                bioacústica e Inteligencia Artificial.
              </p>

              <p className="section__text">
                Su desarrollo responde a uno de los principales desafíos de la
                actividad apícola: la detección tardía de la orfandad, una
                situación que puede provocar pérdida de productividad y el
                colapso irreversible de la colonia si no se interviene
                oportunamente.
              </p>

              <p className="section__text">
                AuraBee propone una solución 100 % software que permite avanzar
                hacia una gestión de precisión basada en información objetiva y
                oportuna, reduciendo los tiempos de revisión en terreno y
                facilitando el acceso a tecnología avanzada para pequeños y
                medianos apicultores.
              </p>
            </div>

            <div className="section__image about-company__image">
              <img
                src={companyImage}
                alt="Apiario AuraBee"
              />
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          MISIÓN Y VISIÓN
      ====================================================== */}

      <section className="section section--honey about-purpose">
        <div className="container">

          <div className="about-purpose__layout">

            <div className="about-purpose__aside">

              <div className="about-purpose__aside-icon">
                <img
                  src={workerBeeIcon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="about-purpose__line" />

            </div>


            <div className="about-purpose__content">

              <div className="about-purpose__mission">

                <span className="eyebrow">
                  NUESTRO PROPÓSITO
                </span>

                <h2 className="section__title">
                  Nuestra Misión
                </h2>

                <p className="section__text">
                  Transformar la apicultura global en una actividad tecnificada,
                  sostenible y de precisión mediante la democratización de
                  herramientas de Inteligencia Artificial accesibles, deteniendo
                  la pérdida de colmenas y protegiendo los servicios ecosistémicos
                  de polinización.
                </p>

              </div>


              <div className="card about-purpose__vision">

                <div className="about-purpose__vision-marker">
                  <img
                    src={crownIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div className="about-purpose__vision-content">

                  <h3 className="card-title">
                    Nuestra Visión
                  </h3>

                  <p className="card-text">
                    Convertirse en el estándar tecnológico y bioacústico de
                    monitoreo sanitario apícola a nivel mundial desde la Región
                    del Biobío.
                  </p>

                </div>

              </div>

            </div>


            <div className="about-purpose__ornament">
              {/* ORNAMENTO PENDIENTE */}
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          NUESTROS VALORES
      ====================================================== */}

      <section className="section about-values">
        <div className="container">

          <div className="about-values__header">

            <span className="eyebrow">
              LO QUE NOS GUÍA
            </span>

            <h2 className="section__title">
              Nuestros Valores
            </h2>

          </div>


          <div className="section__row section--image-right">

            <div className="feature-list about-values__list">


              {/* RIGOR CIENTÍFICO */}

              <article className="card about-values__card">

                <div className="about-values__marker">
                  <FaFlask />
                </div>

                <div className="about-values__card-content">

                  <h3 className="feature-title">
                    Rigor científico
                  </h3>

                  <p className="feature-text">
                    Desarrollo tecnológico sustentado en investigación aplicada
                    y evidencia.
                  </p>

                </div>

              </article>


              {/* BIENESTAR ANIMAL */}

              <article className="card about-values__card">

                <div className="about-values__marker">
                  <MdHealthAndSafety />
                </div>

                <div className="about-values__card-content">

                  <h3 className="feature-title">
                    Bienestar animal y no invasión
                  </h3>

                  <p className="feature-text">
                    Tecnología orientada al monitoreo sin intervención física
                    dentro de la colmena.
                  </p>

                </div>

              </article>


              {/* SOSTENIBILIDAD */}

              <article className="card about-values__card">

                <div className="about-values__marker">
                  <FaLeaf />
                </div>

                <div className="about-values__card-content">

                  <h3 className="feature-title">
                    Sostenibilidad ecosistémica
                  </h3>

                  <p className="feature-text">
                    Protección de las colmenas y de los servicios ecosistémicos
                    asociados a la polinización.
                  </p>

                </div>

              </article>


              {/* ACCESIBILIDAD */}

              <article className="card about-values__card">

                <div className="about-values__marker">
                  <MdAccessibilityNew />
                </div>

                <div className="about-values__card-content">

                  <h3 className="feature-title">
                    Accesibilidad tecnológica
                  </h3>

                  <p className="feature-text">
                    Herramientas diseñadas para acercar tecnología avanzada a
                    pequeños y medianos apicultores.
                  </p>

                </div>

              </article>


              {/* VOCACIÓN REGIONAL */}

              <article className="card about-values__card">

                <div className="about-values__marker">
                  <MdPublic />
                </div>

                <div className="about-values__card-content">

                  <h3 className="feature-title">
                    Vocación regional con alcance global
                  </h3>

                  <p className="feature-text">
                    Innovación desarrollada desde la Región del Biobío con
                    proyección internacional.
                  </p>

                </div>

              </article>

            </div>


            <div className="section__image about-values__image">
              <img
                src={valuesImage}
                alt="Tecnología aplicada a la apicultura"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          NOTICIAS DESTACADAS
      ====================================================== */}

      <section className="section about-news">
        <div className="container">

          <div className="about-news__header">

            <span className="eyebrow">
              ACTUALIDAD
            </span>

            <h2 className="section__title">
              Noticias Destacadas
            </h2>

          </div>


          <div className="cards-grid about-news__grid">

            <article className="card about-news__card">

              <div className="about-news__image">
                {/* IMAGEN PENDIENTE */}
              </div>

              <h3 className="card-title">
                PENDIENTE
              </h3>

              <p className="card-text">
                PENDIENTE
              </p>

            </article>


            <article className="card about-news__card">

              <div className="about-news__image">
                {/* IMAGEN PENDIENTE */}
              </div>

              <h3 className="card-title">
                PENDIENTE
              </h3>

              <p className="card-text">
                PENDIENTE
              </p>

            </article>


            <article className="card about-news__card">

              <div className="about-news__image">
                {/* IMAGEN PENDIENTE */}
              </div>

              <h3 className="card-title">
                PENDIENTE
              </h3>

              <p className="card-text">
                PENDIENTE
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="cta about-cta">
        <div className="container">

          <div className="cta__content">

            <span className="eyebrow">
              TECNOLOGÍA PARA UNA APICULTURA MÁS PRECISA
            </span>

            <h2>
              Lleva AuraBee a tu apiario
            </h2>

            <p>
              Descubre una herramienta desarrollada para apoyar el monitoreo
              y la gestión de tus colmenas mediante bioacústica e Inteligencia
              Artificial.
            </p>

            <ul className="cta__list">

              <li className="cta__item">
                Monitoreo no invasivo desde el teléfono móvil.
              </li>

              <li className="cta__item">
                Información objetiva para apoyar la toma de decisiones.
              </li>

              <li className="cta__item">
                Tecnología accesible para la gestión del apiario.
              </li>

            </ul>

            <button
              type="button"
              className="cta__button"
            >
              Descargar AuraBee
            </button>

          </div>


          <div className="cta__visual">
            <img
              src={ctaImage}
              alt="Panal AuraBee"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Nosotros;
