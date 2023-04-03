import { useState } from 'react'
import { SearchForm } from '../../Common'
import { AuthButtons } from '../../Auth/AuthButtons'
import { NavLink } from 'react-router-dom'
import sprite from 'assets/images/icons.svg'
import style from './PCNav.module.scss'

const PCNav = () => {
  const [isSublistOpen, setIsSublistOpen] = useState(false)

  const onClickSublistLink = () => {
    setIsSublistOpen(true)
    setTimeout(() => {
      setIsSublistOpen(false)
    })
  }

  return (
    <div className={`${style.pcContainer} pcContainerOverflow`}>
      <NavLink to='/' className={style.linkLogo + ' ' + style.PClogo}>
        CRYPTO
        <svg className={style.iconLogo}>
          <use href={sprite + '#logo'} />
        </svg>
      </NavLink>

      <nav className={style.pcNav}>
      <ul
        className={style.navLinksList}
        id='navLinksList'
      >
        <li>
          <NavLink to='/' className={style.link}>
            Home
          </NavLink>
        </li>
        <li>
          <div className={style.cryptoContainer}>
            <NavLink
              to='/crypto/coins'
              className={`${style.link} ${style.linkCrypto}`}
            >
              Crypto
              <svg className={style.icon}>
                <use href={sprite + '#arrow_down'} />
              </svg>
            </NavLink>
            <ul className={`${isSublistOpen ? style.subListPCHidden : style.subListPC}`}>
              <li>
                <NavLink
                  to='/crypto/coins'
                  className={style.subListLink}
                  onClick={onClickSublistLink}
                >
                  Coins
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/crypto/exchanges'
                  className={style.subListLink}
                  onClick={onClickSublistLink}
                >
                  Exchanges
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/crypto/arbitrage'
                  className={style.subListLink}
                  onClick={onClickSublistLink}
                >
                  Arbitrage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/crypto/converter'
                  className={style.subListLink}
                  onClick={onClickSublistLink}
                >
                  Converter
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to='/articles' className={style.link}>
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink to='/contacts' className={style.link}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>

      <div className={style.pcRightContainer}>
        <SearchForm />
        <AuthButtons />
      </div>
    </div>
  )
}

export default PCNav
