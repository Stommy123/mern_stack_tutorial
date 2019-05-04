import React from "react";
import { NavLink } from "react-router-dom";
import { SectionWrapper } from "..";

const About = _ => (
  <SectionWrapper>
    <div className="col-md-8 col-md-offset-2">
      <h1 className="display-4 m-b-2">About Us</h1>
      <p>
        Bookworm is a friendly community where book lovers can discover and share books. ee which books your friends are
        reading, and keep track of books you're reading or want to read.
      </p>
      <p>
        Sed dictum dolor vitae dignissim scelerisque. Ut tincidunt, tortor at accumsan eleifend, tellus lectus
        vestibulum nibh, accumsan sagittis turpis nisl eu mauris. Mauris ut laoreet sapien. Nam suscipit, dui at
        condimentum accumsan, dui sapien tincidunt.
      </p>
      <NavLink className="btn btn-info-outline btn-lg m-t-1" to="/register">
        Get Started for FREE
      </NavLink>
    </div>
  </SectionWrapper>
);

export default About;
