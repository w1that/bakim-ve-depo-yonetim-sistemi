const { useContext, useReducer, createContext } = require("react");

const initialState = {
  user: {
    id: "1725123",
    role: "depo-elemani", // depo-elemani, bakim-ekibi-elemani, bakim-ekibi-lideri
  },
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
