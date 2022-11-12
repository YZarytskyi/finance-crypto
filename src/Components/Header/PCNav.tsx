import React, { useRef, useState } from "react";
import { useAppSelector } from "../../Store/hooks";
import Auth from "../Auth/Auth";
import style from "./Header.module.scss";
import NavLinks from "./NavLinks";

const PCNav = () => {
  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);

  const userId = useAppSelector(state => state.auth.user.uid);
  const loginRef = useRef(null);


  const handleClickModalAuth = (e: React.SyntheticEvent) => {
    const target = (e.target as Element)
    setModalAuthShow(true);
    if (target === loginRef.current) {
      setToggleLoginSignUp(true)
    } else setToggleLoginSignUp(false);
  };

  return (
    <nav className={style.pcNav}>
      <NavLinks />
      {userId
      ? <div className={style.authContainer}>
          <button
            type="button"
            className={style.logoutBtn}
          >
            Log Out
          </button>
      </div>
      : <div className={style.authBtns}>
        <button
          ref={loginRef}
          type="button"
          className={style.loginBtn}
          onClick={(e) => handleClickModalAuth(e)}
        >
          Login
        </button>
        <button
          type="button"
          className={style.signUpBtn}
          onClick={(e) => handleClickModalAuth(e)}
        >
          Sign Up
        </button>

        <Auth
          modalAuthShow={modalAuthShow}
          setModalAuthShow={setModalAuthShow}
          toggleLoginSignUp={toggleLoginSignUp}
          setToggleLoginSignUp={setToggleLoginSignUp}
        />
      </div>
      }
    </nav>
  );
};

export default PCNav;
