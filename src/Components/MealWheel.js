import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import "./MealWheel.css";

export const App = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("MealWheel_User")) {
          return (
            <>
              {/* <NavBar />
              <ApplicationViews /> */}
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