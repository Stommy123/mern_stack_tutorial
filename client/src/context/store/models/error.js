export const error = {
  initialState: { content: "You have to be logged in to view this content" },
  reducers: {
    setErrorContent: (state, { content }) => ({ ...state, content }),
    resetErrorContent: state => ({ ...state, content: "You have to be logged in to view this content" })
  }
};
