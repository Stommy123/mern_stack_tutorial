import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Contact, Login, Profile, Register, Error, MyBooks, BookForm } from './pages';
import { NavBar, AuthRoute } from './components';

const App = _ => (
  <Router>
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/error" component={Error} />
      <AuthRoute exact path="/profile" component={Profile} />
      <AuthRoute exact path="/books" component={MyBooks} />
      <AuthRoute path="/create-book" component={BookForm} />
    </>
  </Router>
);

export default App;
