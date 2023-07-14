// import React, { useEffect, useState } from "react";
// import User from "./User";
// import "../css/user.css";
// import Header from "./Header";

// function Users() {
//     const [users, setUsers] = useState([]);
//     console.log(users);
//     useEffect(() => {
//         fetch("https://hp-api.onrender.com/api/characters")
//             .then((response) => response.json())
//             .then((user) => setUsers(user));
//     }, []);

//     return (
//         <div className="parent">
//             {/* <Header users={users} /> */}
//             {users.map((user) => {
//                 return <User key={user.id} user={user} />;
//             })}
//         </div>
//     );
// }

// export default Users;
