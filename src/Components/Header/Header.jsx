import React from "react";
import { NavLink } from "react-router-dom";
import brand from "../../assets/images/logo.png";
import './Header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={brand} width={48} height={48} alt="brand" />
        </NavLink>
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <NavLink to="/crypto/coins">
          <div>Crypto</div>
        </NavLink>
        <NavLink to="/articles">
          <div>Articles</div>
        </NavLink>
        <NavLink to="/contacts">
          <div>Contacts</div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
