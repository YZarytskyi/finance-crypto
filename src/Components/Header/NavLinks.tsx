import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import React, { useEffect, useRef, useState } from "react";
import sprite from "../../assets/images/icons.svg";
import { useAppSelector } from "../../Store/hooks";
import Auth from "../Auth/Auth";

interface NavLinksProps {
  handleClickMobileLink?: () => void;
}

const NavLinks = ({ handleClickMobileLink }: NavLinksProps) => {

  const [modalAuthShow, setModalAuthShow] = useState<boolean>(false);
  const [toggleLoginSignUp, setToggleLoginSignUp] = useState<boolean>(true);
  const [isSubListMobileOpen, setSubListMobileOpen] = useState<boolean>(false);

  const userId = useAppSelector(state => state.auth.user.uid);
  const loginRef = useRef(null);


  const handleClickModalAuth = (e: React.SyntheticEvent) => {
    const target = (e.target as Element)
    setModalAuthShow(true);
    if (target === loginRef.current) {
      setToggleLoginSignUp(true)
    } else setToggleLoginSignUp(false);
  };

  const handleMobileSubList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubListMobileOpen((prev) => !prev);
  };

  return (
    <>
      <NavLink to="/" className={style.linkLogo + " " + style.PClogo}>
        CRYPTO
        <svg className={style.iconLogo}>
          <use href={sprite + "#logo"} />
        </svg>
      </NavLink>

      <ul className={style.navLinksList}>
        <li onClick={() => handleClickMobileLink && handleClickMobileLink()}>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
        </li>
        <li>
          <div className={style.cryptoContainer}>
            <NavLink
              to="/crypto/coins"
              onClick={(e) => handleClickMobileLink && handleMobileSubList(e)}
              className={style.link + " " + style.linkCrypto}
            >
              Crypto
              <svg className={style.icon}>
                <use href={sprite + "#arrow_down"} />
              </svg>
            </NavLink>
            <ul className={style.subListPC}>
              <li>
                <NavLink to="/crypto/coins" className={style.subListLink}>
                  Coins
                </NavLink>
              </li>
              <li>
                <NavLink to="/crypto/exchanges" className={style.subListLink}>
                  Exchanges
                </NavLink>
              </li>
              <li>
                <NavLink to="/crypto/arbitrage" className={style.subListLink}>
                  Arbitrage
                </NavLink>
              </li>
              <li>
                <NavLink to="/crypto/converter" className={style.subListLink}>
                  Converter
                </NavLink>
              </li>
            </ul>
            <ul
              className={`${style.subListMobileHidden} ${isSubListMobileOpen ? style.subListMobileOpen : ""}`}
            >
              <li
                onClick={() => handleClickMobileLink && handleClickMobileLink()}
              >
                <NavLink to="/crypto/coins">Coins</NavLink>
              </li>
              <li
                onClick={() => handleClickMobileLink && handleClickMobileLink()}
              >
                <NavLink to="/crypto/exchanges">Exchanges</NavLink>
              </li>
              <li
                onClick={() => handleClickMobileLink && handleClickMobileLink()}
              >
                <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
              </li>
              <li
                onClick={() => handleClickMobileLink && handleClickMobileLink()}
              >
                <NavLink to="/crypto/converter">Converter</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li onClick={() => handleClickMobileLink && handleClickMobileLink()}>
          <NavLink to="/articles" className={style.link}>
            Articles
          </NavLink>
        </li>
        <li onClick={() => handleClickMobileLink && handleClickMobileLink()}>
          <NavLink to="/contacts" className={style.link}>
            Contacts
          </NavLink>
        </li>
      </ul>

      {userId
      ? <div className={style.authContainer}>
          <button
            type="button"
            className={style.logoutBtn}
          >
            Log&nbsp;Out
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
          Sign&nbsp;Up
        </button>

        <Auth
          modalAuthShow={modalAuthShow}
          setModalAuthShow={setModalAuthShow}
          toggleLoginSignUp={toggleLoginSignUp}
          setToggleLoginSignUp={setToggleLoginSignUp}
        />
      </div>
      }
    </>
  );
};

export default NavLinks;
