import React, { useEffect, useState } from "react";
import "./Category.css";
const Category = () => {
  const [meals, setMeals] = useState([]);
  useEffect((id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  console.log(meals);
  return (
    <div>
      <h1>This is a category</h1>);
    </div>
  );
};

export default Category;
