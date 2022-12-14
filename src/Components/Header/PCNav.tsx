import SearchForm from "../Common/SearchForm";
import AuthButtons from "./AuthButtons";
import style from "./Header.module.scss";
import NavLinks from "./NavLinks";

const PCNav = () => {
  return (
    <div className={style.pcContainer}>
      <nav className={style.pcNav}>
        <NavLinks />
      </nav>
      <SearchForm />
      <AuthButtons />
    </div>
  );
};

export default PCNav;
