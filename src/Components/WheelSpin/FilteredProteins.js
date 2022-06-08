import React, { useState, useEffect } from "react";

export const ProteinChoice = () => {
  const [protein, setProtein] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/protein")
      .then((res) => res.json())
      .then((data) => {
        setProtein(data);
      });
  }, []);


  return (
    <><div className="content">
      <h1>Pick your Main Protein</h1>

      <div className="buttonOp">
        {protein.map((protein) => {
          return <button key={`protein--${protein.id}`}>{protein.type}</button>;
        })}
      </div>
      </div>
    </>
  );
};