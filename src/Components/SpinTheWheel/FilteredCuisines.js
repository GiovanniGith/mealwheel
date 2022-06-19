import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

export const CuisineChoice = ({ setChosenCuisine }) => {
  const [cuisine, setCuisine] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch("http://localhost:8088/cuisine")
      .then((res) => res.json())
      .then((data) => {
        setCuisine(data);
      });
  }, []);

  const allCuisines = () => {
    if (limit === 5) {
      setLimit(26);
    } else if (limit === 26) {
      setLimit(5);
    }
  };

  const setCuisineChoice = (cuisineType) => {
    setChosenCuisine((prev) => {
      let oldObj = { ...prev };
      oldObj.cuisine = cuisineType;
      return oldObj;
      console.log(oldObj);
    });
  };

  return (
    <>
      <div className="content">
        <h1>What type of Cuisine are you in the Mood for ?</h1>

        <div className="buttonOp">
          {cuisine.map((cuisine, index) => {
            if (index <= limit) {
              return (
                <button
                  onClick={() => setCuisineChoice(cuisine.type)}
                  className="spinOptionButton"
                  key={`cuisine--${cuisine.id}`}
                >
                  {" "}
                  <Link className="navbar__link" to="/ProteinChoice">
                    {cuisine.type}
                  </Link>
                </button>
              );
            }
          })}
          <button className="seeAllButton" onClick={allCuisines}>
            See All
          </button>
        </div>
      </div>
    </>
  );
};
