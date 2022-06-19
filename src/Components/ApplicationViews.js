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
import "./MealWheel.css";

export const ApplicationViews = () => {
  const [chosenCuisine, setChosenCuisine] = useState();
  const [recipeId, setRecipeId] = useState();
  const [recipeName, setRecipeName] = useState();

  return (
    <>
      <div className="views">
        <Route path="/Favorites">
          <Favorites />
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
          />
        </Route>

        <Route path="/RecipeIngredients">
          <RecipeIngredients recipeId={recipeId} recipeName={recipeName} />
        </Route>
        <Route path="/RecipeInstructions">
          <RecipeInstructions recipeId={recipeId} recipeName={recipeName}  />
        </Route>
      </div>
    </>
  );
};
