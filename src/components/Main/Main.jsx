import { useContext } from "react";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Popup from "../Popup/Popup.jsx";

function Main(props) {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    onOpenPopup,
    onClosePopup,
    popup,
    newProfilePopup,
    newCardPopup,
    newAvatarPopup,
  } = props;

  return (
    <main className="main">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          id="profile-avatar-container"
          onClick={() => onOpenPopup(newAvatarPopup)}
        >
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt="Avatar"
          />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(newProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Add Card"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardLike={() => props.onCardLike(card)}
                onCardDelete={() => props.onCardDelete(card)}
                handleOpenPopup={onOpenPopup}
              />
            );
          })}
        </ul>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
export default Main;
