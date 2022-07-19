import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/MainPage';
import CartPage from 'components/CartPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MainRoutes;
