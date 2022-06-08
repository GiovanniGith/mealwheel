import React   from "react";
import { Route } from "react-router-dom";
import { Favorites} from "./Favorites/Favorites"
import { CuisineChoice } from "./WheelSpin/FilteredCuisines";
import { ProteinChoice } from "./WheelSpin/FilteredProteins"
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
          <CuisineChoice/>
        </Route>
        {/* <Route path="/Favorites">
          <Favorites />
        </Route> 
        <Route path="/WheelSpin">
          <SpinTheWheel/>
        </Route>
        <Route path="/WheelSpin">
          <SpinTheWheel/>
        </Route>
        <Route path="/WheelSpin">
          <SpinTheWheel/>
        </Route> */}


       
      </div>
    </>
  );
};
