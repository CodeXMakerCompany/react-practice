import React, { useState } from "react";
import { UserContext } from "./UserContext";
import UserList from "./UserList";

import { data } from "../../dummyData";
import UserAdd from "./UserAdd";

const Context = () => {
  //Manipulating list
  const [users, setUsers] = useState(data.users);

  return (
    //Check error w/o value
    <UserContext.Provider
      value={{
        users: users,
        setUsers,
      }}
    >
      <UserList />
      <UserAdd />
    </UserContext.Provider>
  );
};

export default Context;
