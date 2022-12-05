import style from "./NavCrypto.module.scss";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/images/icons.svg";

const NavCrypto = () => {
  let currentPath = window.location.hash;
  const regexpCoins = /#\/crypto\//i;
  const regexpSelectedCoin = /#\/crypto\/coins\//i;
  const isSelectedCoin = regexpSelectedCoin.test(currentPath);
  currentPath = currentPath.replace(
    isSelectedCoin ? regexpSelectedCoin : regexpCoins,
    ""
  );

  return (
    <div className={style.container}>
      <div className={style.navCrypto}>
        <ul className={style.listLeft}>
          <li>
            <NavLink to="/" className={style.leftLink}>
              <svg className={style.home}>
                <use href={sprite + "#home"} />
              </svg>
              <svg className={style.arrow}>
                <use href={sprite + "#arrow_right"} />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/coins" className={style.leftLink}>
              Crypto
              <svg className={style.arrow}>
                <use href={sprite + "#arrow_right"} />
              </svg>
            </NavLink>
          </li>
          <li className={isSelectedCoin ? "" : "hidden"}>
            <NavLink to="/crypto/coins" className={style.leftLink}>
              Coins
              <svg className={style.arrow}>
                <use href={sprite + "#arrow_right"} />
              </svg>
            </NavLink>
          </li>
          <li>
            <span className={style.currentPath}>{currentPath}</span>
          </li>
        </ul>
        <ul className={style.listCenter}>
          <li>
            <NavLink to="/crypto/coins" className={style.centerLink}>
              Coins
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/exchanges" className={style.centerLink}>
              Exchanges
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/arbitrage" className={style.centerLink}>
              Arbitrage
            </NavLink>
          </li>
          <li>
            <NavLink to="/crypto/converter" className={style.centerLink}>
              Converter
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavCrypto;
