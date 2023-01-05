import { Link } from 'react-router-dom';
import sprite from 'assets/images/icons.svg';
import style from './Auth.module.scss';


interface PCProfileMenuProps {
  isPCProfileOpen: boolean;
  onClickToggleProfile: () => void;
  onClickLogout: React.MouseEventHandler<HTMLButtonElement>;
}


const PCProfileMenu = ({
  isPCProfileOpen,
  onClickToggleProfile,
  onClickLogout,
}: PCProfileMenuProps) => {
  return (
    <>
      <button
        type="button"
        className={style.pcProfileButton}
        onClick={onClickToggleProfile}
      >
        <svg className={style.profileIcon}>
          <use href={sprite + '#profile'} />
        </svg>
      </button>
      <div
        className={`${style.pcProfileMenuHidden} ${
          isPCProfileOpen ? style.pcProfileMenuOpen : ''
        }`}
      >
        <Link
          to="/portfolio"
          className={style.portfolioLink}
          onClick={onClickToggleProfile}
        >
          My Portfolio
        </Link>
        <button
          type="button"
          className={style.logoutBtn}
          onClick={onClickLogout}
        >
          Log&nbsp;Out
        </button>
      </div>
    </>
  );
};

export { PCProfileMenu };
