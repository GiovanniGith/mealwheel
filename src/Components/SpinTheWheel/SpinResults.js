import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const SpinResults = ({ chosenCuisine, setRecipeId }) => {
  const [results, setResults] = useState([]);

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
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${chosenCuisine.cuisine}&includeIngredients=${chosenCuisine.protein}&excludeIngredients=${chosenCuisine.intolerence}&random?number=1&apiKey=203b9167ff0a44cdad542483c1b92048`,
      requestOptions
    )
      .then((response) => response.json())
      .then(inspectResults);
  }, []);

  const inspectResults = (data) => {
    setResults(data.results[0]);
  };

  const resultImage = (
    <div className="resultsBox">
      <img src={results.image} />
    </div>
  );




  return (
    <div>
      <div className="resultPopUp">
        {results.title}
        {resultImage}
        <div>
          <button>
            <Link className="seeAllButton" to="/RecipeIngredients">
              {" "}
              See Recipe
            </Link>
          </button>
          <button>
            <Link className="seeAllButton" to="/CuisineChoice">
              {" "}
              Spin Again
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
