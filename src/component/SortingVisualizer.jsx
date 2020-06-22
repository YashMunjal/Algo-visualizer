import React, { useState, useEffect } from "react";
import arr from "./ArrayMaker";
import "./Sorting.css";

const SortingVisualizer = () => {
  var [flag, setFlag] = useState(0);

    
  var newArray=[...arr];

  useEffect(()=>{
    
  },[flag])
  return (
    <div className="array-container">
        <p>The value is flag is {flag}</p>
      {newArray.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button onClick={() => setFlag(flag+1)}>Generate New Array</button>
    </div>
  );
};

export default SortingVisualizer;
