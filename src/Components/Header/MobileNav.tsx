import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import sprite from "../../assets/images/icons.svg";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import AuthButtons from "./AuthButtons";
import { COOKIE_TOKEN_NAME, getCookie } from "../../utils/cookie";
import Auth from "../Auth/Auth";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const userId: string | null = getCookie(COOKIE_TOKEN_NAME);

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
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "scroll";
  }

  const onClickMobileLink = (): void => {
    setIsMenuOpen(false);
    document.body.style.overflowY = "scroll";
  };

  const onClickCloseProfile = (e: React.SyntheticEvent): void => {
    if (e.target === e.currentTarget) {
      setIsProfileOpen(false);
    }
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
        {isMenuOpen && <NavLinks onClickMobileLink={onClickMobileLink} />}
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
        {userId
          ? (
            <div
              className={`${style.authBtnsBackdropHidden} ${isProfileOpen ? style.authBtnsBackdropOpen : ""}`}
              onClick={(e) => onClickCloseProfile(e)}
            >
              <AuthButtons setIsProfileOpen={setIsProfileOpen} isProfileOpen={isProfileOpen} userId={userId} />
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
