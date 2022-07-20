import { useState, memo } from 'react';
import { PropTypes } from 'prop-types';
import styles from './shopsList.module.css';

const ShopList = ({ shops, onClick }) => {
  const localStorageContent = localStorage.getItem('currentId');
  const currentId = localStorageContent === 'null' ? null : localStorageContent;
  const [state, setState] = useState(currentId);

  const chooseActiveShop = id => {
    setState(id);
    onClick(id);
    localStorage.setItem('currentId', id);
  };

  const makeAllShopsActive = () => {
    setState(null);
    localStorage.setItem('currentId', null);
  };

  const elements = shops.map(({ id, shopName }) => (
    <li className={styles.shop} key={id}>
      <button
        className={`btn ${styles.shopBtn}`}
        onClick={() => chooseActiveShop(id)}
        disabled={state === null ? false : state !== id}
      >
        {shopName}
      </button>
    </li>
  ));
  return (
    <>
      {state && (
        <button
          className={`btn ${styles.chooseBtn}`}
          type="button"
          onClick={makeAllShopsActive}
        >
          Choose another shop
        </button>
      )}
      <ul className={styles.shopsList}>{elements}</ul>
    </>
  );
};

ShopList.defaultProps = {
  shops: [],
  onClick: () => {},
};

ShopList.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      shopName: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default memo(ShopList);
