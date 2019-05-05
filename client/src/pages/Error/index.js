import React from "react";
import { SectionWrapper } from "../../components";

const Error = _ => (
  <SectionWrapper columnDefs="col-md-6 col-md-offset-3 p-t-2" rowDefs="text-xs-center">
    <i className="icn-person material-icons">error</i>
    <p className="lead m-t-2=">You have to be logged in to view this content</p>
  </SectionWrapper>
);

export default Error;
