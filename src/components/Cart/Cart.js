import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { func } = props;
  return (
    <div>
      <h1>{func}</h1>
    </div>
  );
};

export default Cart;
