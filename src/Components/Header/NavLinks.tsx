import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import brand from "../../assets/images/logo.png";
import React, { useState } from "react";

interface NavLinksProps {
  closeMenu?: () => void;
  isMobile?: boolean;
}

const NavLinks = ({ isMobile, closeMenu }: NavLinksProps) => {
  const [display, setDisplay] = useState<"none" | "flex">("none");
  const handleCryptoSubList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (display === "none") {
      return setDisplay("flex");
    }
    return setDisplay("none");
  };

  return (
    <ul>
      <li className={style.logoPC}>
        <NavLink to="/" className={style.linkLogo}>
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
      </li>
      <li onClick={() => isMobile && closeMenu && closeMenu()}>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
      </li>
      <li>
        <div className={style.cryptoContainer}>
          <NavLink
            to="/crypto/coins"
            onClick={(e) => isMobile && handleCryptoSubList(e)}
            style={{ display: "flex", alignItems: "center" }}
            className={style.link}
          >
            Crypto
            <MdKeyboardArrowDown className={style.icon} />
          </NavLink>
          <ul className={style.subList}>
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
          </ul>
          <ul className={style.subListMobile} style={{ display: display }}>
            <li onClick={() => isMobile && closeMenu && closeMenu()}>
              <NavLink to="/crypto/coins">Coins</NavLink>
            </li>
            <li onClick={() => isMobile && closeMenu && closeMenu()}>
              <NavLink to="/crypto/exchanges">Exchanges</NavLink>
            </li>
            <li onClick={() => isMobile && closeMenu && closeMenu()}>
              <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li onClick={() => isMobile && closeMenu && closeMenu()}>
        <NavLink to="/articles" className={style.link}>
          Articles
        </NavLink>
      </li>
      <li onClick={() => isMobile && closeMenu && closeMenu()}>
        <NavLink to="/contacts" className={style.link}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
