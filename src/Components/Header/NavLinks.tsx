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

  const [display, setDisplay] = useState<'none' | 'block'>('none')
  const handleCryptoSubList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (display === 'none') {
      return setDisplay('block')
    }
    return setDisplay('none')
  }

  return (
    <ul>
      <li className={style.logoPC}>
        <NavLink to="/">
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
      </li>
      <li onClick={() => isMobile && closeMenu && closeMenu()}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/crypto/coins" onClick={(e) => isMobile && handleCryptoSubList(e)} style={{display: 'flex', alignItems: 'center'}}>
          Crypto
          <MdKeyboardArrowDown className={style.icon} />
        </NavLink>
        <div className={style.subList}>
          <ul>
            <li>
              <NavLink to="/crypto/coins">Coins</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/exchanges">Exchanges</NavLink>
            </li>
            <li>
              <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
            </li>
          </ul>
        </div>
        <div className={style.subListMobile} style={{display: display}}>
          <ul>
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
        <NavLink to="/articles">Articles</NavLink>
      </li>
      <li onClick={() => isMobile && closeMenu && closeMenu()}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
