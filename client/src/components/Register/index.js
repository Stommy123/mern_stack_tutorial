import React, { useReducer } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { FormGroup } from "..";
import { headers } from "../../assets/config";

const Register = props => {
  const initialState = {
    name: String(),
    email: String(),
    favoriteBook: String(),
    password: String(),
    confirmPassword: String()
  };
  const registerReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(registerReducer, initialState);
  const { name, email, favoriteBook, password, confirmPassword } = state;
  const handleInputChange = field => e => setState({ [field]: e.target.value });
  const handleRegister = async e => {
    e.preventDefault();
    const {
      data: { error }
    } = await axios.post("/register", state, { headers });
    if (error) return;
    props.history.push("/login");
  };
  return (
    <div className="main container row">
      <div className="col-md-6 col-md-offset-3">
        <h1 className="display-4 m-b-2">Sign Up</h1>
        <form onSubmit={handleRegister}>
          <FormGroup
            label="Name:"
            type="text"
            id="name"
            placeholder="name"
            required
            value={name}
            onChange={handleInputChange}
          />
          <FormGroup
            label="Email:"
            type="email"
            id="email"
            placeholder="name@email.com"
            required
            value={email}
            onChange={handleInputChange}
          />
          <FormGroup
            label="Favorite Book:"
            type="text"
            id="favoriteBook"
            placeholder="title of book"
            required
            value={favoriteBook}
            onChange={handleInputChange}
          />
          <FormGroup
            label="Password:"
            type="password"
            id="password"
            required
            value={password}
            onChange={handleInputChange}
          />
          <FormGroup
            label="Confirm Password:"
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
