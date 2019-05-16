import React from 'react';
import { NavLink } from 'react-router-dom';

const Book = ({ _id, title, author }) => (
  <div className="book">
    <NavLink to={`/books/${_id}`}>
      <p>Title: {title}</p>
      <p>Author: {author} </p>
    </NavLink>
    <NavLink to={`/books/update/${_id}`}>Edit Book</NavLink>
  </div>
);

export default Book;
