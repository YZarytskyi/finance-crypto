import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthButtons } from '../../Auth/AuthButtons'
import { ModalAuth } from '../../Auth/ModalAuth'
import { useAppSelector } from 'hooks/redux-hooks'
import { SearchForm } from '../../Common'
import sprite from 'assets/images/icons.svg'
import style from './MobileNav.module.scss'

const MobileNav = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isSubListMobileOpen, setSubListMobileOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isProfileOpen && isAuth) {
      setTimeout(() => {
        window.addEventListener('click', onClickProfileClose)
      })
    }
    return () => {
      window.removeEventListener('click', onClickProfileClose)
    }
  }, [isProfileOpen])

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        window.addEventListener('click', onClickCloseMenu)
      })
    }
    return () => {
      window.removeEventListener('click', onClickCloseMenu)
    }
  }, [isMenuOpen])

  function onClickProfileClose(e: MouseEvent): void {
    const target = e.target as Element
    if (target.id === 'authBtnContainer') {
      return
    }
    setIsProfileOpen(false)
    toggleOverflow(isProfileOpen)
  }

  const onClickToggleProfile = (): void => {
    setIsProfileOpen((prev) => !prev)
    toggleOverflow(isProfileOpen)
  }

  const handleMobileSubList = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setSubListMobileOpen((prev) => !prev)
  }

  function onClickCloseMenu(e: MouseEvent): void {
    const target = e.target as Element
    if (target.closest('#navLinksList')) {
      return
    }
    setIsMenuOpen(false)
    toggleOverflow(isMenuOpen)
  }

  const onClickToggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev)
    toggleOverflow(isMenuOpen)
  }

  function toggleOverflow(state: boolean) {
    if (state) {
      document.body.classList.remove('overflow')
    } else {
      document.body.classList.add('overflow')
    }
  }

  const onClickMobileLink = (): void => {
    setIsMenuOpen(false)
    document.body.classList.remove('overflow')
  }

  const hamburgerIcon = (
    <svg className={style.hamburgerIcon}>
      <use href={sprite + '#menu_open'} />
    </svg>
  )
  const closeIcon = (
    <svg className={style.closeIcon}>
      <use href={sprite + '#menu_close'} />
    </svg>
  )

  return (
    <div className={`${style.mobileContainer} mobileContainerOverflow`}>
      <nav className={style.mobileNav}>
        <div onClick={onClickToggleMenu} className={style.mobileToggleIcons}>
          {isMenuOpen ? closeIcon : hamburgerIcon}
        </div>
        <SearchForm />
        <NavLink to='/' className={style.linkLogo} onClick={onClickMobileLink}>
          CRYPTO
          <svg className={style.iconLogo}>
            <use href={sprite + '#logo'} />
          </svg>
        </NavLink>

        <ul
          className={`${style.navLinksList} ${isMenuOpen ? style.navLinksListOpen : ''}`}
          id='navLinksList'
        >
          <li onClick={onClickMobileLink}>
            <NavLink to='/' className={style.link}>
              Home
            </NavLink>
          </li>
          <li>
            <div className={style.cryptoContainer}>
              <NavLink
                to='/crypto/coins'
                onClick={handleMobileSubList}
                className={`${style.link} ${style.linkCrypto}`}
              >
                Crypto
                <svg className={style.icon}>
                  <use href={sprite + '#arrow_down'} />
                </svg>
              </NavLink>

              <ul
                className={`${style.subListMobileHidden} ${
                  isSubListMobileOpen ? style.subListMobileOpen : ''
                }`}
              >
                <li onClick={onClickMobileLink}>
                  <NavLink to='/crypto/coins'>Coins</NavLink>
                </li>
                <li onClick={onClickMobileLink}>
                  <NavLink to='/crypto/exchanges'>Exchanges</NavLink>
                </li>
                <li onClick={onClickMobileLink}>
                  <NavLink to='/crypto/arbitrage'>Arbitrage</NavLink>
                </li>
                <li onClick={onClickMobileLink}>
                  <NavLink to='/crypto/converter'>Converter</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li onClick={onClickMobileLink}>
            <NavLink to='/articles' className={style.link}>
              Articles
            </NavLink>
          </li>
          <li onClick={onClickMobileLink}>
            <NavLink to='/contacts' className={style.link}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.profileAuth}>
        <button type='button' className={style.profileButton} onClick={onClickToggleProfile}>
          <svg className={style.profileIcon}>
            <use href={sprite + '#profile'} />
          </svg>
        </button>
        {isAuth ? (
          <div
            className={`${style.authBtnsBackdropHidden} ${
              isProfileOpen ? style.authBtnsBackdropOpen : ''
            }`}
          >
            <AuthButtons isProfileOpen={isProfileOpen} />
          </div>
        ) : (
          <ModalAuth modalAuthShow={isProfileOpen} setModalAuthShow={setIsProfileOpen} isLogin />
        )}
      </div>
    </div>
  )
}

export default MobileNav
