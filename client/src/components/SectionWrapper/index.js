import React from "react";
import classNames from "classnames";

const SectionWrapper = ({ columnDefs, rowDefs, children }) => (
  <div className="main container">
    <div className={classNames("row", rowDefs)}>
      <div className={columnDefs}>{children}</div>
    </div>
  </div>
);

export default SectionWrapper;
