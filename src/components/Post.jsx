// import React, { useEffect, useState } from "react";
// import UserPost from "./UserPost";

// function Post() {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((posts) => setPost(posts));
//   }, []);
//   return (
//     <div>
//       {post.map((post) => (
//         <UserPost key={post.id} post={post} />
//       ))}
//     </div>
//   );
// }

// export default Post;
