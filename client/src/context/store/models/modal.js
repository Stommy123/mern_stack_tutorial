export const modal = {
  initialState: {
    modalId: null,
    modalContent: String()
  },
  reducers: {
    setOpenModal: (state, { modalId }) => ({ ...state, modalId }),
    closeModal: state => ({ ...state, modalId: null }),
    setModalContent: (state, { modalContent }) => ({ ...state, modalContent })
  }
};
