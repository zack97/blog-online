import pool from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  pool.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  res.json("this is get single post");
};

export const addPost = (req, res) => {
  res.json("this is add post");
};

export const deletePost = (req, res) => {
  res.json("this is delete post");
};

export const updatePost = (req, res) => {
  res.json("this is update post");
};
