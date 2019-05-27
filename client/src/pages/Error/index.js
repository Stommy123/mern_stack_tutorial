import React, { useContext } from "react";
import { SectionWrapper } from "../../components";
import { GlobalContext } from "../../context";

const Error = _ => {
  const {
    state: {
      error: { content }
    }
  } = useContext(GlobalContext);
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3 p-t-2" rowDefs="text-xs-center">
      <i className="icn-person material-icons">error</i>
      <p className="lead m-t-2=">{content}</p>
    </SectionWrapper>
  );
};

export default Error;
