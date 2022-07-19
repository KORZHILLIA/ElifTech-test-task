import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePrice, deleteGood } from 'redux/goods/goods-actions';
import { getCart, getTotalPrice } from 'redux/goods/goods-selectors';
import { initialFormState } from './initialFormState';

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
    dispatch(changePrice(value, id));
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(state, cartGoods);
    setState(initialFormState);
  };

  const deleteFromCart = id => {
    dispatch(deleteGood(id));
  };
  const elements = cartGoods.map(({ id, nameOfGood, totalPrice, price }) => (
    <li key={id}>
      <p>Name: {nameOfGood}</p>
      <p>Price: {totalPrice}</p>
      <input
        type="number"
        min="1"
        max="100"
        value={totalPrice / price}
        onChange={event => quantityChanger(event, id)}
      />
      <button type="button" onClick={() => deleteFromCart(id)}>
        Remove from cart
      </button>
    </li>
  ));

  const { name, email, tel, address } = state;
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={inputChangeHandler}
            placeholder="Type yor name"
            required
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={inputChangeHandler}
            placeholder="Type yor e-mail"
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={inputChangeHandler}
            placeholder="Type yor telephone number"
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={inputChangeHandler}
            placeholder="Type yor address"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>{elements}</ul>
      <p>Total price: {totalPrice}</p>
    </div>
  );
};

export default CartPage;
