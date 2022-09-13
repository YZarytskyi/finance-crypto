import style from "./NavCrypto.module.scss";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

const NavCrypto = () => {
  let currentPath = window.location.pathname;
  currentPath = currentPath.replace(/\/crypto\//i, "")

  return (
    <div className={style.navCrypto}>
      <div>
        <NavLink to="/crypto/coins">Coins</NavLink>
        <NavLink to="/crypto/exchanges">Exchanges</NavLink>
        <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
      </div>
      <div>
        <NavLink to="/">
          <AiFillHome className={style.home}/> 
          <RiArrowRightSLine className={style.arrow} />
        </NavLink>
        <NavLink to="/crypto/coins">
          Crypto <RiArrowRightSLine className={style.arrow} />
        </NavLink>
        <span>{currentPath}</span>
      </div>
    </div>
  );
};

export default NavCrypto;
