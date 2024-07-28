import { createContext, useContext, useState } from "react";
import SignIn from "../Authentication/SignIn";

const AuthContext = createContext();
export default AuthContext;

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("user");
  const [userEmail, setUserEmail] = useState("No Email");
  // password ka state local

  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [modalChildren, setModalChildren] = useState(<SignIn />);
  const [showSignUp, setShowSignUp] = useState(false);
  function updateShowSignUp(val) {
    setShowSignUp(val);
  }
  return (
    <AuthContext.Provider
      value={{
        showModal,
        handleClose,
        handleOpen,
        showSignUp,
        updateShowSignUp,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
