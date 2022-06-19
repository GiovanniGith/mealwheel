import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SpinTheWheel = ({ chosenCuisine }) => {
  const WheelSpin = (
    <div>
      <img src="./Images/MealWheel2.png" />
    </div>
  );

  return (
    <>
      <Link className="Spin-the-Wheel-Motion" to="/SpinResults">
        {WheelSpin}
      </Link>
    </>
  );
};
