import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { SectionWrapper } from "../../components";
const AVATAR = require("../../assets/images/avatar.png");

const Profile = _ => {
  const initialState = { name: String(), favoriteBook: String() };
  const profileReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(profileReducer, initialState);
  const { name, favoriteBook } = state;
  const fetchProfile = async _ => {
    const {
      data: { name, favoriteBook, error }
    } = await axios.get("/user");
    if (error) return;
    setState({ name, favoriteBook });
  };
  useEffect(_ => {
    fetchProfile();
  }, []);
  return (
    <SectionWrapper columnDefs="col-md-8 col-md-offset-2">
      <h1 className="display-4">
        <img className="avatar img-circle hidden-xs-down" src={AVATAR} alt="avatar" />
        {name}
      </h1>
      <h2 className="favorite-book">Favorite Book: {favoriteBook}</h2>
    </SectionWrapper>
  );
};

export default Profile;
