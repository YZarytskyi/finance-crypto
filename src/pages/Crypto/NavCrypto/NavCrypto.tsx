import { NavLink, useLocation } from 'react-router-dom'
import sprite from 'assets/images/icons.svg'
import style from './NavCrypto.module.scss'

const NavCrypto = () => {
  let currentPath = useLocation().pathname

  let component: RegExpMatchArray | string | null = currentPath.match(
    /(coins)|(exchanges)|(arbitrage)|(converter)/,
  )
  if (component) {
    component = component[0].replace(/\//g, '')
  }

  const isSelectedComponent = new RegExp(`/crypto/${component}/\\w+`).test(currentPath)
  const regexpSelectedComponent = new RegExp(`/crypto/${component}/?`)
  const selectedElement = currentPath.replace(regexpSelectedComponent, '').replace(/\//, '')
  currentPath = isSelectedComponent
    ? selectedElement + (selectedElement.length > 18 ? '...' : '')
    : (component as string)

  return (
    <div className={style.container}>
      <div className={style.navCrypto}>
        <ul className={style.listLeft}>
          <li>
            <NavLink to='/' className={style.leftLink}>
              <svg className={style.home}>
                <use href={sprite + '#home'} />
              </svg>
              <svg className={style.arrow}>
                <use href={sprite + '#arrow_right'} />
              </svg>
            </NavLink>
          </li>
          <li className={isSelectedComponent ? '' : style.hidden}>
            <NavLink to={`/crypto/${component}`} className={style.leftLink}>
              <span className={style.leftText}>{component}</span>
              <svg className={style.arrow}>
                <use href={sprite + '#arrow_right'} />
              </svg>
            </NavLink>
          </li>
          <li>
            <span className={`${style.currentPath} ${style.leftText}`}>{currentPath}</span>
          </li>
        </ul>

        <ul className={style.listCenter}>
          <li>
            <NavLink
              to='/crypto/coins'
              className={({ isActive }) =>
                `${style.centerLink} ${isActive ? style.centerLinkActive : ''}`
              }
            >
              Coins
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/crypto/exchanges'
              className={({ isActive }) =>
                `${style.centerLink} ${isActive ? style.centerLinkActive : ''}`
              }
            >
              Exchanges
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/crypto/arbitrage'
              className={({ isActive }) =>
                `${style.centerLink} ${isActive ? style.centerLinkActive : ''}`
              }
            >
              Arbitrage
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/crypto/converter'
              className={({ isActive }) =>
                `${style.centerLink} ${isActive ? style.centerLinkActive : ''}`
              }
            >
              Converter
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { NavCrypto }
