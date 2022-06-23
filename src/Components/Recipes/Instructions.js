import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../MealWheel.css";

export const RecipeInstructions = ({
  recipeId,
  recipeName,
  recipeImageUrl,
  favIngredients,
  favInstructions,
  setFavInstructions,
}) => {
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
      .then(inspectResults);
  }, []);

  const inspectResults = (data) => {
    setInstructions(data[0].steps);
    setFavInstructions(data[0].steps);
  };

  
  const history = useHistory();


  const addToFavorites = (event) => {
    
    event.preventDefault();

    const dataToApi = {
      favoriteName: { recipeName },
      favoriteImageUrl: { recipeImageUrl },
      favoriteIngredients: { favIngredients },
      favoriteInstructions: { favInstructions },
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToApi),
    };

    return fetch("http://localhost:8088/favorites", fetchOption).then(() => {
      history.push("/favorites");
    });
  };

  const resultImage = (
    <div className="content">
      <img src={recipeImageUrl} />
    </div>
  );

  return (
    <>
      <div className="content">
        <h1>{recipeName} Instructions!</h1>
        {resultImage}
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
        <button className="noIntButton" onClick={addToFavorites}>
          <Link to="">Favorite!</Link>
        </button>
      </div>
    </>
  );
};
