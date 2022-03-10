import React, { useState } from "react";
import ChildComponent from "./ChildComponent.js";
export const ParentComponent = () => {
  const [childMessage, setChildMessage] = useState(null);
  const handleCallback = (childData) => {
    setChildMessage(childData);
  };

  return (
    <div>
      <h4>Parent receives ⇨ {childMessage} </h4>
      <ChildComponent parentCallback={handleCallback} />
    </div>
  );
};
export default ParentComponent;
