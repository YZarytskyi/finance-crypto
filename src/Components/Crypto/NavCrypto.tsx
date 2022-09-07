import style from './NavCrypto.module.scss'
import { NavLink } from "react-router-dom";

const NavCrypto = () => {
  return (
    <div className={style.navCrypto}>
      <div>
        <NavLink to="/crypto/coins">Coins</NavLink>
        <NavLink to="/crypto/arbitrage">Arbitrage</NavLink>
        <NavLink to="/crypto/exchanges">Exchanges</NavLink>
      </div>
    </div>
  );
};

export default NavCrypto;