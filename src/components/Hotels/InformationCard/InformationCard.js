import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import LocationInput from "./LocationInput";
import Calender from "./Calender";
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

  const card = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ m: 2 }}>
          <LocationInput setSelectedLocation={setSelectedLocation} />
        </Box>
        <Box sx={{ display: "flex", gap: "20px", m: 2 }}>
          <Calender
            setCheckIndate={setCheckIndate}
            setCheckOutdate={setCheckOutdate}
          />
          <AgeClass />
        </Box>

        <Box
          sx={{
            mx: 3,
            mr: 8,
            mt: 5,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
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
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", mt: 4 }}>
            <Typography component="div" variant="h3" className="SearchFlights">
              Search hotels
            </Typography>
            <Typography variant="h6" component="div">
              Enjoy hassle-free bookings with Cleartrip
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ maxWidth: 130 }}
          image="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_116,h_120,dpr_2/offermgmt/images/CLEAR_TRIP_MS_DHONI_DESKTOP.png"
          alt="Live from space album cover"
        />
      </Card>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
