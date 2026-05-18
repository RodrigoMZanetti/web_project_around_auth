import { useState } from "react";

function NewCard({ handleAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          name="placeName"
          maxLength="30"
          minLength="1"
          placeholder="Title"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__input-error card-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          placeholder="Image link"
          type="url"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
export default NewCard;
