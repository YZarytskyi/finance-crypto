import style from "./Auth.module.scss";
import React, { useEffect, useState } from "react";
import Modal from "../Common/Modal";
import Login from "./Login";
import SignUp from "./SignUp";

interface ModalAuthProps {
  children?: React.ReactNode;
  modalAuthShow: boolean;
  setModalAuthShow: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
  isLogin: boolean;
}

const ModalAuth: React.FC<ModalAuthProps> = ({
  children,
  modalAuthShow,
  setModalAuthShow,
  isLogin,
}) => {
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);

  useEffect(() => {
    if (isLogin) {
      setToggleLoginSignUp(true);
    } else {
      setToggleLoginSignUp(false);
    }
  }, [isLogin]);

  const handleClickToggleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const classes = [...(e.target as Element).classList];
    const isCurrent = classes.find((item) => item.includes("Current"));
    if (!isCurrent && setToggleLoginSignUp) {
      setToggleLoginSignUp((prev) => !prev);
    }
  };

  return (
    <Modal modalShow={modalAuthShow} setModalShow={setModalAuthShow}>
      {children}
      <div className={style.modalAuthContent}>
        <ul className={style.modalAuthNav}>
          <li className={style.modalAuthNavItem}>
            <button
              className={
                style.modalAuthNavLink +
                " " +
                (toggleLoginSignUp ? style.NavLinkCurrent : "")
              }
              onClick={handleClickToggleAuth}
            >
              Login
            </button>
          </li>
          <li className={style.modalAuthNavItem}>
            <button
              className={
                style.modalAuthNavLink +
                " " +
                (toggleLoginSignUp ? "" : style.NavLinkCurrent)
              }
              onClick={handleClickToggleAuth}
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
