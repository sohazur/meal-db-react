import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let item = [];
  // let totalQuantity = 0;
  for (const meal of cart) {
    if (meal) {
      item.push(meal);
    }

    // totalQuantity += meal.quantity;
  }
  return (
    <div>
      {/* <h1>{totalQuantity}</h1> */}
      <ol>
        {item.map((i) => (
          <li>{i}</li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
