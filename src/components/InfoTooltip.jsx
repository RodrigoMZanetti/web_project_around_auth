import Popup from "./Popup/Popup.jsx";

function InfoToolTip({ isSuccess }) {
  return (
    <>
      <Popup onClose={console.log}>
        {isSuccess ? <p>Success ✓</p> : <p>Failure ✕</p>}
      </Popup>
    </>
  );
}

export default InfoToolTip;
