import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const RecipeInstructions = ({ recipeId, recipeName }) => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=203b9167ff0a44cdad542483c1b92048`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setInstructions(data[0].steps);
      });
  }, []);

  {
    
  }

  return (
    <>
      <h1>{recipeName} Instructions!</h1>
      <div>
        {" "}
        {instructions.map((instruction) => {
          return (
            <div key={`instruction--${instruction}`}>
              <p>
                {instruction.number}. {instruction.step}
              </p>
            </div>
          );
        })}
      </div>
      <button><Link to="">Favorite this Recipe!</Link></button>
    </>
  );
};
