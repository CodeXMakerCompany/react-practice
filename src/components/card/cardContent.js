import React, { useEffect, useState } from "react";

export const CardContent = ({initialValue}) => {
  const [count, setCount] = useState(initialValue);

  const addOrSomething = async () => {
    if ((count - 1) <= 0) {
      return alert("'THAT'S NOT RIGHT")
    }
    setCount(count - 1)
  };
  
  return (
    <div>
      <p>Adding more and more cards</p>
      <p>{count}</p> <br />
      <button onClick={() => addOrSomething()}>Hit me!</button>
    </div>
  );
};
