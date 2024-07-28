// import React, { useState, useEffect } from "react";
// import { Accordion, Form } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
// import "../../../../styles/PriceFilterSidebar.css";

// function PriceFilterSidebar() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialSliderValue = parseInt(searchParams.get("price"), 10) || 2500;
//   const [sliderValue, setSliderValue] = useState(initialSliderValue);

//   useEffect(() => {
//     if (!searchParams.get("price")) {
//       setSliderValue(2500);
//       updateURLWithPrice(2500);
//     }
//   }, [searchParams]);

//   const updateURLWithPrice = (value) => {
//     if (value) {
//       searchParams.set("price", value);
//     } else {
//       searchParams.delete("price");
//     }
//     setSearchParams(searchParams);
//   };

//   const handleSliderChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     setSliderValue(value);
//     updateURLWithPrice(value);
//   };

//   return (
//     <div className="price-range">
//       <Accordion defaultActiveKey="0" flush>
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>Price Range</Accordion.Header>
//           <Accordion.Body>
//             <Form>
//               <Form.Group controlId="priceRange">
//                 <Form.Label className="price-label">
//                   Up to ₹{sliderValue}
//                 </Form.Label>
//                 <Form.Range
//                   min={2100}
//                   max={2500}
//                   step={50}
//                   value={sliderValue}
//                   onChange={handleSliderChange}
//                   className="custom-slider"
//                   style={{
//                     "--value": (sliderValue - 2100) / (2500 - 2100),
//                   }}
//                 />
//                 <div className="slider-labels">
//                   <span className="min-price">₹2100</span>
//                   <span className="max-price">₹2500</span>
//                 </div>
//               </Form.Group>
//             </Form>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </div>
//   );
// }

// export default PriceFilterSidebar;

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function PriceFilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSliderValue = parseInt(searchParams.get("price"), 10) || 2500;
  const [sliderValue, setSliderValue] = useState(initialSliderValue);

  useEffect(() => {
    if (!searchParams.get("price")) {
      setSliderValue(2500);
      updateURLWithPrice(2500);
    }
  }, [searchParams]);

  const updateURLWithPrice = (value) => {
    if (value) {
      searchParams.set("price", value);
    } else {
      searchParams.delete("price");
    }
    setSearchParams(searchParams);
  };

  const handleSliderChange = (e, value) => {
    setSliderValue(value);
    updateURLWithPrice(value);
  };

  return (
    <Box className="price-range">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "&:hover": {
              ".MuiSvgIcon-root": {
                color: "lightblue",
              },
            },
          }}
        >
          <Typography variant="h6" sx={{ margin: 0 }}>
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%" }}>
            <Typography className="price-label" gutterBottom>
              Up to ₹{sliderValue}
            </Typography>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              min={2100}
              max={2500}
              step={50}
              valueLabelDisplay="auto"
              sx={{
                "& .MuiSlider-thumb": {
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "0 0 0 8px rgba(0, 0, 0, 0.16)",
                  },
                },
              }}
            />
            <Box
              className="slider-labels"
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography className="min-price">₹2100</Typography>
              <Typography className="max-price">₹2500</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default PriceFilterSidebar;
