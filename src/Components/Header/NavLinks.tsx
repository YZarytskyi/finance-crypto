import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import brand from "../../assets/images/logo.png";
import React, { useEffect, useState } from "react";
import sprite from "../../assets/images/icons.svg"

interface NavLinksProps {
  mobileSubMenu?: () => void;
}

const NavLinks = ({ mobileSubMenu }: NavLinksProps) => {
  const [displayPc, setDisplayPc] = useState<boolean>(true);
  const [display, setDisplay] = useState<"none" | "flex">("none");
  const handleMobileSubList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (display === "none") {
      return setDisplay("flex");
    }
    return setDisplay("none");
  };

  useEffect(() => {
    return () => setDisplayPc(true)
  }, [])

  return (
    <ul className={style.navLinksList}>
      <li className={style.logoPC}>
        <NavLink to="/" className={style.linkLogo}>
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
      </li>
      <li onClick={() => mobileSubMenu && mobileSubMenu()}>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
      </li>
      <li>
        <div className={style.cryptoContainer}>
          <NavLink
            to="/crypto/coins"
            onClick={(e) => mobileSubMenu && handleMobileSubList(e)}
            className={style.link + " " + style.linkCrypto}
          >
            Crypto
            <svg className={style.icon} >
              <use href={sprite + '#arrow_down'} />
            </svg>
          </NavLink>
          <ul className={style.subListPC + " " + (displayPc ? style.hidden : "")}>
            <li>
              <NavLink to="/crypto/coins" className={style.subListLink} >
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
          <ul className={style.subListMobile} style={{ display: display }}>
            <li onClick={() => mobileSubMenu && mobileSubMenu()}>
              <NavLink to="/crypto/coins">Coins</NavLink>
            </li>
            <li onClick={() => mobileSubMenu && mobileSubMenu()}>
              <NavLink to="/crypto/exchanges">Exchanges</NavLink>
            </li>
            <li onClick={() => mobileSubMenu && mobileSubMenu()}>
              <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
            </li>
            <li onClick={() => mobileSubMenu && mobileSubMenu()}>
              <NavLink to="/crypto/converter">Converter</NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li onClick={() => mobileSubMenu && mobileSubMenu()}>
        <NavLink to="/articles" className={style.link}>
          Articles
        </NavLink>
      </li>
      <li onClick={() => mobileSubMenu && mobileSubMenu()}>
        <NavLink to="/contacts" className={style.link}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
