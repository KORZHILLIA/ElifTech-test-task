import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/MainPage';
import CartPage from 'components/CartPage';
import NotFoundPage from 'shared/components/NotFoundPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/eliftech-test-task" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
