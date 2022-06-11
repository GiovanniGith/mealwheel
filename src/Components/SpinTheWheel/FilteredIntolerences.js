import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const IntolerenceChoice = ({setChosenIntolerence}) => {
  const [intolerence, setIntolerence] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch("http://localhost:8088/intolerences")
      .then((res) => res.json())
      .then((data) => {
        setIntolerence(data);
      });
  }, []);

  const allIntolerences = () => {
    if (limit === 5) {
      setLimit(12);
    } else if (limit === 12) {
      setLimit(5);
    }
  };

  const setIntolerenceChoice = (intolerenceType) => {
    setChosenIntolerence((prev) => {
      let oldObj = {...prev} 
      oldObj.intolerence = intolerenceType
      return oldObj
      console.log(oldObj)
    })

  };


  return (
    <>
      <div className="content">
        <h1>Do you have an Intolerence?</h1>

        <div className="buttonOp">
          {intolerence.map((intolerence, index) => {
            if (index <= limit) {
              return (
                <button onClick={() => setIntolerenceChoice(intolerence.type)}
                  className="spinOptionButton"
                  key={`intolerence--${intolerence.id}`}
                > <Link className="navbar__link" to="/SpinTheWheel">
                {intolerence.type}
              </Link>
                  
                </button>
              );
            }
          })}
          <button className="seeAllButton" onClick={allIntolerences}>
            See All
          </button>
        </div>
      </div>
    </>
  );
};
