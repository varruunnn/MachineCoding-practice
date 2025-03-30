import React, { useState } from "react";
import Progess from "./Progess";

const App = () => {
  const [percentage, setpercentage] = useState(0);

  const handleClick = (value) => {
    setpercentage(value);
  };

  return (
    <div>
      <h1>Progess Bar</h1>
      <button onClick={() => handleClick(25)}>25%</button>
      <button onClick={() => handleClick(45)}>45%</button>
      <button onClick={() => handleClick(75)}>75%</button>
      <button onClick={() => handleClick(95)}>95%</button>
      <Progess progesss={percentage} />
    </div>
  );
};

export default App;