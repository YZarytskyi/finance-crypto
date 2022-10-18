import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import sprite from "../../assets/images/icons.svg";
import { NavLink } from "react-router-dom";
import brand from "../../assets/images/logo.png";
import { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState<boolean>(false);

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
  const mobileSubMenu = (): void => setMenu(false);

  return (
    <nav className={style.mobileNav}>
      <div
        onClick={() => setMenu((prev) => !prev)}
        className={style.mobileToggleIcons}
      >
        {menu ? closeIcon : hamburgerIcon}
      </div>
      <NavLink
        to="/"
        className={style.logoMobile}
        onClick={() => mobileSubMenu()}
      >
        <img src={brand} width={48} height={48} alt="brand" />
      </NavLink>
      {menu && <NavLinks mobileSubMenu={mobileSubMenu} />}
    </nav>
  );
};

export default MobileNav;
