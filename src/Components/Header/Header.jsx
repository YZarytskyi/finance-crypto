import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import brand from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <nav className={style.nav}>
            <NavLink to="/" className="mr-5">
              <img src={brand} width="50px" height="50px" alt="brand" />
            </NavLink>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            <span className={style.item}>Home</span>
          </NavLink>
          <NavLink
            to="/finance"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            <span className={style.item}>Finance</span>
          </NavLink>
          <NavLink
            to="/crypto"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            <span className={style.item}>Crypto</span>
          </NavLink>
          <NavLink
            to="/articles"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            <span className={style.item}>Articles</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            <span className={style.item}>Contacts</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
