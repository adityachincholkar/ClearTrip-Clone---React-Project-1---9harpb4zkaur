// import { Box, Button } from "@mui/material";
import DestinationSearch from "./DestinationSerach";
// import ArrivalSearch from "./ArrivalSearch";
// import Calendar from "./Calendar";
// import { useState } from "react";
// import AgeClass from "../../FlightInformationCard/AgeClass";
// function HorizontalFlightSearch() {
//   const [destination, setDestination] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [date, setDate] = useState("");
//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//       {/* <AgeClass /> */}

import { Box, Button } from "@mui/material";
// import DestinationSearch from "./DestinationSearch";
import ArrivalSearch from "./ArrivalSearch";
import Calendar from "./Calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HorizontalFlightSearch() {
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const url = `/results?from=${destination}&to=${arrival}&date=${encodeURIComponent(
      date
    )}&price=2500`;
    navigate(url);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {/* <AgeClass /> */}
      <Box>
        <DestinationSearch setDestination={setDestination} />
      </Box>
      <ArrivalSearch setArrival={setArrival} />
      <Box sx={{ mt: 1.5 }}>
        <Calendar setDate={setDate} />
      </Box>
      <Box sx={{ mt: 1.2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f77728",
            "&:hover": { backgroundColor: "#e66a1e" },
            height: "40px", // Adjust the height
            width: "150px", // Adjust the width
          }}
          onClick={handleSearch}
        >
          Search flights
        </Button>
      </Box>
    </Box>
  );
}

export default HorizontalFlightSearch;
