import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  // Handle state changes based on different actions
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
// Inside your Cart page component

import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartState, dispatch } = useCart();

  const handleQuantityChange = (itemId, quantity) => {
    // Dispatch action to update quantity for the specific item
  };

  // Map through your data and display items with quantity input and totals

  return (
    <div>
      {cartState.items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          />
          <span>{item.price * item.quantity}</span>
        </div>
      ))}
      <div>
        <span>Total Quantity: {cartState.totalQuantity}</span>
        <span>Total Amount: {cartState.totalAmount}</span>
      </div>
    </div>
  );
};

export default CartPage;