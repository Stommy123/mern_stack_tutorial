import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../content";
import { GlobalContextProvider } from "../context";

const App = _ => (
  <GlobalContextProvider>
    <Router>
      <Content />
    </Router>
  </GlobalContextProvider>
);

export default App;
