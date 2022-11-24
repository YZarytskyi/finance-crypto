import style from "./Modal.module.scss";
import React, { useRef } from "react";
import sprite from "../../assets/images/icons.svg";

interface ModalProps {
  children: React.ReactNode;
  modalShow: boolean;
  setModalShow: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}

const Modal: React.FC<ModalProps> = ({ children, modalShow, setModalShow }) => {
  const backdropRef = useRef(null);

  const handleCloseModal = (e: React.SyntheticEvent) => {
    const target = e.target as Element;
    if (target === backdropRef.current || 
      (e.target as Element).classList.contains('jsCloseModal')) {
      setModalShow(false);
    }
  };
  return (
    <div
      ref={backdropRef}
      className={`${style.backdrop} ${!modalShow ? style.isHidden : ""} jsCloseModal`}
      onClick={(e) => handleCloseModal(e)}
    >
      <div className={style.modal}>
        <button type="button" className={style.modalCloseBtn + " jsCloseModal"}>
          <svg className={style.modalCloseIcon + " jsCloseModal"}>
            <use href={sprite + "#modal_close"} className="jsCloseModal"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
