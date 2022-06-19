import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const RecipeIngredients = ({ recipeId, recipeName }) => {
  const [ingredientList, setIngredients] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=203b9167ff0a44cdad542483c1b92048`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data.ingredients);
      });
  }, []);


  return (
    <>
      <h1>{recipeName} Ingredients List</h1>
      <div>
        {ingredientList.map((ingredients) => {
          return (
            <p key={`ingredients--${ingredients}`}>
              {ingredients.amount.us.value} {ingredients.amount.us.unit}{" "}
              {ingredients.name}
            </p>
          );
        })}
      </div>
      <button>
        <Link to="/RecipeInstructions">See Instructions</Link>
      </button>
    </>
  );
};
