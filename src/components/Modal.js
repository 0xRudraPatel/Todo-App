function Modal(props) {
  function onCancelHandle() {
    props.onCancel();
  }

  function onConfirmHandle() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={onCancelHandle}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandle}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
