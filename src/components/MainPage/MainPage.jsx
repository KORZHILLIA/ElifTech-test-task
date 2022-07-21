import { useState, useEffect, useCallback } from 'react';
import { fetchAllShops } from 'shared/services/api/shops-api';
import ShopsList from 'components/ShopsList';
import ShopGoods from 'components/ShopGoods';
import styles from './mainPage.module.css';

const MainPage = () => {
  const [state, setState] = useState({
    shops: [],
    currentShopId: 0,
    loading: false,
    error: null,
  });

  const { shops, currentShopId } = state;

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

  const chooseExactShop = useCallback(
    id => {
      setState(prevstate => ({ ...prevstate, currentShopId: id }));
    },
    [setState]
  );

  const currentShop = shops.find(shop => shop.id === currentShopId);

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.leftSide}>
        <ShopsList shops={shops} onClick={chooseExactShop} />
      </div>
      <div className={styles.rightSide}>
        {!currentShop && <p>To see goods, choose the shop first</p>}
        {currentShop && <ShopGoods shop={currentShop} />}
      </div>
    </div>
  );
};

export default MainPage;
