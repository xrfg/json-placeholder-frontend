import React, { useState } from "react";
import MyContext from "./MyContext";

export default function Container(props) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [posts, setPosts] = useState([]);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
        isRegistered,
        setIsRegistered,
        posts,
        setPosts,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
