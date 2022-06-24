import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../MealWheel.css";

export const Favorites = ({setRecipeId, setFaveId}) => {
  const [favorite, setFavorite] = useState([]);
  const history = useHistory()

  useEffect(() => {
    fetch(
      "http://localhost:8088/favorites"
    )
      .then((res) => res.json())
      .then(inspectResults);
  }, []);

  const inspectResults = (data) => {
    setFavorite(data);
    setRecipeId(data[0].favRecipeId)
    setFaveId(data.length)
  }

  const deleteFav = (id) => {
    fetch(`http://localhost:8088/favorites/${id}`, {
      method: "DELETE",
    }).then(
      history.push("")
    );
  };

  

  // const mappedFavorite = favorite.map()

  return (
    <>
      <div className="content">
        <h1>Your Favorite Cuisines!</h1>

        <div className="buttonOp">
          {favorite.map((fav) => {
            const resultImage = (
              <div className="resultBox">
                <img src={fav.favImageUrl} />
              </div>
            )


            return (
              <>
                <div className="content">
                  {fav.favName}
                  {resultImage}                 
                  <button>
                    <Link  to="/RecipeIngredients"> See Ingredients</Link>
                  </button>
                  <button>
                    <Link  to="/RecipeInstructions"> See Instructions</Link>
                  </button>
                  <button onClick={deleteFav(fav.favId)} >
                    <Link  to="/favorites"> Delete Favorite</Link>
                  </button>
                </div>
              </>
            );
          })}
        </div>
        
      </div>
    </>
  );
};
