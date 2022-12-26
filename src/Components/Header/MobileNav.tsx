import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import AuthButtons from './Auth/AuthButtons';
import ModalAuth from './Auth/ModalAuth';
import { useAppSelector } from '../../Store/hooks';
import SearchForm from '../Common/SearchForm/SearchForm';
import sprite from '../../assets/images/icons.svg';
import style from './Header.module.scss';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (isProfileOpen && isAuth) {
      setTimeout(() => {
        window.addEventListener('click', onClickProfileClose)
      })
    }
    return () => {
      window.removeEventListener('click', onClickProfileClose);
    };
  }, [isProfileOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        window.addEventListener('click', onClickCloseMenu)
      })
    }
    return () => {
      window.removeEventListener('click', onClickCloseMenu);
    };
  }, [isMenuOpen]);

  function onClickProfileClose(e: MouseEvent): void {
    const target = e.target as Element;
    if (target.closest('#authBtnContainer')) {
      return;
    }
    setIsProfileOpen(false);
    toggleOverflow(isProfileOpen);
  }

  const onClickToggleProfile = (): void => {
    setIsProfileOpen((prev) => !prev);
    toggleOverflow(isProfileOpen);
  };

  function onClickCloseMenu(e: MouseEvent): void {
    const target = e.target as Element;
    if (target.closest('#navLinksList')) {
      return;
    }
    setIsMenuOpen(false);
    toggleOverflow(isMenuOpen);
  }

  const onClickToggleMenu = (): void => {
    setIsMenuOpen(prev => !prev);
    toggleOverflow(isMenuOpen);
  };

  function toggleOverflow(state: boolean) {
    if (state) {
      document.body.classList.remove('overflow');
    } else {
      document.body.classList.add('overflow');
    }
  }

  const onClickMobileLink = (): void => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow');
  };

  const hamburgerIcon = (
    <svg className={style.hamburgerIcon}>
      <use href={sprite + '#menu_open'} />
    </svg>
  );
  const closeIcon = (
    <svg className={style.closeIcon}>
      <use href={sprite + '#menu_close'} />
    </svg>
  );


  return (
    <div className={`${style.mobileContainer} mobileContainerOverflow`}>
      <nav className={style.mobileNav}>
        <div onClick={onClickToggleMenu} className={style.mobileToggleIcons}>
          {isMenuOpen ? closeIcon : hamburgerIcon}
        </div>
        <SearchForm />
        <NavLink to="/" className={style.linkLogo} onClick={onClickMobileLink}>
          CRYPTO
          <svg className={style.iconLogo}>
            <use href={sprite + '#logo'} />
          </svg>
        </NavLink>
        <NavLinks
          onClickMobileLink={onClickMobileLink}
          isMenuOpen={isMenuOpen}
        />
      </nav>
      <div className={style.profileAuth}>
        <button
          className={style.profileButton}
          onClick={onClickToggleProfile}
        >
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
          <ModalAuth
            modalAuthShow={isProfileOpen}
            setModalAuthShow={setIsProfileOpen}
            isLogin
          />
        )}
      </div>
    </div>
  );
};

export default MobileNav;
