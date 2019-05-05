import React, { useReducer } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { SectionWrapper, FormGroup, Modal } from "..";
import { headers } from "../../assets/config";

const Login = props => {
  const initialState = { email: String(), password: String(), isOpen: false, modalContent: String() };
  const loginReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(loginReducer, initialState);
  const { email, password, isOpen, modalContent } = state;
  const handleInputChange = field => e => setState({ [field]: e.target.value });
  const handleLogin = async e => {
    e.preventDefault();
    const { data: { error, session, message } = {} } = await axios.post("/login", state, { headers });
    if (error) return setState({ isOpen: true, modalContent: message });
    sessionStorage.setItem("sessionToken", session.userId);
    props.history.push("/profile");
  };
  const toggleModal = _ => setState({ isOpen: !isOpen });
  return (
    <SectionWrapper>
      <div className="col-md-6 col-md-offset-3">
        <h1 className="display-4 m-b-2">Log In</h1>
        <form onSubmit={handleLogin}>
          <FormGroup
            label="Email:"
            type="text"
            id="email"
            placeholder="email"
            value={email}
            onChange={handleInputChange}
          />
          <FormGroup
            label="Password:"
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </form>
      </div>
      <Modal isOpen={isOpen} content={modalContent} toggleModal={toggleModal} />
    </SectionWrapper>
  );
};

export default withRouter(Login);
