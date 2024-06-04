import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "https://blog-backend1-ce510227abd3.herokuapp.com/api/auth/login",
        inputs
      );
      const userData = res.data;
      setCurrentUser(userData);

      // Save token to local storage
      localStorage.setItem("user", JSON.stringify(userData));

      // Save token to cookies
      Cookies.set("access_token", userData.token, { expires: 7 }); // Expires in 7 days
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "https://blog-backend1-ce510227abd3.herokuapp.com/api/auth/logout"
      );
      setCurrentUser(null);

      // Remove token from local storage
      localStorage.removeItem("user");

      // Remove token from cookies
      Cookies.remove("access_token");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
