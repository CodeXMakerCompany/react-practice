import React, { useEffect, useState } from "react";

const Index = () => {
  const [userList, setUserList] = useState([]);

  const addUser = async () => {
    await 
      fetch("https://randomuser.me/api")
      .then((r) => r.json())
      .then((res) => {
        const { name : { first, last, title } } = res.results[0];
        const fullName = [first, last, title].join(" ");
        setUserList( prevState => [ ...prevState, { name : fullName } ] );
      }); 
  };

  useEffect(() => {
    console.log(userList);
    if (userList.length > 3) {
      alert("Please stop 😎")
    }
  }, [userList]);

  useEffect(() => {
    if (userList.length > 3) {
      document.title = `Last record : ${userList[userList.length - 1].name}`;
    }
  }, [userList]);

  return (
    <div>
      Al presionar un boton llamar un endpoint agregar a la lista ese usuario
      vamos a renderizar esto
      <br />
      <button onClick={addUser}> Add user </button>
      <br />
      {userList.length
        ? userList.map((user, idx) => (
            <div key={user.name + idx}> {user.name} </div>
          ))
        : "Empty list"}
    </div>
  );
};

export default Index;
