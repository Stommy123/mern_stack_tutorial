import React from "react";
import { NavLink } from "react-router-dom";

const Home = _ => (
  <div className="main container text-xs-center">
    <h1 className="display-3">Read & Share Books</h1>
    <p className="lead">Choose from our large collection of paid and free books!</p>
    <NavLink className="btn btn-info-outline btn-lg" to="/register">
      Get Started for FREE
    </NavLink>
  </div>
);

export default Home;
