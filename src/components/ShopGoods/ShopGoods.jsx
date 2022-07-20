import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { addGood } from 'redux/goods/goods-actions';
import styles from './shopGoods.module.css';

const ShopGoods = ({ shop }) => {
  const { goods } = shop;
  const dispatch = useDispatch();

  const putGoodInGlobalStore = good => dispatch(addGood(good));

  const elements = goods.map(good => {
    const { id, nameOfGood, price } = good;
    return (
      <li className={styles.good} key={id}>
        <p>Name: {nameOfGood}</p>
        <p>Price: {price}</p>
        <button
          className="btn"
          type="button"
          onClick={() =>
            putGoodInGlobalStore({
              ...good,
              totalPrice: price,
              quantity: 1,
              shop: shop.shopName,
            })
          }
        >
          Add to cart
        </button>
      </li>
    );
  });

  return <ul className={styles.goodsList}>{elements}</ul>;
};

ShopGoods.defaultProps = {
  shop: {},
};

ShopGoods.propTypes = {
  shop: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ShopGoods;
