import style from "./Header.module.scss";
import { useRef, useState } from "react";
import Auth from "../Auth/Auth";
import { COOKIE_TOKEN_NAME, deleteCookie, getCookie } from "../../utils/cookie";

const AuthButtons = () => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);

  const loginRef = useRef(null);

  const userId: string | null = getCookie(COOKIE_TOKEN_NAME);

  const onClickModalAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    setModalAuthShow(true);
    if (target === loginRef.current) {
      setToggleLoginSignUp(true);
    } else setToggleLoginSignUp(false);
  };

  const onClickLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    deleteCookie(COOKIE_TOKEN_NAME);
    window.location.reload();
  };

  return (
    <div className={style.authContainer}>
      {userId ? (
        <button
          type="button"
          className={style.logoutBtn}
          onClick={(e) => onClickLogout(e)}
        >
          Log&nbsp;Out
        </button>
      ) : (
        <>
          <button
            ref={loginRef}
            type="button"
            className={style.loginBtn}
            onClick={(e) => onClickModalAuth(e)}
          >
            Login
          </button>
          <button
            type="button"
            className={style.signUpBtn}
            onClick={(e) => onClickModalAuth(e)}
          >
            Sign&nbsp;Up
          </button>

          <Auth
            modalAuthShow={modalAuthShow}
            setModalAuthShow={setModalAuthShow}
            toggleLoginSignUp={toggleLoginSignUp}
            setToggleLoginSignUp={setToggleLoginSignUp}
          />
        </>
      )}
    </div>
  );
};

export default AuthButtons;
