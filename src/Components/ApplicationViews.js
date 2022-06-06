import React from "react";
import { Route } from "react-router-dom";
import { Favorites} from "./Favorites/Favorites"

export const ApplicationViews = () => {
  return (
    <>
      <div>
        <Route path="/Favorites">
          <Favorites />
        </Route> 
        {/* <Route path="/WheelSpin">
          <WheelSpin/>
        </Route> */}


       
      </div>
    </>
  );
};
