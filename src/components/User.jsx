import React from "react";
// import "../css/user.css";

function User({ user }) {
    return (
        <div className="user-cont">
            <div className="user-child">
                <img src={user.image} alt="" />
                <p>{user.name}</p>
            </div>
        </div>
    );
}

export default User;
