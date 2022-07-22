import { NavLink, useLocation } from 'react-router-dom';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';
  return (
    <>
      <NavLink to={from}>Go back</NavLink>
      <p className={styles.warn}>This page not found</p>
    </>
  );
};

export default NotFoundPage;
