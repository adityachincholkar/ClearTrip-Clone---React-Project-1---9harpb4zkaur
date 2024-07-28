// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Box,
//   Typography,
// } from "@mui/material";

// function SortDialogComponent() {
//   const [open, setOpen] = useState(false);
//   const [sortValue, setSortValue] = useState("recommended");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleApply = () => {
//     console.log("Applied sort value:", sortValue);
//     // Perform sorting logic here based on the selected value
//     handleClose();
//   };

//   const handleChange = (event) => {
//     setSortValue(event.target.value);
//   };

//   return (
//     <Box>
//       <Button variant="contained" onClick={handleOpen}>
//         Sort by: {sortValue.replace(/-/g, " ")}
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Sort hotels by</DialogTitle>
//         <DialogContent>
//           <FormControl component="fieldset">
//             <RadioGroup value={sortValue} onChange={handleChange}>
//               <FormControlLabel
//                 value="recommended"
//                 control={<Radio />}
//                 label="Recommended"
//               />
//               <FormControlLabel
//                 value="top-rated"
//                 control={<Radio />}
//                 label="Top-rated"
//               />
//               <FormControlLabel
//                 value="price-high-to-low"
//                 control={<Radio />}
//                 label="Price: High to Low"
//               />
//               <FormControlLabel
//                 value="price-low-to-high"
//                 control={<Radio />}
//                 label="Price: Low to High"
//               />
//             </RadioGroup>
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleApply} color="primary">
//             Apply
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

// export default SortDialogComponent;
// import React, { useState } from "react";
// import {
//   Button,
//   Popover,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Box,
//   Typography,
//   Paper,
// } from "@mui/material";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import { useState } from "react";

// function SortPopoverComponent() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [sortValue, setSortValue] = useState("recommended");

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleApply = () => {
//     console.log("Applied sort value:", sortValue);
//     // Perform sorting logic here based on the selected value
//     handleClose();
//   };

//   const handleChange = (event) => {
//     setSortValue(event.target.value);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "sort-popover" : undefined;

//   return (
//     <Box>
//       <Button
//         variant="outlined"
//         onClick={handleOpen}
//         size="large"
//         startIcon={<FilterAltIcon />}
//       >
//         Sort by: {sortValue.replace(/-/g, " ")}
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         PaperProps={{
//           style: {
//             backgroundColor: "transparent",
//             boxShadow: "none",
//             marginTop: "10px", // Add gap when it opens
//           },
//         }}
//       >
//         <Paper sx={{ p: 2, backgroundColor: "white" }}>
//           <Typography variant="h6">Sort hotels by</Typography>
//           <FormControl component="fieldset">
//             <RadioGroup value={sortValue} onChange={handleChange}>
//               <FormControlLabel
//                 value="recommended"
//                 control={<Radio />}
//                 label="Recommended"
//               />
//               <FormControlLabel
//                 value="top-rated"
//                 control={<Radio />}
//                 label="Top-rated"
//               />
//               <FormControlLabel
//                 value="price-high-to-low"
//                 control={<Radio />}
//                 label="Price: High to Low"
//               />
//               <FormControlLabel
//                 value="price-low-to-high"
//                 control={<Radio />}
//                 label="Price: Low to High"
//               />
//             </RadioGroup>
//           </FormControl>
//           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleApply} color="primary">
//               Apply
//             </Button>
//           </Box>
//         </Paper>
//       </Popover>
//     </Box>
//   );
// }

// export default SortPopoverComponent;
// import {
//   Button,
//   Popover,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Box,
//   Typography,
//   Paper,
// } from "@mui/material";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function SortPopoverComponent() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [sortValue, setSortValue] = useState("recommended");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [LinkSortValue, setLinkSortValue] = useState("recommended");
//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleChange = (event) => {
//     setSortValue(event.target.value);
//     if (sortValue == "top-rated") {
//       setLinkSortValue("rating:-1");
//     }
//     if (sortValue === "recommended") {
//       setLinkSortValue("recommended");
//     }
//     if (sortValue == "price-high-to-low") {
//       setLinkSortValue("avgCostPerNight:-1");
//     }
//     if (sortValue == "price-low-to-high") {
//       setLinkSortValue("avgCostPerNight:1");
//     }
//   };

//   const handleApply = () => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("sort", LinkSortValue);
//     navigate(`${location.pathname}?${searchParams.toString()}`);
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "sort-popover" : undefined;

//   return (
//     <Box>
//       <Button
//         variant="outlined"
//         onClick={handleOpen}
//         size="large"
//         startIcon={<FilterAltIcon />}
//       >
//         Sort by: {sortValue.replace(/-/g, " ")}
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         PaperProps={{
//           style: {
//             backgroundColor: "transparent",
//             boxShadow: "none",
//             marginTop: "10px", // Add gap when it opens
//           },
//         }}
//       >
//         <Paper sx={{ p: 2, backgroundColor: "white" }}>
//           <Typography variant="h6">Sort hotels by</Typography>
//           <FormControl component="fieldset">
//             <RadioGroup value={sortValue} onChange={handleChange}>
//               <FormControlLabel
//                 value="recommended"
//                 control={<Radio />}
//                 label="Recommended"
//               />
//               <FormControlLabel
//                 value="top-rated"
//                 control={<Radio />}
//                 label="Top-rated"
//               />
//               <FormControlLabel
//                 value="price-high-to-low"
//                 control={<Radio />}
//                 label="Price: High to Low"
//               />
//               <FormControlLabel
//                 value="price-low-to-high"
//                 control={<Radio />}
//                 label="Price: Low to High"
//               />
//             </RadioGroup>
//           </FormControl>
//           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleApply} color="primary">
//               Apply
//             </Button>
//           </Box>
//         </Paper>
//       </Popover>
//     </Box>
//   );
// }

// export default SortPopoverComponent;
import {
  Button,
  Popover,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SortPopoverComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortValue, setSortValue] = useState("recommended");
  const navigate = useNavigate();
  const location = useLocation();
  const [LinkSortValue, setLinkSortValue] = useState("recommended");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSortValue(value);

    if (value === "top-rated") {
      setLinkSortValue("rating:-1");
    } else if (value === "recommended") {
      setLinkSortValue("recommended");
    } else if (value === "price-high-to-low") {
      setLinkSortValue("avgCostPerNight:-1");
    } else if (value === "price-low-to-high") {
      setLinkSortValue("avgCostPerNight:1");
    }
  };

  const handleApply = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", LinkSortValue);
    navigate(`${location.pathname}?${searchParams.toString()}`);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "sort-popover" : undefined;

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleOpen}
        size="large"
        startIcon={<FilterAltIcon />}
      >
        Sort by: {sortValue.replace(/-/g, " ")}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            marginTop: "10px", // Add gap when it opens
          },
        }}
      >
        <Paper sx={{ p: 2, backgroundColor: "white" }}>
          <Typography variant="h6">Sort hotels by</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={sortValue} onChange={handleChange}>
              <FormControlLabel
                value="recommended"
                control={<Radio />}
                label="Recommended"
              />
              <FormControlLabel
                value="top-rated"
                control={<Radio />}
                label="Top-rated"
              />
              <FormControlLabel
                value="price-high-to-low"
                control={<Radio />}
                label="Price: High to Low"
              />
              <FormControlLabel
                value="price-low-to-high"
                control={<Radio />}
                label="Price: Low to High"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleApply} color="primary">
              Apply
            </Button>
          </Box>
        </Paper>
      </Popover>
    </Box>
  );
}

export default SortPopoverComponent;
// import {
//   Button,
//   Popover,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   Box,
//   Typography,
//   Paper,
// } from "@mui/material";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import { useState, useCallback } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function SortPopoverComponent() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [sortValue, setSortValue] = useState("recommended");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [linkSortValue, setLinkSortValue] = useState("recommended");

//   const handleOpen = useCallback((event) => {
//     setAnchorEl(event.currentTarget);
//   }, []);

//   const handleClose = useCallback(() => {
//     setAnchorEl(null);
//   }, []);

//   const handleChange = useCallback((event) => {
//     const value = event.target.value;
//     setSortValue(value);

//     if (value === "top-rated") {
//       setLinkSortValue("rating:-1");
//     } else if (value === "recommended") {
//       setLinkSortValue("recommended");
//     } else if (value === "price-high-to-low") {
//       setLinkSortValue("avgCostPerNight:-1");
//     } else if (value === "price-low-to-high") {
//       setLinkSortValue("avgCostPerNight:1");
//     }
//   }, []);

//   const handleApply = useCallback(() => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("sort", linkSortValue);
//     navigate(`${location.pathname}?${searchParams.toString()}`);
//     handleClose();
//   }, [linkSortValue, location, navigate, handleClose]);

//   const open = Boolean(anchorEl);
//   const id = open ? "sort-popover" : undefined;

//   return (
//     <Box>
//       <Button
//         variant="outlined"
//         onClick={handleOpen}
//         size="large"
//         startIcon={<FilterAltIcon />}
//       >
//         Sort by: {sortValue.replace(/-/g, " ")}
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         PaperProps={{
//           style: {
//             backgroundColor: "transparent",
//             boxShadow: "none",
//             marginTop: "10px", // Add gap when it opens
//           },
//         }}
//       >
//         <Paper sx={{ p: 2, backgroundColor: "white" }}>
//           <Typography variant="h6">Sort hotels by</Typography>
//           <FormControl component="fieldset">
//             <RadioGroup value={sortValue} onChange={handleChange}>
//               <FormControlLabel
//                 value="recommended"
//                 control={<Radio />}
//                 label="Recommended"
//               />
//               <FormControlLabel
//                 value="top-rated"
//                 control={<Radio />}
//                 label="Top-rated"
//               />
//               <FormControlLabel
//                 value="price-high-to-low"
//                 control={<Radio />}
//                 label="Price: High to Low"
//               />
//               <FormControlLabel
//                 value="price-low-to-high"
//                 control={<Radio />}
//                 label="Price: Low to High"
//               />
//             </RadioGroup>
//           </FormControl>
//           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleApply} color="primary">
//               Apply
//             </Button>
//           </Box>
//         </Paper>
//       </Popover>
//     </Box>
//   );
// }

// export default SortPopoverComponent;
