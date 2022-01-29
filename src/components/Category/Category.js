import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Category.css";
const Category = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayMeals, setDisplayMeals] = useState("");
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${displayMeals}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        if (data.meals) {
          setMeals(data.meals);
        }
      });
  }, [displayMeals]);
  console.log(displayMeals);
  const handleAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
  };

  const handleSearch = (event) => {
    setDisplayMeals(event.target.value);
  };
  console.log(meals);
  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search meals"
          onChange={handleSearch}
        />
      </div>
      <div className="category">
        <div>
          {meals.map((meal) => (
            <Meal
              key={meal.idMeal}
              idMeal={meal.idMeal}
              strMeal={meal.strMeal}
              strInstructions={meal.strInstructions}
              strMealThumb={meal.strMealThumb}
              strYoutube={meal.strYoutube}
              strCategory={meal.strCategory}
              handleAddToCart={handleAddToCart}
            ></Meal>
          ))}
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Category;
