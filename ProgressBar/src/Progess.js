import React, { useState, useEffect } from "react";
import "./styles.css";
const Progess = ({ progesss }) => {
  const [animate, setanimate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setanimate(progesss);
    }, 10);
  }, [progesss]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${animate}%`,
          backgroundColor: animate > 5 ? "greenyellow" : "",
        }}
      >
        {animate >= 5 && `${animate}%`}
      </div>
    </div>
  );
};

export default Progess;
