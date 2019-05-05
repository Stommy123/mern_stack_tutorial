import React from "react";
import { NavLink } from "react-router-dom";
import { SectionWrapper } from "..";

const Contact = _ => (
  <SectionWrapper>
    <div className="col-md-8 col-md-offset-2">
      <h1 className="display-4 m-b-2">Contact Us</h1>
      <p>
        Sed dictum dolor vitae dignissim scelerisque. Ut tincidunt, tortor at accumsan eleifend, tellus lectus
        vestibulum nibh, accumsan sagittis turpis nisl eu mauris. Mauris ut laoreet sapien. Nam suscipit, dui at
        condimentum accumsan, dui sapien tincidunt.
      </p>
      <NavLink className="btn btn-primary pull-md" href="#" to="#">
        Get In Touch
      </NavLink>
    </div>
  </SectionWrapper>
);

export default Contact;
