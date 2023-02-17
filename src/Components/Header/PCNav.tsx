import { SearchForm } from "../Common";
import { AuthButtons } from "../Auth/AuthButtons";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import sprite from "assets/images/icons.svg";
import style from "./Header.module.scss";

const PCNav = () => {
  return (
    <div className={`${style.pcContainer} pcContainerOverflow`}>
      <NavLink to="/" className={style.linkLogo + " " + style.PClogo}>
        CRYPTO
        <svg className={style.iconLogo}>
          <use href={sprite + "#logo"} />
        </svg>
      </NavLink>

      <NavLinks />

      <div className={style.pcRightContainer}>
        <SearchForm />
        <AuthButtons />
      </div>
    </div>
  );
};

export default PCNav;
