import React from 'react';
import { SectionWrapper, StaticContent } from '../../components';
import { schema } from './About.schema';

const About = _ => (
  <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
    <StaticContent schema={schema} />
  </SectionWrapper>
);

export default About;
