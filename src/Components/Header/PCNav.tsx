import { SearchForm } from '../Common';
import { AuthButtons } from '../Auth/AuthButtons';
import style from './Header.module.scss';
import NavLinks from './NavLinks';

const PCNav = () => {
  return (
    <div className={`${style.pcContainer} pcContainerOverflow`}>
      <nav className={style.pcNav}>
        <NavLinks />
      </nav>
      <SearchForm />
      <AuthButtons />
    </div>
  );
};

export default PCNav;
