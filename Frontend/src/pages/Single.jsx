import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";

function Single() {
  const [post, setPost] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/auth/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const token = currentUser?.token;
      console.log("mon token:", token);
      if (!token) {
        console.error("Token not found");
        return;
      }

      const config = {
        headers: {
          Authorization: ` ${token}`,
        },
      };

      const res = await axios.delete(
        `http://localhost:8800/api/auth/posts/${postId}`,
        config
      );

      navigate("/");
    } catch (err) {
      console.log("Failed to delete post:", err);
    }
  };

  return (
    <div className="single">
      {post ? (
        <div className="content logo">
          <img src={post?.img} alt="" />
          <div className="user">
            {post.userImg && <img src={post.userImg} alt="" />}
            <div className="info">
              <span>{post.username}</span>
              <p>{moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.other.username === post.username && (
              <div className="edit">
                <Link to={`/write?edit=${postId}`} state={post}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <i onClick={handleDelete} className="fa-solid fa-trash"></i>
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <br />
          <p>{post.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {post && <Menu cat={post.cat} />}
    </div>
  );
}

export default Single;
