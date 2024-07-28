import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AgeClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [selectedClass, setSelectedClass] = useState("Economy");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: 300,
        alignContent: "center",
      }}
    >
      <Button
        className="dropdown-toggle"
        onClick={handleClick}
        startIcon={<PersonOutlineIcon />}
      >
        {Math.round((adults + children) / 2)} Rooms,
        {adults} {adults === 1 ? "Adult" : "Adults"} {children > 0 ? "," : ""}
        {children > 0 ? ` ${children} Children` : ""}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5, // Adjust this value to move the dropdown lower
            width: 300,
          },
        }}
      >
        <MenuItem>
          <Box className="option">
            <Typography variant="subtitle1" className="option-label">
              Adults
            </Typography>
            <Box marginLeft={17}>
              <IconButton
                onClick={() => setAdults(adults - 1)}
                disabled={adults <= 1}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="option-count">{adults}</span>
              <IconButton onClick={() => setAdults(adults + 1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box className="option">
            <Typography variant="subtitle1" className="option-label">
              Children
            </Typography>
            <Box marginLeft={15}>
              <IconButton
                onClick={() => setChildren(children - 1)}
                disabled={children <= 0}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="option-count">{children}</span>
              <IconButton onClick={() => setChildren(children + 1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AgeClass;
