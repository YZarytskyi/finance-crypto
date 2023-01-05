import { Link } from 'react-router-dom';
import style from './Auth.module.scss';

interface MobileProfileMenuProps {
  isProfileOpen: boolean;
  onClickToggleProfile: () => void;
  onClickLogout: React.MouseEventHandler<HTMLButtonElement>;
}

const MobileProfileMenu = ({
  isProfileOpen,
  onClickToggleProfile,
  onClickLogout,
}: MobileProfileMenuProps) => {
  return (
    <div
      id="authBtnContainer"
      className={`${style.mobileContainer} ${
        isProfileOpen ? style.mobileContainerOpen : ''
      }`}
    >
      <Link
        to="/portfolio"
        className={style.portfolioLink}
        onClick={onClickToggleProfile}
      >
        My Portfolio
      </Link>
      <button type="button" className={style.logoutBtn} onClick={onClickLogout}>
        Log&nbsp;Out
      </button>
    </div>
  );
};

export { MobileProfileMenu };
