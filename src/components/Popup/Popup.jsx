import { useEffect } from "react";
import "../Popup/Popup.css";

function Popup(props) {
  const { onClose, title, children } = props;

  // ✅ Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div
        className={`popup__content ${
          !title ? "popup__content_content-image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export default Popup;
