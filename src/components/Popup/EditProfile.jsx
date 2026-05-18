import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [about, setDescription] = useState(currentUser.about);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about }); //
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Name"
          type="text"
          minLength="2"
          maxLength="40"
          id="profile-name"
          value={name}
          onChange={handleName}
          required
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          name="description"
          placeholder="About me"
          type="text"
          minLength="2"
          maxLength="200"
          id="description-profile"
          value={about}
          onChange={handleDescription}
          required
        />
        <span className="popup__input-error description-input-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
export default EditProfile;
