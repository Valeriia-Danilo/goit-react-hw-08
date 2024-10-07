import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink className={getNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}