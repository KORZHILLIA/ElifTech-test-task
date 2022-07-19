import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Shopping Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
