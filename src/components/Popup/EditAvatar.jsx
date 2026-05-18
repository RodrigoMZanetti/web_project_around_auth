import { useRef } from "react";

function EditAvatar(props) {
  const inputRef = useRef(null);
  const { onUpdateAvatar } = props;

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <form
      className="popup__avatar-form"
      name="popup__avatar-form"
      id="popup-avatar-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="popup-avatar-image" className="popup__field">
        <input
          type="url"
          className="popup__avatar-image popup__input"
          name="avatarImage"
          placeholder="paste a valid link"
          id="popup-avatar-image"
          ref={inputRef}
          required
        />
      </label>
      <button className="popup__avatar-submit popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
export default EditAvatar;
