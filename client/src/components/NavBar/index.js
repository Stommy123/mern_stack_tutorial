import React from 'react';
import { NavLink } from 'react-router-dom';
import { AccessButton } from '..';
import { isLoggedIn } from '../../utils';

const NavBar = _ => (
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div className="navbar-nav collapse navbar-toggleable-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <i className="icn-logo material-icons">bookmark_border</i>
          Bookworm
        </NavLink>
        <div className="nav-items clearfix">
          {!isLoggedIn() ? (
            <NavLink className="nav-item nav-link" to="/register">
              Sign Up
            </NavLink>
          ) : (
            <>
              <NavLink className="nav-item nav-link" to="/books">
                My Books
              </NavLink>
              <NavLink className="nav-item nav-link" to="/create-book">
                Add Book
              </NavLink>
            </>
          )}
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-item nav-link" to="/profile">
            My Profile
          </NavLink>
        </div>
        <AccessButton />
      </div>
    </div>
  </nav>
);

export default NavBar;
