import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

export default function ResourcesBlock() {
  const { posts, setPosts } = useContext(MyContext);
  const [showPosts, setShowPosts] = useState(false);
  function getAllPosts() {
    fetch("http://localhost:3010/posts", {
      method: "GET",
      headers: { "x-auth": localStorage.getItem("x-auth") },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPosts(result.data);
        setShowPosts(!showPosts);
      });
  }
  return (
    <div>
      <h3>Resources</h3>
      <p>JSONPlaceholder comes with a set of 6 common resources:</p>
      <table>
        <thead>
          <tr></tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/resources/posts" onClick={getAllPosts}>
                /posts
              </Link>
            </td>

            <td>10 posts at "http://localhost:3010/posts"</td>
          </tr>
        </tbody>
      </table>
      {showPosts ? (
        <ul>
          {posts.map((post, i) => {
            return <li key={i}>{post.title}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
