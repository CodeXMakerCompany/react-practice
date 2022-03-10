import React from "react";

const ChildComponent = ({ parentCallback }) => {
  const onTrigger = (evt) => {
    const { value } = evt.target[0];
    parentCallback(value);
    evt.preventDefault();
  };
  return (
    <div>
      <h4>Childs sends </h4>
      <div>
        <form onSubmit={onTrigger}>
          <input type="text" />
        </form>
      </div>
      <br/>
    </div>
  );
};

export default ChildComponent;
