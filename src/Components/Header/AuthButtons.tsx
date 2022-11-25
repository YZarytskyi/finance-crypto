import style from "./Header.module.scss";
import { useRef, useState } from "react";
import Auth from "../Auth/Auth";
import { COOKIE_TOKEN_NAME, deleteCookie } from "../../utils/cookie";

interface AuthButtonsProps {
  setIsProfileOpen?: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
  isProfileOpen?: boolean;
  userId?: string | undefined;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ setIsProfileOpen, isProfileOpen, userId }) => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const loginRef = useRef(null);

  const onClickModalAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    setModalAuthShow(true);
    if (target === loginRef.current) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const onClickLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    deleteCookie(COOKIE_TOKEN_NAME);
    window.location.reload();
  };

  return (
    <>
      <div className={`${style.authContainerHidden} ${isProfileOpen ? style.authContainerOpen : ""}`}>
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
          </>
        )}
      </div>
      <Auth
        modalAuthShow={modalAuthShow}
        setModalAuthShow={setModalAuthShow}
        isLogin={isLogin}
      />
    </>
  );
};

export default AuthButtons;
