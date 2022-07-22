import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import MainPage from './MainPage';
import MainRoutes from 'routes/MainRoutes';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <MainRoutes />
      </main>
      <ToastContainer />
    </div>
  );
};
