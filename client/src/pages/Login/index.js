import React, { useReducer } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { SectionWrapper, Form, Modal } from "../../components";
import { headers } from "../../assets/config";
import { schema } from "./Login.schema";

const Login = props => {
  const initialState = { isOpen: false, modalContent: String() };
  const loginReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(loginReducer, initialState);
  const { isOpen, modalContent } = state;
  const handleLogin = async formData => {
    const { data: { error, session, message } = {} } = await axios.post("/login", formData, { headers });
    if (error) return setState({ isOpen: true, modalContent: message });
    sessionStorage.setItem("sessionToken", session.userId);
    props.history.push("/profile");
  };
  const toggleModal = _ => setState({ isOpen: !isOpen });
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleLogin} />
      <Modal isOpen={isOpen} content={modalContent} toggleModal={toggleModal} />
    </SectionWrapper>
  );
};

export default withRouter(Login);
