import style from "./Modal.module.scss";
import React, { useEffect } from "react";
import sprite from "../../assets/images/icons.svg";

interface ModalProps {
  children: React.ReactNode;
  modalShow: boolean;
  setModalShow: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}

const Modal: React.FC<ModalProps> = ({ children, modalShow, setModalShow }) => {

  useEffect(() => {
    if (modalShow) {
      document.body.addEventListener('keydown', onEscPress)
    } 

    return () => {
      document.body.removeEventListener('keydown', onEscPress)
    }
  }, [modalShow])

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target.classList.contains('jsCloseModal')) {
      setModalShow(false);
      document.body.classList.remove('overflow');
    }
  };

  function handleMouseDownBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as Element;
    if (target === e.currentTarget) {
      setModalShow(false);
      document.body.classList.remove('overflow');
    }
  }

  function onEscPress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setModalShow(false);
      document.body.classList.remove('overflow');
    }
  }

  return (
    <div
      className={`${style.backdrop} ${!modalShow ? style.isHidden : ""}`}
      onClick={handleCloseModal}
      onMouseDown={handleMouseDownBackdrop}
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
