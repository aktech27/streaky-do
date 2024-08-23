import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialUser = null;

  const init = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : initialUser;
  };

  const [user, dispatch] = useReducer(authReducer, initialUser, init);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};