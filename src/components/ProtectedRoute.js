import React, { useEffect } from "react";
import { useAuthContext } from "./context/AuthorisationContext";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function ProtectedRoute({ Component }) {
  const authContextStore = useAuthContext();
  const { isLoggedIn, handleOpen } = authContextStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      handleOpen();
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <Container>
      <Component />
    </Container>
  );
}

export default ProtectedRoute;
