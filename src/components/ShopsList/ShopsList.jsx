import { PropTypes } from 'prop-types';

const ShopList = ({ shops, onClick }) => {
  const elements = shops.map(({ id, shopName }) => (
    <li key={id} onClick={() => onClick(id)}>
      {shopName}
    </li>
  ));
  return <ul>{elements}</ul>;
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

export default ShopList;
