import Popup from "./Popup/Popup.jsx";
import "../../blocks/InfoTooltip.css";

function InfoTooltip({ isSuccess, onClose }) {
  return (
    <Popup onClose={onClose}>
      <div className="tooltip">
        <div
          className={`tooltip__icon ${isSuccess === "success" ? "tooltip__icon_success" : isSuccess === "error" ? "tooltip__icon_error" : "tooltip__icon_goodbye"}`}
        >
          {isSuccess === "success" ? "✓" : isSuccess === "error" ? "✕" : "👋"}
        </div>
        <p className="tooltip__message">
          {isSuccess === "success"
            ? "Vitória! Você se registrou com sucesso."
            : isSuccess === "error"
              ? "Ops, algo deu errado! Por favor, tente novamente."
              : "Até logo! Volte sempre."}
        </p>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
