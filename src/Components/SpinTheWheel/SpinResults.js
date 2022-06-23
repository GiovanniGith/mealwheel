import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const SpinResults = ({ chosenCuisine, setRecipeId, setRecipeName, setImageUrl }) => {
  const [result, setResult] = useState({});

  const resultsPopUp = (
    <div>
      <img className="resultPopUp" src="./Images/resultpopup2.png" />
    </div>
  );
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${chosenCuisine.cuisine}&includeIngredients=${chosenCuisine.protein}&excludeIngredients=${chosenCuisine.intolerence}&apiKey=203b9167ff0a44cdad542483c1b92048`,
      requestOptions
    )
      .then((response) => response.json())
      .then(inspectResults);
  }, []);

  const inspectResults = (data) => {
    if (data.results.length === 0) {
    } else {
      setResult(data.results[0]);
      setRecipeId(data.results[0].id);
      setRecipeName(data.results[0].title);
      setImageUrl(data.results[0].image)
    }
  };

  if (Object.keys(result).length === 0) {
    return <h1>This combination doesn't have a matching result.. yet. Please check back in for updated options!</h1>;
  } else {
    const resultImage = (
      <div className="resultBox">
        <img src={result.image} />
      </div>
    );

    return (
      <div className="resultPopUp">
        <div className="titleImage">
        <h1>{result.title}</h1>
        {resultImage}
        </div>
        <div className="resultNav">
          <Link  className="resultsButton" to="/RecipeIngredients">
            See Recipe
          </Link>
          <Link className="resultsButton"  to="/CuisineChoice">
            Spin Again
          </Link>
        </div>
      </div>
    );
  }
};
