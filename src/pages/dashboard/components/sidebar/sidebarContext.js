import { createContext, useContext, useReducer } from "react";

const initialState = {
  activeSidebar: false,
};

const SidebarContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SIDEBAR":
      return {
        ...state,
        activeSidebar: action.payload,
      };
    default:
      return state;
  }
};

const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export { SidebarProvider, useSidebarContext };
