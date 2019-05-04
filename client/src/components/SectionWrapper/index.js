import React from "react";

const SectionWrapper = ({ children }) => (
  <div className="main container">
    <div className="row">{children}</div>
  </div>
);

export default SectionWrapper;
