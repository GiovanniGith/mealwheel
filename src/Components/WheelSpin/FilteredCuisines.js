import React, { useState, useEffect } from "react";

export const CuisineChoice = () => {
  const [cuisine, setCuisine] = useState([]);
  const [limit, setLimit] = useState(5) 


  useEffect(() => {
    fetch("http://localhost:8088/cuisine")
      .then((res) => res.json())
      .then((data) => {
        setCuisine(data)
      });
  }, []);

  const allCuisines = () =>  { 
    if ( limit === 5) {
        setLimit(26)
    } else if ( limit === 26) {
        setLimit(5)
    }
  }
  return (
    <>
    <div className="content">
      <h1>What type of Cuisine are you in the Mood for ??</h1>

      <div className="buttonOp">
        {cuisine.map((cuisine, index) => {
          if (index <= limit ){
            return <button className="cuisineButton" key={`cuisine--${cuisine.id}`}>{cuisine.type}</button>;
          }
        })}
        <button className="seeAllButton" 
          onClick={allCuisines}>
          See All
        </button>
      </div>
      </div>
    </>
  );
};
