import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SpinTheWheel = ({ chosenCuisine }) => {

  const WheelSpin = (
    <div>
      <img className="Spin-the-Wheel" src="./Images/MealWheel2.png" />
    </div>
  );

  return (
    <>
      
        <Link className="navbar__link" to="/SpinResults">
          {WheelSpin}
        </Link>
      

      {chosenCuisine.cuisine}
      {chosenCuisine.protein}
      {chosenCuisine.intolerence}
    </>
  );
};
