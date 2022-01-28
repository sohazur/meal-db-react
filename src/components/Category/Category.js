import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Category.css";
const Category = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="category">
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
  );
};

export default Category;
