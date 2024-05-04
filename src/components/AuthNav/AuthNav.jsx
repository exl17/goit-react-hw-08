import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/register">
          Register
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/login">
          Log In
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;