import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const RecipeIngredients = ({
  recipeId,
  recipeName,
  recipeImageUrl,
  setFavIngredients,
}) => {
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
      .then(inspectResults);
  }, []);

  const inspectResults = (data) => {
    setIngredients(data.ingredients);
    setFavIngredients(data.ingredients);
  };

  const resultImage = (
    <div className="content">
      <img src={recipeImageUrl} />
    </div>
  );

  return (
    <>
      <div className="content">
        <h1>{recipeName} Ingredients List</h1>
        {resultImage}
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

        <button className="noIntButton">
          <Link to="/RecipeInstructions">See Instructions</Link>
        </button>
      </div>
    </>
  );
};
