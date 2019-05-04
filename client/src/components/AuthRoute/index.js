import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils";

const AuthRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={_ => (isLoggedIn() ? <Component /> : <Redirect to="/error" />)} />
);

export default AuthRoute;
