/* eslint-disable */
import React, { useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form, SectionWrapper, Modal } from "../../components";
import { headers } from "../../assets/config";
import { schema } from "./BookForm.schema";
import { GlobalContext } from "../../context";

const BookForm = ({ history }) => {
  const {
    dispatch: {
      modal: { setOpenModal, closeModal, setModalContent }
    }
  } = useContext(GlobalContext);
  const handleSubmit = async formData => {
    const {
      data: { error, message }
    } = await axios.post(`/books/create`, formData, { headers });
    if (error) {
      setModalContent({ modalContent: message });
      return setOpenModal({ modalId: "bookModal" });
    }
    history.push("/books");
  };
  return (
    <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
      <Form schema={schema} handleSubmit={handleSubmit} />
      <Modal id="bookModal" actions={[{ label: "Okay", onClick: closeModal }]} />
    </SectionWrapper>
  );
};

export default withRouter(BookForm);
