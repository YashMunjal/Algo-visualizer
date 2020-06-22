import React, { useState, useEffect } from "react";
import "./Sorting.css";

const SortingVisualizer = () => {
  var [flag, setFlag] = useState(0);
  const arr = [];
  for (let i = 0; i < 200; i++) {
    arr.push(setRand(5, 700));
  }
  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      arr.push(setRand(5, 600));
    }
  }, [arr, flag]);

  
  const mergeSort=(e)=>{
    //console.log(e);
  }


  return (
    <div className="array-container">
      {arr.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button onClick={() => setFlag(flag + 1)}>Generate New Array</button>
      <button onClick={mergeSort(arr)}>MergeSort</button>
    </div>
  );
};

//helper

//helper
function setRand(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

export default SortingVisualizer;
