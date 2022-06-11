import React, { useState, useEffect } from "react";
import { MealWheelLogo } from "../MealWheel";


export const SpinTheWheel = ({chosenCuisine}) => {
  const [options, setOptions] = useState()

 
  const MealWheelLogo = (
    <div>
      <img className="Spin-the-Wheel" src="./Images/MealWheel.png" />
    </div>
  );

  https://api.spoonacular.com/recipes/complexSearch?cuisine={chosenCuisine}&includeIngredients={chosenProtein}&excludeIngredients={chosenIntolerence}




  return (
    <>
                {MealWheelLogo} 
                {chosenCuisine.cuisine}
                {chosenCuisine.protein}
                {chosenCuisine.intolerence}
    </>
  );
};
