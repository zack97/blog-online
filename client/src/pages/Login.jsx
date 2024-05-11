import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid username or password");
        } else if (err.response.status === 404) {
          setError("User not found");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      } else {
        setError("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p className="error">{error}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
