import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const chooseClassName = ({ isActive }) => {
    return isActive ? styles.activeNavLink : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <NavLink className={chooseClassName} to="/">
              Shop
            </NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink className={chooseClassName} to="/cart">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
