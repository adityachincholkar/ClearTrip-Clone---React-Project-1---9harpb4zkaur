// import React, { useState } from "react";
// import {
//   Button,
//   Popover,
//   Box,
//   Typography,
//   Slider,
//   Checkbox,
//   FormControlLabel,
//   Paper,
//   Grid,
//   FormGroup,
// } from "@mui/material";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { useLocation, useNavigate } from "react-router-dom";

// function FilterCard() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [priceRange, setPriceRange] = useState([500, 30000]);
//   const [selectedStarRating, setSelectedStarRating] = useState(null);
//   const [selectedGuestRating, setSelectedGuestRating] = useState(null);
//   const [startValue, SetStarValue] = useState(null);
//   const [ratingValue, SetRatingValue] = useState(0);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const handleStarRatingChange = (rating) => {
//     setSelectedStarRating(rating);

//     if (rating == "5-star") {
//       SetStarValue(5);
//     } else if (rating == "4-star") {
//       SetStarValue(4.5);
//     } else if (rating == "3-star") {
//       SetStarValue(3.5);
//     }
//   };

//   const handleGuestRatingChange = (rating) => {
//     setSelectedGuestRating(rating);

//     if (rating == "4.5 & above") {
//       SetRatingValue(4.5);
//     } else if (rating == "4 & above") {
//       SetRatingValue(4);
//     } else if (rating == "3.5 & above") {
//       SetRatingValue(3.5);
//     } else if (rating == "3 & above") {
//       SetRatingValue(3);
//     }
//   };

//   const handleApply = () => {
//     const searchParams = new URLSearchParams(location.search);
//     if (startValue) searchParams.set("HotelStar", startValue);
//     if (ratingValue) searchParams.set("HotelRating", ratingValue);

//     navigate(`${location.pathname}?${searchParams.toString()}`);
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "filters-popover" : undefined;

//   return (
//     <Box>
//       <Button
//         variant="outlined"
//         size="large"
//         startIcon={<FilterListIcon />}
//         onClick={handleOpen}
//       >
//         Filter
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         PaperProps={{
//           style: {
//             marginTop: "10px", // Add gap when it opens
//             width: "300px",
//           },
//         }}
//       >
//         <Paper sx={{ py: 2, px: 4 }}>
//           <Typography variant="h6" gutterBottom>
//             Filters
//           </Typography>
//           <Box sx={{ mb: 2 }}>
//             <Typography variant="subtitle1">Star Rating</Typography>
//             <Grid container spacing={1}>
//               {["5-star", "4-star", "3-star"].map((star) => (
//                 <Grid item key={star}>
//                   <Button
//                     variant={
//                       selectedStarRating === star ? "contained" : "outlined"
//                     }
//                     onClick={() => handleStarRatingChange(star)}
//                   >
//                     {star}
//                   </Button>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//           <Box sx={{ mb: 2 }}>
//             <Typography variant="subtitle1">Price (per night)</Typography>
//             <Slider
//               value={priceRange}
//               onChange={handlePriceChange}
//               valueLabelDisplay="auto"
//               min={4500}
//               max={8000}
//               step={100}
//               marks={[
//                 { value: 4500, label: "₹4,500" },
//                 { value: 8000, label: "₹8,000" },
//               ]}
//             />
//             <Typography variant="body2">
//               ₹{priceRange[0]} - ₹{priceRange[1]}+
//             </Typography>
//           </Box>
//           <Box>
//             <Typography variant="subtitle1">Guest Ratings</Typography>
//             <FormGroup>
//               {["4.5 & above", "4 & above", "3.5 & above", "3 & above"].map(
//                 (rating) => (
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedGuestRating === rating}
//                         onChange={() => handleGuestRatingChange(rating)}
//                       />
//                     }
//                     label={rating}
//                     key={rating}
//                   />
//                 )
//               )}
//             </FormGroup>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//             <Button variant="contained" onClick={handleApply}>
//               Show hotels
//             </Button>
//           </Box>
//         </Paper>
//       </Popover>
//     </Box>
//   );
// }

// export default FilterCard;
import React, { useState } from "react";
import {
  Button,
  Popover,
  Box,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  Paper,
  Grid,
  FormGroup,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useLocation, useNavigate } from "react-router-dom";

function FilterCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [priceRange, setPriceRange] = useState([4500, 8000]);
  const [selectedStarRating, setSelectedStarRating] = useState(null);
  const [selectedGuestRating, setSelectedGuestRating] = useState(null);
  const [startValue, SetStarValue] = useState(null);
  const [ratingValue, SetRatingValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleStarRatingChange = (rating) => {
    setSelectedStarRating(rating);

    if (rating === "5-star") {
      SetStarValue(5);
    } else if (rating === "4-star") {
      SetStarValue(4.5);
    } else if (rating === "3-star") {
      SetStarValue(3.5);
    }
  };

  const handleGuestRatingChange = (rating) => {
    setSelectedGuestRating(rating);

    if (rating === "4.5 & above") {
      SetRatingValue(4.5);
    } else if (rating === "4 & above") {
      SetRatingValue(4);
    } else if (rating === "3.5 & above") {
      SetRatingValue(3.5);
    } else if (rating === "3 & above") {
      SetRatingValue(3);
    }
  };

  const handleApply = () => {
    const searchParams = new URLSearchParams(location.search);
    if (startValue) searchParams.set("HotelStar", startValue);
    if (ratingValue) searchParams.set("HotelRating", ratingValue);
    if (priceRange[0]) searchParams.set("LowerPrice", priceRange[0]);
    if (priceRange[1]) searchParams.set("UpperPrice", priceRange[1]);

    navigate(`${location.pathname}?${searchParams.toString()}`);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "filters-popover" : undefined;

  return (
    <Box>
      <Button
        variant="outlined"
        size="large"
        startIcon={<FilterListIcon />}
        onClick={handleOpen}
      >
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            marginTop: "10px", // Add gap when it opens
            width: "300px",
          },
        }}
      >
        <Paper sx={{ py: 2, px: 4 }}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Star Rating</Typography>
            <Grid container spacing={1}>
              {["5-star", "4-star", "3-star"].map((star) => (
                <Grid item key={star}>
                  <Button
                    variant={
                      selectedStarRating === star ? "contained" : "outlined"
                    }
                    onClick={() => handleStarRatingChange(star)}
                  >
                    {star}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Price (per night)</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={4500}
              max={8000}
              step={100}
              marks={[
                { value: 4500, label: "₹4,500" },
                { value: 8000, label: "₹8,000" },
              ]}
            />
            <Typography variant="body2">
              ₹{priceRange[0]} - ₹{priceRange[1]}+
            </Typography>
          </Box>
          {/* <Box>
            <Typography variant="subtitle1">Guest Ratings</Typography>
            <FormGroup>
              {["4.5 & above", "4 & above", "3.5 & above", "3 & above"].map(
                (rating) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedGuestRating === rating}
                        onChange={() => handleGuestRatingChange(rating)}
                      />
                    }
                    label={rating}
                    key={rating}
                  />
                )
              )}
            </FormGroup>
          </Box> */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" onClick={handleApply}>
              Show hotels
            </Button>
          </Box>
        </Paper>
      </Popover>
    </Box>
  );
}

export default FilterCard;
