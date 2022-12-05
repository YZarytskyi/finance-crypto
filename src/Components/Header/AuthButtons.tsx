import style from "./Header.module.scss";
import { useRef, useState } from "react";
import Auth from "../Auth/Auth";
import { COOKIE_TOKEN_NAME, deleteCookie } from "../../utils/cookie";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { Notify } from "notiflix";


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
    document.body.classList.add('overflow');
    if (target === loginRef.current) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };


  const onClickLogout = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signOut(auth);
      deleteCookie(COOKIE_TOKEN_NAME);
      window.location.reload();
    } catch (error: any) {
      console.log(error)
      Notify.failure(error.message)
    }
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
