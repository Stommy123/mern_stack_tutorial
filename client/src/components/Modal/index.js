import React from "react";
import { Portal } from "react-portal";

const Modal = ({ isOpen, content, toggleModal }) =>
  isOpen ? (
    <Portal>
      <aside className="c-modal-cover fadeIn">
        <div className="c-modal slideIn">
          <div className="modalWrapper">
            <div className="modalHeader">
              <i className="icn-person material-icons">error</i>
            </div>
            <div className="c-modal_body">{content}</div>
            <button className="btn btn-info" onClick={toggleModal}>
              Okay
            </button>
          </div>
        </div>
      </aside>
    </Portal>
  ) : null;

export default Modal;
