import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Favorites } from "./Favorites/Favorites";
import { CuisineChoice } from "./SpinTheWheel/FilteredCuisines";
import { ProteinChoice } from "./SpinTheWheel/FilteredProteins";
import { IntolerenceChoice } from "./SpinTheWheel/FilteredIntolerences";
import { SpinTheWheel } from "./SpinTheWheel/SpinTheWheel";
import { SpinResults } from "./SpinTheWheel/SpinResults";
import { RecipeIngredients } from "./Recipes/Ingredients";
import { RecipeInstructions } from "./Recipes/Instructions";
import { FavoriteRecipeIngredients } from "./Favorites/FavoriteIngredients";
import "./MealWheel.css";

export const ApplicationViews = () => {
  const [chosenCuisine, setChosenCuisine] = useState();
  const [recipeId, setRecipeId] = useState();
  const [recipeName, setRecipeName] = useState();
  const [recipeImageUrl, setImageUrl] = useState();
  const [favIngredients, setFavIngredients] = useState();
  const [favInstructions, setFavInstructions] = useState();
  const [faveId, setFaveId] = useState()

  return (
    <>
      <div className="views">
        <Route path="/Favorites">
          <Favorites setRecipeId={setRecipeId} setFaveId={setFaveId} />
        </Route>
        <Route path="/FavoriteIngredients">
          <FavoriteRecipeIngredients />
        </Route>
        <Route path="/Favorites">
          <Favorites setRecipeId={setRecipeId} setFaveId={setFaveId} />
        </Route>
        <Route path="/CuisineChoice">
          <CuisineChoice setChosenCuisine={setChosenCuisine} />
        </Route>
        <Route path="/ProteinChoice">
          <ProteinChoice setChosenProtein={setChosenCuisine} />
        </Route>
        <Route path="/Intolerences">
          <IntolerenceChoice setChosenIntolerence={setChosenCuisine} />
        </Route>
        <Route path="/SpinTheWheel">
          <SpinTheWheel chosenCuisine={chosenCuisine} />
        </Route>
        <Route path="/SpinResults">
          <SpinResults
            chosenCuisine={chosenCuisine}
            setRecipeId={setRecipeId}
            setRecipeName={setRecipeName}
            setImageUrl={setImageUrl}
          />
        </Route>

        <Route path="/RecipeIngredients">
          <RecipeIngredients
            recipeId={recipeId}
            recipeName={recipeName}
            setFavIngredients={setFavIngredients}
            recipeImageUrl={recipeImageUrl}
          />
        </Route>
        <Route path="/RecipeInstructions">
          <RecipeInstructions
          faveId={faveId}
            recipeId={recipeId}
            recipeName={recipeName}
            recipeImageUrl={recipeImageUrl}
            favIngredients={favIngredients}
            setFavInstructions={setFavInstructions}
            favInstructions={favInstructions}
          />
        </Route>
      </div>
    </>
  );
};
