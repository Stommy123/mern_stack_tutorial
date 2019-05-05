import React from "react";
import { SectionWrapper, StaticContent } from "../../components";
import { schema } from "./Contact.schema";

const Contact = _ => (
  <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
    <StaticContent schema={schema} />
  </SectionWrapper>
);

export default Contact;
