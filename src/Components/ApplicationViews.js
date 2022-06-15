import React, {useState}  from "react";
import { Route} from "react-router-dom";
import { Favorites} from "./Favorites/Favorites"
import { CuisineChoice } from "./SpinTheWheel/FilteredCuisines";
import { ProteinChoice } from "./SpinTheWheel/FilteredProteins"
import { IntolerenceChoice } from "./SpinTheWheel/FilteredIntolerences";
import { SpinTheWheel } from "./SpinTheWheel/SpinTheWheel";
import { SpinResults } from "./SpinTheWheel/SpinResults";
import { RecipeIngredients} from "./Recipes/Ingredients";
import "./MealWheel.css"



export const ApplicationViews = () => {
  const [chosenCuisine, setChosenCuisine] = useState ({test:"test"});
  const [recipeId, setRecipeId] = useState ({test:"test2"})
  




  return (
    <>
      <div>
        <Route path="/Favorites">
          <Favorites />
        </Route> 
        <Route path="/CuisineChoice">
          <CuisineChoice setChosenCuisine={setChosenCuisine}/>
        </Route>
        <Route path="/ProteinChoice">
          <ProteinChoice setChosenProtein={setChosenCuisine}  />
        </Route>
        <Route path="/Intolerences">
          <IntolerenceChoice  setChosenIntolerence={setChosenCuisine} />
        </Route>
        <Route path="/SpinTheWheel">
          <SpinTheWheel chosenCuisine={chosenCuisine} />
        </Route> 
        <Route path="/SpinResults">
          <SpinResults chosenCuisine={chosenCuisine} setRecipeId={setRecipeId} />
        </Route> 
        
        <Route path="/RecipeIngredients">
          <RecipeIngredients recipeId={recipeId} />
        </Route>
        {/* <Route path="/RecipeInstructions">
          <RecipeInstructions/>
        </Route> */}


       
      </div>
    </>
  );
};
