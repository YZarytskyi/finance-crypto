import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../assets/images/icons.svg';
import style from './NavCrypto.module.scss';

interface NavCryptoProps {
  component?: 'Coins' | 'Exchanges';
}

const NavCrypto = ({ component }: NavCryptoProps) => {
  let currentPath = useLocation().pathname;

  const regexpSelectedComponent = new RegExp(`/${component}/`, 'i');
  const isSelectedComponent = regexpSelectedComponent.test(currentPath);
  currentPath = isSelectedComponent
    ? currentPath.replace(regexpSelectedComponent, '').substring(0, 17) +
      (currentPath.length > 18 ? '...' : '')
    : currentPath.replace(/^\//, '');

  return (
    <div className={style.container}>
      <div className={style.navCrypto}>
        <ul className={style.listLeft}>
          <li>
            <NavLink to="/" className={style.leftLink}>
              <svg className={style.home}>
                <use href={sprite + '#home'} />
              </svg>
              <svg className={style.arrow}>
                <use href={sprite + '#arrow_right'} />
              </svg>
            </NavLink>
          </li>
          <li className={isSelectedComponent ? '' : style.hidden}>
            <NavLink to={`/${component}`} className={style.leftLink}>
              {component}
              <svg className={style.arrow}>
                <use href={sprite + '#arrow_right'} />
              </svg>
            </NavLink>
          </li>
          <li>
            <span className={style.currentPath}>{currentPath}</span>
          </li>
        </ul>

        <ul className={style.listCenter}>
          <li>
            <NavLink to="/coins" className={style.centerLink}>
              Coins
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchanges" className={style.centerLink}>
              Exchanges
            </NavLink>
          </li>
          <li>
            <NavLink to="/arbitrage" className={style.centerLink}>
              Arbitrage
            </NavLink>
          </li>
          <li>
            <NavLink to="/converter" className={style.centerLink}>
              Converter
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavCrypto;
