import NavLinks from "./NavLinks";
import style from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import brand from "../../assets/images/logo.png";
import { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={style.hamburgerIcon}
      onClick={() => setMenu((prev) => !prev)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className={style.closeIcon}
      onClick={() => setMenu((prev) => !prev)}
    />
  );
  const closeMenu = () => setMenu(false);

  return (
    <nav className={style.mobileNav}>
      <div>{menu ? closeIcon : hamburgerIcon}</div>
      <div className={style.logoMobile}>
        <NavLink to="/">
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
      </div>
      <div>
        {menu && <NavLinks isMobile={true} closeMenu={closeMenu} />}
      </div>
    </nav>
  );
};

export default MobileNav;
