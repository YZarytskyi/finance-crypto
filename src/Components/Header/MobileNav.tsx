import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import sprite from "../../assets/images/icons.svg";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import AuthButtons from "./AuthButtons";
import Auth from "../Auth/ModalAuth";
import { useAppSelector } from "../../Store/hooks";
import SearchForm from "../Common/SearchForm";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(state => state.auth.isAuth);


  const hamburgerIcon = (
    <svg className={style.hamburgerIcon}>
      <use href={sprite + "#menu_open"} />
    </svg>
  );
  const closeIcon = (
    <svg className={style.closeIcon}>
      <use href={sprite + "#menu_close"} />
    </svg>
  );

  const handleToggleMenu = () => {
    openMenu(isMenuOpen, setIsMenuOpen);
  };

  const onClickProfileOpen = (): void => {
    openMenu(isProfileOpen, setIsProfileOpen);
  };

  function openMenu(
    state: boolean,
    setState: (value: boolean | ((prevValue: boolean) => boolean)) => void
  ) {
    setState((prev) => !prev);
    if (!state) {
      document.body.classList.add('overflow');
    } else {
      document.body.classList.remove('overflow');
    }
  }

  const onClickMobileLink = (): void => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow');
  };

  return (
    <div className={style.mobileContainer}>
      <nav className={style.mobileNav}>
        <div
          onClick={() => handleToggleMenu()}
          className={style.mobileToggleIcons}
        >
          {isMenuOpen ? closeIcon : hamburgerIcon}
        </div>
        <SearchForm />
        <NavLink
          to="/"
          className={style.linkLogo}
          onClick={() => onClickMobileLink()}
        >
          CRYPTO
          <svg className={style.iconLogo}>
            <use href={sprite + "#logo"} />
          </svg>
        </NavLink>
        <NavLinks onClickMobileLink={onClickMobileLink} isMenuOpen={isMenuOpen} />
      </nav>
      <div className={style.profileAuth}>
        <button
          className={style.profileButton}
          onClick={() => onClickProfileOpen()}
        >
          <svg className={style.profileIcon}>
            <use href={sprite + "#profile"} />
          </svg>
        </button>
        {isAuth
          ? (
            <div
              className={`${style.authBtnsBackdropHidden} ${isProfileOpen ? style.authBtnsBackdropOpen : ""}`}
            >
              <AuthButtons setIsProfileOpen={setIsProfileOpen} isProfileOpen={isProfileOpen} />
            </div>
          )
          : (
            <Auth
              modalAuthShow={isProfileOpen}
              setModalAuthShow={setIsProfileOpen}
              isLogin
            />
          )}
      </div>
    </div>
  );
};

export default MobileNav;
