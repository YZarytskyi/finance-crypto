import style from "./Header.module.scss";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";


const Header = () => {
  return(
    <header>
      <PCNav />
      <MobileNav />
    </header>
  );
};

export default Header;


const PCNav = () => {
  return(
    <nav className={style.pcNav}>
      <NavLinks />
    </nav>
  );
};