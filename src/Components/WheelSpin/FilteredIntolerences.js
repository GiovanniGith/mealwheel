import React, { useState, useEffect } from "react";

export const IntolerenceChoice = () => {
  const [intolerence, setIntolerence] = useState([]);
  const [limit, setLimit] = useState(5) 


  useEffect(() => {
    fetch("http://localhost:8088/intolerences")
      .then((res) => res.json())
      .then((data) => {
        setIntolerence(data)
      });
  }, []);

  const allIntolerences = () =>  { 
    if ( limit === 5) {
        setLimit(12)
    } else if ( limit === 12) {
        setLimit(5)
    }
  }
  return (
    <>
    <div className="content">
      <h1>Do you have an Intolerence?</h1>

      <div className="buttonOp">
        {intolerence.map((intolerence, index) => {
          if (index <= limit ){
            return <button className="cuisineButton" key={`intolerence--${intolerence.id}`}>{intolerence.type}</button>;
          }
        })}
        <button className="seeAllButton" 
          onClick={allIntolerences}>
          See All
        </button>
      </div>
      </div>
    </>
  );
};
