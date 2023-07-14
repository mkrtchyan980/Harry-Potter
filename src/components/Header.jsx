// import React, { useEffect, useState } from "react";
// import "../css/header.css";
// import Users from "./Users";
// import "./api.jsx";

// function Header({ users }) {
//     const [value, setValue] = useState("");
//     const [search, setSearch] = useState([]);

//     const handleInput = (event) => {
//         setValue(event.target.value);
//         const result = users.filter((item) => {
//             return item.name.toLowerCase(event.target.value.toLowerCase());
//         });
//         setSearch(result);
//     };
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <input
//                         type="search"
//                         placeholder="Search"
//                         value={value}
//                         onChange={handleInput}
//                     />
//                     <button>
//                         <ion-icon name="search-outline"></ion-icon>
//                     </button>
//                 </nav>
//             </header>
//             {/* <Users data={search.length > 0 ? search : users} /> */}
//         </div>
//     );
// }

// export default Header;
