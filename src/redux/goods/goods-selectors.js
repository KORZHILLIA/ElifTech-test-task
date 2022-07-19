export const getCart = ({ goods: { cart } }) => cart;
export const getTotalPrice = ({ goods: { cart } }) => {
  const totalPrice = cart.reduce(
    (acc, { totalPrice }) => acc + Number(totalPrice),
    0
  );
  return totalPrice.toFixed(2);
};
