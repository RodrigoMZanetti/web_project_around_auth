import ImagePopup from "./ImagePopup";
import "../../../blocks/cards.css";

function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };

  const isLiked = card.isLiked;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => onCardDelete(card)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}

export default Card;
