import { useRef, useState } from 'react';
import { signOut } from 'firebase/auth';
import { Notify } from 'notiflix';
import {
  COOKIE_TOKEN_NAME,
  deleteCookie,
  getCookie,
} from '../../../utils/cookie';
import { auth } from '../../Firebase/Firebase';
import Auth from '../Auth/ModalAuth';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { setIsAuth } from '../../../Store/Reducers/authSlice';
import style from './Auth.module.scss';

interface AuthButtonsProps {
  isProfileOpen?: boolean;
}

const AuthButtons = ({ isProfileOpen }: AuthButtonsProps) => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const loginRef = useRef(null);

  const onClickAuthBtn: React.MouseEventHandler<HTMLButtonElement> = e => {
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

  const onClickLogout: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    try {
      await signOut(auth);
      deleteCookie(COOKIE_TOKEN_NAME);
      dispatch(setIsAuth(false));
      Notify.success('You logged out successfully');
    } catch ({ message }) {
      Notify.failure(message as string);
    }
  };

  if (isInitialized) {
    return (
      <>
        <div 
          id='authBtnContainer'
          className={`${style.authContainerHidden} ${
            isProfileOpen ? style.authContainerOpen : ''
          }`}
        >
          {isAuth ? (
            <button
              type="button"
              className={style.logoutBtn}
              onClick={onClickLogout}
            >
              Log&nbsp;Out
            </button>
          ) : (
            <>
              <button
                ref={loginRef}
                type="button"
                className={style.loginBtn}
                onClick={onClickAuthBtn}
              >
                Login
              </button>
              <button
                type="button"
                className={style.signUpBtn}
                onClick={onClickAuthBtn}
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
  return null;
};

export default AuthButtons;
