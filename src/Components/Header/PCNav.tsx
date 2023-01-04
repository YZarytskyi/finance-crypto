import { SearchForm } from '../Common';
import { AuthButtons } from '../Auth/AuthButtons';
import NavLinks from './NavLinks';
import style from './Header.module.scss';

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
