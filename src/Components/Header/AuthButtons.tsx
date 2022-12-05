import style from "./Header.module.scss";
import { useRef, useState } from "react";
import Auth from "../Auth/Auth";
import { COOKIE_TOKEN_NAME, deleteCookie, getCookie } from "../../utils/cookie";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { Notify } from "notiflix";


interface AuthButtonsProps {
  setIsProfileOpen?: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ setIsProfileOpen }) => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);

  const loginRef = useRef(null);

  const userId: string | null = getCookie(COOKIE_TOKEN_NAME);

  const onClickModalAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    setModalAuthShow(true);
    document.body.classList.add('overflow');
    if (target === loginRef.current) {
      setToggleLoginSignUp(true);
    } else {
      setToggleLoginSignUp(false);
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
