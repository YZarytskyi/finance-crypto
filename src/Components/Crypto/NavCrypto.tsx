import style from "./NavCrypto.module.scss";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

const NavCrypto = () => {
  let currentPath = window.location.pathname;
  currentPath = currentPath.replace(/\/crypto\//i, "");

  return (
    <div className={style.navCrypto}>
      <ul className={style.listLeft}>
        <li>
          <NavLink to="/" className={style.leftLink}>
            <AiFillHome className={style.home} />
            <RiArrowRightSLine className={style.arrow} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/crypto/coins" className={style.leftLink}>
            Crypto <RiArrowRightSLine className={style.arrow} />
          </NavLink>
        </li>
        <li>
          <span className={style.currentPath}>{currentPath}</span>
        </li>
      </ul>
      <ul className={style.listCenter}>
        <li>
          <NavLink to="/crypto/coins" className={style.centerLink}>Coins</NavLink>
        </li>
        <li>
          <NavLink to="/crypto/exchanges" className={style.centerLink}>Exchanges</NavLink>
        </li>
        <li>
          <NavLink to="/crypto/arbitrage" className={style.centerLink}>Arbitrage</NavLink>
        </li>
        <li>
          <NavLink to="/crypto/converter" className={style.centerLink}>Converter</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavCrypto;
