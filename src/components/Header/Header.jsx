import { Link, NavLink } from "react-router-dom";
import css from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home" className={css.logo}>
          <img src="/img/logo.jpg" alt="Mgdevelopment Logo" style={{ height: '40px' }} />
          <span className={css.logoText}>Mgdevelopment</span>
        </Link>
        <NavLink to="/home" className={({ isActive }) => `${css.headerNavLink} ${isActive ? css.active : ''}`}>
          Home
        </NavLink>
      </nav>
    </header>
  );
};
