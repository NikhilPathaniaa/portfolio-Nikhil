// Modal.js
import React from 'react';
import './Model.css'
const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={close} className="modal-close-button">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
