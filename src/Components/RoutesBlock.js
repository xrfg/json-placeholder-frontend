import React from "react";

export default function RoutesBlock() {
  return (
    <div>
      <h3>Routes</h3>
      <p>
        All HTTP methods are supported. You can use http or https for your
        requests.
      </p>
      <table>
        <thead>
          <tr></tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>

            <td>/posts</td>
          </tr>
          <tr>
            <td>GET</td>

            <td>/posts/14050</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/posts/1/comments</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/posts/1/comments?postId=1</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/posts</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>/posts/1</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>/posts/1</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>/posts/1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
