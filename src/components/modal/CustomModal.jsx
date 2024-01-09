import React from "react";
import ReactModal from "react-modal";
import "./custom-modal.css";
import { useModal } from "./modalContext";

ReactModal.setAppElement("#modal");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflowY: "visible",
  },
};

function CustomModal() {
  const { state, dispatch } = useModal();

  function closeModal() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  if (!state.modal.open) {
    return null;
  }

  return (
    <ReactModal
      isOpen={state.modal.open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName={"modal-overlay"}
    >
      {state.modal.content}
    </ReactModal>
  );
}

export default CustomModal;
