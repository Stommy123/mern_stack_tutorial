import React, { useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form, Modal, SectionWrapper } from "../../components";
import { headers } from "../../assets/config";
import { schema } from "./Register.schema";
import { GlobalContext } from "../../context";

const Register = props => {
  const {
    dispatch: {
      modal: { setOpenModal, closeModal, setModalContent }
    }
  } = useContext(GlobalContext);
  const handleRegister = async formData => {
    const {
      data: { error, message }
    } = await axios.post("/register", formData, { headers });
    if (error) {
      setModalContent({ modalContent: message });
      return setOpenModal({ modalId: "registerModal" });
    }
    props.history.push("/login");
  };
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleRegister} />
      <Modal id="registerModal" actions={[{ label: "Okay", onClick: closeModal }]} />
    </SectionWrapper>
  );
};

export default withRouter(Register);
