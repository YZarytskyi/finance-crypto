import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import brand from "../../assets/images/logo.png";
import { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const hamburgerIcon = <GiHamburgerMenu className={style.hamburgerIcon} />;
  const closeIcon = <AiOutlineClose className={style.closeIcon} />;
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
