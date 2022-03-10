import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((item) => (
        <UserItem item={item} key={item.name} />
      ))}
    </div>
  );
};

export default UserList;
