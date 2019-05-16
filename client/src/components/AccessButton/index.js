import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { isLoggedIn } from '../../utils';

const AccessButton = props => {
  const handleLogout = _ => {
    sessionStorage.removeItem('sessionToken');
    props.history.push('/');
  };
  return isLoggedIn() ? (
    <button className="btn btn-info pull-md-right" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <NavLink className="btn btn-info pull-md-right" to="/login">
      Login
    </NavLink>
  );
};

export default withRouter(AccessButton);
