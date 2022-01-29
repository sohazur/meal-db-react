import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const iconCart = <FontAwesomeIcon icon={faUtensils} />;
  return (
    <div className="meal-container">
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
      <button onClick={() => handleAddToCart(props)}>{iconCart}</button>
    </div>
  );
};

export default Meal;
