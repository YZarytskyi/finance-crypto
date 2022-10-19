import style from "./Modal.module.scss"
import React from "react";
import sprite from "../../assets/images/icons.svg"

interface ModalProps {
  children: React.ReactNode;
  modalShow: boolean;
  setModalShow: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}

const Modal: React.FC<ModalProps> = ({children, modalShow, setModalShow}) => {
  const handleCloseBtn = () => {
    setModalShow(false)
  }
  const handleCloseModal = () => {
    setModalShow((prevValue) => !prevValue)
  }
  return (
    <div className={`${style.backdrop} ${!modalShow && style.isHidden}`} onClick={() => handleCloseModal()}>
      <div className={style.modal} onClick={() => handleCloseModal()}>
        <button type="button" className={style.modalCloseBtn} onClick={() => handleCloseBtn()}>
          <svg className={style.modalCloseIcon}>
            <use href={sprite + '#modal_close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
