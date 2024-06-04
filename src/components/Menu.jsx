import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu({ cat = "" }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blog-backend1-ce510227abd3.herokuapp.com/api/auth/posts/?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts &&
        posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
          </div>
        ))}
    </div>
  );
}

export default Menu;
