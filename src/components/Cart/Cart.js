import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let item = [];
  for (const meal of cart) {
    if (meal) {
      item.push(meal);
    }
  }
  return (
    <div>
      <h1>Selected Item(s)</h1>
      <ol>
        {item.map((i) => (
          <li key={i.idMeal + Math.random() * 100}>{i.strMeal}</li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
