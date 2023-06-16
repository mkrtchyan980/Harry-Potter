import React, { useEffect, useState } from "react";
import "../Css/Style.css";
import User from "./User";

function Api() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);
  return (
    <div className="info">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Api;
