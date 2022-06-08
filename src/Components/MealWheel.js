import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import "./MealWheel.css";
import { FootNav } from "./Footer/FooterNavBar";

export var MealWheelLogo = (
  <div >
    <img className="MealWheelLogo" src="./Images/MealWheelLogo.jpg"/> 
    <img className="App-logo" src="./Images/MealWheel.png" />    
  </div>
);

export const App = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("MealWheel_User")) {
          return (
            <>
              {MealWheelLogo}
              <ApplicationViews />
              <FootNav />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
