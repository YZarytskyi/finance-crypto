import style from "./Header.module.scss";
import NavLinks from "./NavLinks";

const PCNav = () => {

  return (
    <nav className={style.pcNav}>
      <NavLinks />
    </nav>
  );
};

export default PCNav;
