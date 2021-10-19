import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
const MODAL_ROOT = document.querySelector("#modal-root");

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  // backdropRef = createRef();

  const handleKeyPress = (e) => {
    // console.log(e);

    if (e.code !== "Escape") {
      onCloseModal();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  // const { children } = this.props;
  return createPortal(
    <div
      className={styles.Overlay}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.Modal}>{children}</div>
    </div>,
    MODAL_ROOT
  );
};

export default Modal;
