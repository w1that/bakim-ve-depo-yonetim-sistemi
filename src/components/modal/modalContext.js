import { createContext, useContext, useReducer } from "react";

const initialState = {
  modal: {
    open: false,
    content: null,
  },
};

const ModalContext = createContext(initialState);

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          open: true,
          content: action.payload,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: {
          open: false,
          content: null,
        },
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
