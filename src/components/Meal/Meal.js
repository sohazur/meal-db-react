import React from "react";
import "./Meal.css";
const Meal = (props) => {
  const {
    strMeal,
    strCategory,
    strMealThumb,
    strYoutube,
    strInstructions,
    handleAddToCart,
  } = props;
  return (
    <div className="meal-container" onClick={() => handleAddToCart(strMeal)}>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>Category: {strCategory}</p>
      <div>
        <p>{strInstructions}</p>
      </div>
      <p>
        <a href={strYoutube} target="_blank" rel="noreferrer">
          Video Tutorial
        </a>
      </p>
    </div>
  );
};

export default Meal;
