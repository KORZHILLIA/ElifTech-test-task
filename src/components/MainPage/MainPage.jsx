import { useState, useEffect } from 'react';
import { fetchAllShops } from 'shared/services/api/shops-api';
import ShopsList from 'components/ShopsList';
import ShopGoods from 'components/ShopGoods';

const MainPage = () => {
  const [state, setState] = useState({
    shops: [],
    currentShopId: 0,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const getAllShops = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const shops = await fetchAllShops();
        setState(prevState => ({ ...prevState, loading: false, shops }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    getAllShops();
  }, []);

  const chooseExactShop = id => {
    setState(prevstate => ({ ...prevstate, currentShopId: id }));
  };

  const { shops, currentShopId } = state;
  const currentShop = shops.find(shop => shop.id === currentShopId);
  console.log(currentShop);

  return (
    <div className="container">
      <div className={StyleSheet.rightSide}>
        <ShopsList shops={shops} onClick={chooseExactShop} />
      </div>
      <div className={StyleSheet.leftSide}>
        {currentShop && <ShopGoods shop={currentShop} />}
      </div>
    </div>
  );
};

export default MainPage;
