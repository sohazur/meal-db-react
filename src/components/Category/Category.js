import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Category.css";
const Category = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  useEffect(() => {
    setCart();
  }, []);
  return (
    <div className="category">
      <div>
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strInstructions={meal.strInstructions}
            strMealThumb={meal.strMealThumb}
            strYoutube={meal.strYoutube}
            strCategory={meal.strCategory}
          ></Meal>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Category;
