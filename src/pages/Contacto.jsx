import heroImage from "../assets/images/hero-contacto.png";
import formImage from "../assets/images/formulario-contacto.png";
import mapImage from "../assets/images/mapa-contacto.png";
import ctaImage from "../assets/images/obreras_cta.png";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime
} from "react-icons/md";

import { useForm } from "@formspree/react";


function Contacto() {

  /* =====================================================
     FORMSPREE
     Reemplazar ID_FORMSPREE por el identificador
     entregado por Formspree cuando se cree el formulario
  ===================================================== */

  const [state, handleSubmit] = useForm("maeqqnyr");


  return (
    <div className="contact-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="page-hero contact-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container">

          <div className="page-hero__content">

            <h1>
              Contacto
            </h1>

            <p>
              Comunícate Con Nosotros
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          FORMULARIO DE CONTACTO
      ===================================================== */}

      <section
        id="contacto"
        className="section contact-form-section"
      >
        <div className="container">


          {/* ENCABEZADO */}

          <div className="contact-form-section__header">

            <span className="eyebrow">
              CONTACTO
            </span>

            <h2 className="section__title">
              Estamos aquí para ayudarte
            </h2>

          </div>


          {/* IMAGEN + FORMULARIO */}

          <div className="contact-form-section__layout">


            {/* IMAGEN */}

            <div className="contact-form-section__image">

              <img
                src={formImage}
                alt="Abeja sobre una flor"
              />

            </div>


            {/* FORMULARIO */}

            <div className="contact-form-section__card">

              <h2 className="section__title">
                Envíanos un mensaje
              </h2>


              {/* MENSAJE DE ENVÍO EXITOSO */}

              {state.succeeded ? (

                <div className="contact-form__success">

                  <h3>
                    Mensaje enviado
                  </h3>

                  <p>
                    Tu mensaje fue enviado correctamente.
                  </p>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >


                  {/* NOMBRE */}

                  <div className="contact-form__field">

                    <label htmlFor="nombre">
                      Nombre completo
                    </label>

                    <input
                      id="nombre"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      required
                    />

                  </div>


                  {/* CORREO */}

                  <div className="contact-form__field">

                    <label htmlFor="correo">
                      Correo electrónico
                    </label>

                    <input
                      id="correo"
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                    />

                  </div>


                  {/* ASUNTO */}

                  <div className="contact-form__field">

                    <label htmlFor="asunto">
                      Asunto del mensaje
                    </label>

                    <input
                      id="asunto"
                      name="subject"
                      type="text"
                      placeholder="Escribe el asunto de tu mensaje"
                      required
                    />

                  </div>


                  {/* MENSAJE */}

                  <div className="contact-form__field">

                    <label htmlFor="mensaje">
                      Mensaje
                    </label>

                    <textarea
                      id="mensaje"
                      name="message"
                      placeholder="Escribe tu mensaje aquí..."
                      rows="5"
                      required
                    />

                  </div>


                  {/* ERROR DE FORMSPREE */}

                  {state.errors && state.errors.length > 0 && (

                    <p className="contact-form__error">
                      No pudimos enviar tu mensaje. Inténtalo nuevamente.
                    </p>

                  )}


                  {/* BOTÓN */}

                  <button
                    type="submit"
                    className="button button--dark contact-form__button"
                    disabled={state.submitting}
                  >
                    {state.submitting
                      ? "Enviando..."
                      : "Enviar mensaje"}
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAPA
      ===================================================== */}

      <section className="contact-map">

        <img
          src={mapImage}
          alt="Mapa de ubicación de AuraBee"
        />

      </section>


      {/* =====================================================
          CTA CONTACTO
      ===================================================== */}

      <section className="cta contact-cta">

        <div className="container">


          {/* INFORMACIÓN */}

          <div className="cta__content contact-cta__content">

            <span className="eyebrow">
              CONTÁCTANOS DIRECTAMENTE
            </span>

            <h2>
              Hablemos sobre tu
              <br />
              apiario
            </h2>


            {/* DATOS DE CONTACTO */}

            <div className="contact-cta__info">


              <div className="contact-cta__item">

                <div className="contact-cta__icon">
                  <MdEmail />
                </div>

                <span>
                  EMAIL
                </span>

              </div>


              <div className="contact-cta__item">

                <div className="contact-cta__icon">
                  <MdPhone />
                </div>

                <span>
                  TELÉFONO
                </span>

              </div>


              <div className="contact-cta__item">

                <div className="contact-cta__icon">
                  <MdLocationOn />
                </div>

                <span>
                  DIRECCIÓN
                </span>

              </div>


              <div className="contact-cta__item">

                <div className="contact-cta__icon">
                  <MdAccessTime />
                </div>

                <span>
                  HORARIO DE ATENCIÓN
                </span>

              </div>

            </div>


            {/* VOLVER AL FORMULARIO */}

            <a
              href="#contacto"
              className="cta__button"
            >
              Enviar mensaje
            </a>

          </div>


          {/* IMAGEN */}

          <div className="cta__visual">

            <img
              src={ctaImage}
              alt="Abejas obreras AuraBee"
            />

          </div>

        </div>
      </section>


    </div>
  );
}


export default Contacto;