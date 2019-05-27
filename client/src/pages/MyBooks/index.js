import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { SectionWrapper, Book } from "../../components";

const MyBooks = _ => {
  const initialState = { books: [] };
  const myBooksReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(myBooksReducer, initialState);
  const { books } = state;
  const fetchBooks = async _ => {
    const {
      data: { books, error }
    } = await axios.get("/books");
    if (error) return;
    setState({ books });
  };
  useEffect(_ => {
    fetchBooks();
  }, []);
  return (
    <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
      <h1 className="text text-center">My Books</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <Book key={book._id} rowId={i + 1} {...book} />
          ))}
        </tbody>
      </table>
    </SectionWrapper>
  );
};

export default MyBooks;
