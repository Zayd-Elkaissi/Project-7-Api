import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=88cbb41354b04d13858d7f377e338113&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  function favorite() {
     axios.post('http://127.0.0.1:8000/api/favorite',{ 
      foodName:meal.title,
      foodImg:imageUrl,
      timePreparation:meal.readyInMinutes,
      Number:meal.servings
     })
     setFavorites(true);

  };

  function Remov(id) {
     axios.delete("http://127.0.0.1:8000/api/favorite" + id);
     setFavorites(false);
  }

  return (
    <div className="div">
      <button onClick={favorites ? favorite : Remov}>
      {favorites ? 'Unfavorite' : 'Favorite'}
        </button>
      <h4 className="text-center">{meal.title}</h4>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </div>
  );
}
