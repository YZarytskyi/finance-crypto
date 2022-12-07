import style from "./Header.module.scss";
import { useRef, useState } from "react";
import Auth from "../Auth/ModalAuth";
import { COOKIE_TOKEN_NAME, deleteCookie, getCookie } from "../../utils/cookie";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { Notify } from "notiflix";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { setIsAuth } from "../../Store/Reducers/authSlice";

interface AuthButtonsProps {
  setIsProfileOpen?: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
  isProfileOpen?: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  setIsProfileOpen,
  isProfileOpen,
}) => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const loginRef = useRef(null);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isInitialized = useAppSelector((state) => state.app.isInitialized);

  const dispatch = useAppDispatch();

  const onClickAuthBtn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    setModalAuthShow(true);
    document.body.classList.add("overflow");
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
      dispatch(setIsAuth(false));
      Notify.success("You logged out successfully");
    } catch (error: any) {
      console.log(error);
      Notify.failure(error.message);
    }
  };

  if (isInitialized) {
    return (
      <>
        <div
          className={`${style.authContainerHidden} ${
            isProfileOpen ? style.authContainerOpen : ""
          }`}
        >
          {isAuth ? (
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
                onClick={(e) => onClickAuthBtn(e)}
              >
                Login
              </button>
              <button
                type="button"
                className={style.signUpBtn}
                onClick={(e) => onClickAuthBtn(e)}
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
  }
  return null
};

export default AuthButtons;
