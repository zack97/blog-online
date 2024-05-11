import React from "react";
import Logo from "../img/logo.jpeg";

function Menu() {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magnam.",
      img: Logo,
    },
    {
      id: 2,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magnam.",
      img: Logo,
    },
    {
      id: 3,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magnam.",
      img: Logo,
    },
    {
      id: 4,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magnam.",
      img: Logo,
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
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
