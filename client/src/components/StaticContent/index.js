import React from 'react';
import { NavLink } from 'react-router-dom';

const StaticContent = ({ schema: { headingText, items = [], buttons = [] } = {} }) => (
  <>
    <h1 className="display-4 m-b-2">{headingText}</h1>
    {items.map(({ content }) => (
      <p>{content}</p>
    ))}
    {buttons.map(({ text, path }) => (
      <NavLink key={path} className="btn btn-info-outline btn-lg m-t-1" to={path}>
        {text}
      </NavLink>
    ))}
  </>
);

export default StaticContent;
