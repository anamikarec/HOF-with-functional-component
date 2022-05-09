import React from "react";
import HOC from "./HOC";

const B = (props) => {
  const { count, handleIncrement, name } = props;
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <h2>{count}</h2>
      <button onMouseOver={handleIncrement}>Increment {name}</button>
      <h6>(Increment with Hover)</h6>
    </div>
  );
};
export default HOC(B);
