import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserAdd = () => {
  const { setUsers, users } = useContext(UserContext);

  const onTrigger = (evt) => {
    const { value } = evt.target[0];
    const object = { name : value };
    users.push(object);  
    setUsers([...users]);
    evt.preventDefault();
  };

  return (
    <div>
      <h4>Adding a new user</h4>
      <div>
        <form onSubmit={onTrigger}>
          <input type="text" />
        </form>
      </div>
      <br />
    </div>
  );
};

export default UserAdd;
