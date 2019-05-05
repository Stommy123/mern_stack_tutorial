import React, { useReducer } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form, Modal, SectionWrapper } from "../../components";
import { headers } from "../../assets/config";
import { schema } from "./Register.schema";

const Register = props => {
  const initialState = {
    isOpen: false,
    modalContent: false
  };
  const registerReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(registerReducer, initialState);
  const { isOpen, modalContent } = state;
  const handleRegister = async formData => {
    const {
      data: { error, message }
    } = await axios.post("/register", formData, { headers });
    if (error) return setState({ isOpen: true, modalContent: message });
    props.history.push("/login");
  };
  const toggleModal = _ => setState({ isOpen: !isOpen });
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleRegister} />
      <Modal isOpen={isOpen} content={modalContent} toggleModal={toggleModal} />
    </SectionWrapper>
  );
};

export default withRouter(Register);
