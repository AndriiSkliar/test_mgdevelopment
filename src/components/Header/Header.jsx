import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/logo.jpg';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link to="/home" className={css.logo}>
          <img className="animate__animated animate__fadeInRightBig animate__delay-1s" src={logo} alt="Mgdevelopment Logo" style={{ height: '40px' }} />
          <span className={css.logoText}>Mgdevelopment</span>
        </Link>
        <NavLink to="/home" className={({ isActive }) => `${css.headerNavLink} ${isActive ? css.active : ''}`}>
          <span className={css.headerNavSpan}>Home</span>
        </NavLink>
      <div className={css.empty}></div>
      </nav>
    </header>
  );
};
