import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Course Administration</h1>
      <p className="lead">React, Flux, and React Router for ultra-responsive web apps.</p>
      <Link to="/about" className="btn btn-primary">About</Link>
    </div>
  );
}

export default HomePage;