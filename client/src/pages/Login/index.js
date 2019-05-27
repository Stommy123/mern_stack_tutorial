import React, { useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { SectionWrapper, Form, Modal } from "../../components";
import { headers } from "../../assets/config";
import { schema } from "./Login.schema";
import { GlobalContext } from "../../context";

const Login = props => {
  const {
    dispatch: {
      modal: { setOpenModal, closeModal, setModalContent }
    }
  } = useContext(GlobalContext);
  const handleLogin = async formData => {
    const { data: { error, session, message } = {} } = await axios.post("/login", formData, { headers });
    if (error) {
      setModalContent({ modalContent: message });
      return setOpenModal({ modalId: "loginModal" });
    }
    sessionStorage.setItem("sessionToken", session.userId);
    props.history.push("/profile");
  };
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleLogin} />
      <Modal id="loginModal" actions={[{ label: "Okay", onClick: closeModal }]} />
    </SectionWrapper>
  );
};

export default withRouter(Login);
