import React from 'react';
import styles from "./style.module.css";

function Modal({ message, onClose }) {
  return (
    <div className={styles["box-modal-parent"]}>
      <div className={styles["box-modal"]}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
      <div className={styles["boxback-modal"]}></div>
    </div>
  );
}

export default Modal;