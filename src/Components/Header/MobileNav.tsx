import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import sprite from "../../assets/images/icons.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AuthButtons from "./AuthButtons";

const MobileNav = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleSetMenu = () => {
    setMenu((prev) => !prev);
    if (!menu) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "scroll";
  };

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
  const handleClickMobileLink = (): void => {
    setMenu(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div className={style.mobileContainer}>
      <nav className={style.mobileNav}>
        <div
          onClick={() => handleSetMenu()}
          className={style.mobileToggleIcons}
        >
          {menu ? closeIcon : hamburgerIcon}
        </div>
        <NavLink
          to="/"
          className={style.linkLogo}
          onClick={() => handleClickMobileLink()}
        >
          CRYPTO
          <svg className={style.iconLogo}>
            <use href={sprite + "#logo"} />
          </svg>
        </NavLink>
        {menu && <NavLinks handleClickMobileLink={handleClickMobileLink} />}
      </nav>
      <AuthButtons />
    </div>
  );
};

export default MobileNav;
