import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { addGood } from 'redux/goods/goods-actions';

const ShopGoods = ({ shop }) => {
  const { goods } = shop;
  const dispatch = useDispatch();

  const putGoodInGlobalStore = good => dispatch(addGood(good));

  const elements = goods.map(good => {
    const { id, nameOfGood, price } = good;
    return (
      <li key={id}>
        <p>Name:{nameOfGood}</p>
        <p>Price:{price}</p>
        <button
          type="button"
          onClick={() =>
            putGoodInGlobalStore({
              ...good,
              totalPrice: price,
              shop: shop.shopName,
            })
          }
        >
          Add to cart
        </button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
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
