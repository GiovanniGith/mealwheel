import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const FootNav = (props) => {
  return (
    <footer className="navbar">
      <div>
        <button className="navbar__item active">
          <Link className="navbar__link" to="/Favorites">
            Favorites
          </Link>
        </button>
      </div>
      <div>
        <button className="navbar__item active">
          <Link className="navbar__link" to="/CuisineChoice">
            Start the process!
          </Link>
        </button>
      </div>
      <div>
        <button className="navbar__item active">
          <Link
            className="navbar__link"
            to="#"
            onClick={() => {
              localStorage.removeItem("MealWheel_User");
            }}
          >
            Logout
          </Link>
        </button>
      </div>
    </footer>
  );
};
