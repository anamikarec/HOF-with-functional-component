import React, { useState } from "react";

const HOC = (WrappedComponent) => {
  const HOC = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent
          count={count}
          handleIncrement={handleIncrement}
          {...props}
        />
      </div>
    );
  };
  return HOC;
};
export default HOC;
