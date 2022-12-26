import React, { useEffect, useState } from 'react';
import Modal from '../../Common/Modal/Modal';
import Login from './Login';
import SignUp from './SignUp';
import style from './Auth.module.scss';

interface ModalAuthProps {
  children?: React.ReactNode;
  modalAuthShow: boolean;
  setModalAuthShow: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const ModalAuth = ({
  children,
  modalAuthShow,
  setModalAuthShow,
  isLogin,
}: ModalAuthProps) => {
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);

  useEffect(() => {
    if (isLogin) {
      setToggleLoginSignUp(true);
      return;
    }
    setToggleLoginSignUp(false);
  }, [isLogin]);

  const onClickToggleAuth: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    const target = e.target as Element;
    const isCurrent = target.classList.contains(style.NavLinkCurrent);
    if (!isCurrent && setToggleLoginSignUp) {
      setToggleLoginSignUp(prev => !prev);
    }
  };

  return (
    <Modal modalShow={modalAuthShow} setModalShow={setModalAuthShow}>
      {children}
      <div className={style.modalAuthContent}>
        <ul className={style.modalAuthNav}>
          <li className={style.modalAuthNavItem}>
            <button
              className={`${style.modalAuthNavLink} ${
                toggleLoginSignUp ? style.NavLinkCurrent : ''
              }`}
              onClick={onClickToggleAuth}
            >
              Login
            </button>
          </li>
          <li className={style.modalAuthNavItem}>
            <button
              className={`${style.modalAuthNavLink} ${
                toggleLoginSignUp ? '' : style.NavLinkCurrent
              }`}
              onClick={onClickToggleAuth}
            >
              Sign Up
            </button>
          </li>
        </ul>

        {toggleLoginSignUp ? (
          <Login setModalAuthShow={setModalAuthShow} />
        ) : (
          <SignUp setModalAuthShow={setModalAuthShow} />
        )}
      </div>
    </Modal>
  );
};

export default ModalAuth;
