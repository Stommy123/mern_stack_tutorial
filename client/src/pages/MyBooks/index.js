import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { SectionWrapper, Book } from '../../components';

const MyBooks = _ => {
  const initialState = { books: [] };
  const myBooksReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(myBooksReducer, initialState);
  const { books } = state;
  const fetchBooks = async _ => {
    const {
      data: { books, error }
    } = await axios.get('/books');
    if (error) return;
    setState({ books });
  };
  useEffect(_ => {
    fetchBooks();
  }, []);
  return (
    <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
      <h1 className="display-4">
        {books.map(book => (
          <Book key={book._id} {...book} />
        ))}
      </h1>
    </SectionWrapper>
  );
};

export default MyBooks;
