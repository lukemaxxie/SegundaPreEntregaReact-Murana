import React from 'react';
import { ShoppingCart } from 'react-feather';

const CartWidget = ({ cartItemCount }) => {
  return (
    <div className="cart-widget flex items-center space-x-2">
      <ShoppingCart size={24} />
      {cartItemCount > 0 && (
        <span className="badge" style={{ color: 'red', backgroundColor: 'white' }}>
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;

