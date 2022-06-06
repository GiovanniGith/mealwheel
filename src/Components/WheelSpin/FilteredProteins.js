import React, { useEffect, useState } from "react";

export const FilteredProteinList = () => {
  const [filteredProtein, setFilteredProtein] = useState([]);
 
  const ProteinType = 

  useEffect(() => {
    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=${ProteinType}")
      .then((res) => res.json())
      .then((data) => {
        setFilteredProtein(data);
      });
  }, []);

  return (
    <>
     
    </>
  );
};
