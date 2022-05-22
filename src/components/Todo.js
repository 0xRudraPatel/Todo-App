import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function deleteHandle() {
    setModalOpen(true);
  }

  function closeModalHandle() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandle}>
          Delete
        </button>
      </div>
      {modalOpen && (
        <Modal onCancel={closeModalHandle} onConfirm={closeModalHandle} />
      )}
      {modalOpen && <Backdrop onCancel={closeModalHandle} />}
    </div>
  );
}

export default Todo;
