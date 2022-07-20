import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import MainRoutes from 'routes/MainRoutes';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
};
