import React from "react";
import { Link } from "react-router-dom";

function HomeScene() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/Login">Login page</Link>
      <p />
      <Link to="/List">List page</Link>
    </div>
  );
}

export default HomeScene;
