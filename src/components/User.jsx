import React from "react";
import "../Css/Style.css";

function User({ user }) {
  return (
    <div className="users">
      <div className="user">
        <img src="https://johannesippen.com/img/blog/humans-not-users/header.jpg" />
        <h5>{user.name}</h5>
        <h4>{user.username}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default User;
