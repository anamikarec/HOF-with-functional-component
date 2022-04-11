import React, { useState } from "react";
import HOC from "./HOC";

const A = (props) => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  const { count, handleIncrement, name } = props;
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment {name}</button>
    </div>
  );
};
export default HOC(A);
