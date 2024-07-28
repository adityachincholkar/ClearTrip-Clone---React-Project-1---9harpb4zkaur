import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import LocationInput from "./LocationInput";
import Calendar from "./Calender";
import AgeClass from "./AgeClass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InformationCard() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkIndate, setCheckIndate] = useState("");
  const [checkOutdate, setCheckOutdate] = useState("");
  const navigate = useNavigate();
  const HandelHotelSearch = () => {
    // const Location = selectedLocation.split(",")[0];
    if (!selectedLocation) alert("Please Fill the Required details");
    else
      navigate(
        `hotelsearchresults?hotelLocation=${selectedLocation}&CheckIndate=${checkIndate}&CheckOutdate=${checkOutdate}`
      );
  };

  return (
    <Box sx={{ display: "block" }}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box sx={{ mt: 1 }}>
          <LocationInput setSelectedLocation={setSelectedLocation} />
        </Box>
        <Calendar
          setCheckIndate={setCheckIndate}
          setCheckOutdate={setCheckOutdate}
        />
        <AgeClass />
        <Box>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#ff4f17",
              "&:hover": { backgroundColor: "#d64315" },
            }}
            onClick={() => HandelHotelSearch()}
          >
            Search Hotels
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
