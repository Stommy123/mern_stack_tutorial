/* eslint-disable */
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Form, SectionWrapper, Modal } from '../../components';
import { headers } from '../../assets/config';
import { schema } from './BookForm.schema';

const BookForm = ({ history, match: { params: { id } = {} } = {} }) => {
  const initialState = {
    isOpen: false,
    modalContent: false,
    isUpdate: false,
    book: {}
  };
  const registerReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(registerReducer, initialState);
  const { isOpen, modalContent, isUpdate, book } = state;
  const handleSubmit = async formData => {
    const path = isUpdate ? `/update/${book._id}` : '/create';
    const {
      data: { error, message }
    } = await axios.post(`/books/${path}`, formData, { headers });
    if (error) return setState({ isOpen: true, modalContent: message });
    history.push('/books');
  };
  const fetchBook = async _ => {
    if (!id) return;
    const {
      data: { book, error }
    } = await axios.get(`/books/${id}`);
    if (error) return;
    setState({ isUpdate: true, book });
  };
  const toggleModal = _ => setState({ isOpen: !isOpen });
  useEffect(_ => {
    fetchBook();
  }, []);
  const updateSchema = book && Object.keys(book);
  return (
    <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
      <Form schema={schema} handleSubmit={handleSubmit} isUpdate={isUpdate} updateSchema={updateSchema} />
      <Modal isOpen={isOpen} content={modalContent} toggleModal={toggleModal} />
    </SectionWrapper>
  );
};

export default withRouter(BookForm);
