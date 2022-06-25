import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MealWheel.css";

export const FavoriteRecipeIngredients = ({
 
}) => {
  const [ingredients, setFavIngredients] = useState([]);
  const [favImage, setFavImage] = useState();
  const [favName, setFavName] = useState();

   useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:8088/favorites`,
      requestOptions
    )
      .then((response) => response.json())
      .then(inspectResults);
      
  }, []);

  

  const inspectResults = (data) => {
    if(data.userId === localStorage.getItem("MealWheel_User")){
    setFavIngredients(data.favIngredients);
    setFavImage(data.favImageUrl)
    setFavName(data.favName)
    this.forceUpdate()

    }    
  };

  const resultImage = (
    <div className="content">
      <img src={favImage} />
    </div>
  );

  return (
    <>
      <div className="content">
        <h1>{favName} Ingredients List</h1>
        {resultImage}
        <div>
          {ingredients.map((ingredients) => {
            return (
              <p key={`ingredients--${ingredients}`}>
                {ingredients.amount.us.value} {ingredients.amount.us.unit}{" "}
                {ingredients.favName}
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
