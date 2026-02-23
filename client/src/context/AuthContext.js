import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   isFetching: false,
//   error: false,
// };

const INITIAL_STATE = {
  user: {
    _id: "697b17e59805b7aeb42cb3d9",
    username: "jane",
    email: "jane@gmail.com",
    password: "123456",
    profilePicture: "person/noAvatar.png",
    coverPicture: "person/noCover.png",
    isAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
