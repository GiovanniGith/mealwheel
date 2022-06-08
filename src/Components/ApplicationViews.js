import React   from "react";
import { Route } from "react-router-dom";
import { Favorites} from "./Favorites/Favorites"
import { CuisineChoice } from "./WheelSpin/FilteredCuisines";
import { ProteinChoice } from "./WheelSpin/FilteredProteins"
import { IntolerenceChoice } from "./WheelSpin/FilteredIntolerences";
import "./MealWheel.css"



export const ApplicationViews = () => {
  return (
    <>
      <div>
        <Route path="/Favorites">
          <Favorites />
        </Route> 
        <Route path="/CuisineChoice">
          <CuisineChoice/>
        </Route>
        <Route path="/ProteinChoice">
          <ProteinChoice/>
        </Route>
        <Route path="/Intolerences">
          <IntolerenceChoice/>
        </Route>
        {/* <Route path="/SpinTheWheel">
          <SpinTheWheel />
        </Route> 
        <Route path="/SpinResults">
          <SpinResults/>
        </Route>
        <Route path="/RecipeIngredients">
          <RecipeIngredients/>
        </Route>
        <Route path="/RecipeInstructions">
          <RecipeInstructions/>
        </Route> */}


       
      </div>
    </>
  );
};
