import GooglePlay from "../../assets/images/GooglePlay.png";
import AppStore from "../../assets/images/AppStore.png";


function DownloadModal({ isOpen, onClose }) {

  if (!isOpen) {
    return null;
  }


  return (
    <div
      className="download-modal"
      onClick={onClose}
    >

      <div
        className="download-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          className="download-modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>


        <span className="eyebrow">
          PRÓXIMAMENTE
        </span>


        <h2
          id="download-modal-title"
          className="download-modal__title"
        >
          AuraBee estará disponible pronto
        </h2>


        <p className="download-modal__text">
          Estamos preparando el lanzamiento de nuestra aplicación.
          Próximamente podrás descargarla desde Google Play y App Store.
        </p>


        <div className="download-modal__stores">


          {/* GOOGLE PLAY
              Agregar link cuando la aplicación esté publicada */}

          <div className="download-modal__store">

            <img
              src={GooglePlay}
              alt="Próximamente disponible en Google Play"
            />

          </div>


          {/* APP STORE
              Agregar link cuando la aplicación esté publicada */}

          <div className="download-modal__store">

            <img
              src={AppStore}
              alt="Próximamente disponible en App Store"
            />

          </div>


        </div>

      </div>

    </div>
  );
}


export default DownloadModal;