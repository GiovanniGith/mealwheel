import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProteinChoice = ({ setChosenProtein }) => {
  const [protein, setProtein] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/protein")
      .then((res) => res.json())
      .then((data) => {
        setProtein(data);
      });
  }, []);

  const setProteinChoice = (proteinType) => {
    setChosenProtein((prev) => {
      let oldObj = { ...prev };
      oldObj.protein = proteinType;
      return oldObj;
      console.log(oldObj);
    });
  };
  return (
    <>
      <div className="content">
        <h1>Pick your Main Protein</h1>

        <div className="buttonOp">
          {protein.map((protein) => {
            return (
              <button
                onClick={() => setProteinChoice(protein.type)}
                className="spinOptionButton"
                key={`protein--${protein.id}`}
              >
                <Link className="navbar__link" to="/Intolerences">
                  {protein.type}
                </Link>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
