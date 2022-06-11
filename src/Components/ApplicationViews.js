import React, {useState}  from "react";
import { Route} from "react-router-dom";
import { Favorites} from "./Favorites/Favorites"
import { CuisineChoice } from "./SpinTheWheel/FilteredCuisines";
import { ProteinChoice } from "./SpinTheWheel/FilteredProteins"
import { IntolerenceChoice } from "./SpinTheWheel/FilteredIntolerences";
import { SpinTheWheel } from "./SpinTheWheel/SpinTheWheel";
import "./MealWheel.css"



export const ApplicationViews = () => {
  const [chosenCuisine, setChosenCuisine] = useState ({test:"test"})
  




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
          <SpinResults />
        </Route> 
        {/* <Route path="/SpinResults">
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
