import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePrice, deleteGood, clearGoods } from 'redux/goods/goods-actions';
import { getCart, getTotalPrice } from 'redux/goods/goods-selectors';
import { addOrder } from 'redux/orders/orders-operations';
import { initialFormState } from './initialFormState';
import styles from './cartPage.module.css';

const CartPage = () => {
  const [state, setState] = useState(initialFormState);
  const dispatch = useDispatch();
  const cartGoods = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);

  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const quantityChanger = ({ target }, id) => {
    const { value } = target;
    dispatch(changePrice({ value, id }));
  };

  const submitHandler = async event => {
    event.preventDefault();
    const order = { ...state, cartGoods };
    dispatch(addOrder(order));
    setState(initialFormState);
    dispatch(clearGoods());
  };

  const deleteFromCart = id => {
    dispatch(deleteGood(id));
  };
  const elements = cartGoods.map(
    ({ id, nameOfGood, totalPrice, quantity, shop }) => (
      <li className={styles.good} key={id}>
        <div className={styles.textContainer}>
          <p>Shop: {shop}</p>
          <p>Name: {nameOfGood}</p>
          <p>Price: {totalPrice}</p>
        </div>
        <input
          className={`${styles.input} ${styles.goodInput}`}
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={event => quantityChanger(event, id)}
        />
        <button
          className={`btn ${styles.cartBtn}`}
          type="button"
          onClick={() => deleteFromCart(id)}
        >
          Remove from cart
        </button>
      </li>
    )
  );

  const { name, email, tel, address } = state;
  return (
    <>
      <div className={styles.cartContainer}>
        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={inputChangeHandler}
              placeholder="Type your name"
              required
            />
          </label>
          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
              placeholder="Type your e-mail"
              required
            />
          </label>
          <label className={styles.label}>
            Phone
            <input
              className={styles.input}
              type="tel"
              name="tel"
              value={tel}
              onChange={inputChangeHandler}
              placeholder="Type your telephone"
              required
            />
          </label>
          <label className={styles.label}>
            Address
            <textarea
              className={styles.input}
              type="text"
              name="address"
              value={address}
              onChange={inputChangeHandler}
              placeholder="Type your address"
              required
            />
          </label>
          <button
            className={`btn ${styles.cartBtn}`}
            type="submit"
            onSubmit={submitHandler}
          >
            Submit
          </button>
        </form>
        <ul className={styles.goods}>
          {cartGoods.length === 0 ? (
            <p className={styles.warn}>The cart is empty</p>
          ) : (
            elements
          )}
        </ul>
      </div>
      <p className={styles.total}>Total price: {totalPrice}</p>
    </>
  );
};

export default CartPage;
