import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import MyContext from "../context/MyContext";

export default function Navbar(props) {
  const { isLogin, setIsLogin, user } = useContext(MyContext);
  const history = useHistory();
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          backgroundColor: "violet",
          listStyleType: "none",
          justifyContent: "flex-end",
        }}
      >
        <li style={{ padding: "2rem" }}>
          <Link to="/">JSONPlaceholder</Link>
        </li>
        {isLogin ? (
          <>
            <li style={{ padding: "2rem", color: "green" }}>{user.fullname}</li>
            <li style={{ padding: "2rem" }}>
              <Link to="/resources">Resources</Link>
            </li>
            <li style={{ padding: "2rem" }}>
              <Link to="/routes">Routes</Link>
            </li>
            <li
              style={{ padding: "2rem", color: "red", cursor: "pointer" }}
              onClick={() => {
                localStorage.clear();
                setIsLogin(false);
                history.push("/");
              }}
            >
              log out
            </li>
          </>
        ) : (
          <>
            <li style={{ padding: "2rem" }}>
              <Link to="/login">Login</Link>
            </li>
            <li style={{ padding: "2rem" }}>
              <Link to="/signup">Singup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
