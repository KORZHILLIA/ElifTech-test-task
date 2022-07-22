import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const location = useLocation();
  const chooseClassName = ({ isActive }) => {
    return isActive ? styles.activeNavLink : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <NavLink
              state={{ from: location }}
              className={chooseClassName}
              to="/"
            >
              Shop
            </NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink
              state={{ from: location }}
              className={chooseClassName}
              to="/cart"
            >
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
