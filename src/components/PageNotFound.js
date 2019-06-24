import React from 'react'
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-danger">Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PageNotFound;