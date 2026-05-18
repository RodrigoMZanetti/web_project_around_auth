function ImagePopup({ card }) {
  return (
    <div>
      <img src={card.link} alt="" className="popup__image" />
      <p className="popup__image-text">{card.name} </p>
    </div>
  );
}

export default ImagePopup;
