import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";

import SignIn from "./SignIn";
export default function LoginModal({ handleClose, showModal, modalChildren }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="login-modal-backdrop"
    >
      <Box sx={style} className="login-modal">
        <div
          className="modal-overlay"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          {modalChildren}
          <CloseModalButton handleClose={handleClose} />
        </div>
      </Box>
    </Modal>
  );
}

export function CloseModalButton({ handleClose }) {
  return (
    <button
      className="close-modal-button"
      onClick={handleClose}
      style={{
        position: "absolute",
        backgroundColor: "white",
        height: "35px",
        width: "35px",
        borderRadius: "50%",
        fontSize: "24px",
        fontWeight: 600,
        color: "red",
        top: "65px",
        right: 0,
      }}
    >
      <ClearIcon />
    </button>
  );
}
