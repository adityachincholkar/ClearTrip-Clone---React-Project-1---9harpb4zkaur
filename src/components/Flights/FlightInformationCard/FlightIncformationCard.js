import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import "../../styles/FlightInformationCard.css";

import Container from "@mui/material/Container";

import ArrivalSearch from "./ArrivalSearch";
import DestinationSearch from "./DestinationSerach";
import Calendar from "./Calendar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button"; // Ensure correct import of Button component
import { useNavigate } from "react-router-dom";
import AgeClass from "./AgeClass";

export default function MediaControlCard() {
  const theme = useTheme();
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [numberOfPeople, SetnumberOfPeople] = useState(1);
  const navigate = useNavigate();
  console.log(arrival, " arrval", destination, date);

  const handleSearchFlights = () => {
    // Navigate to the 'results' page with query parameters
    navigate(
      `/results?from=${destination}&to=${arrival}&date=${date}&numberOfPeople=${numberOfPeople}`
    );
  };

  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", mt: 4 }}>
            <Typography component="div" variant="h3" className="SearchFlights">
              Search flights
            </Typography>
            <Typography variant="h6" component="div">
              Enjoy hassle free bookings with Cleartrip
            </Typography>
          </CardContent>
        </Container>

        <CardMedia
          component="img"
          sx={{ width: 130 }}
          image="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_116,h_120,dpr_2/offermgmt/images/CLEAR_TRIP_MS_DHONI_DESKTOP.png"
          alt="Live from space album cover"
        />
      </Card>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AgeClass SetnumberOfPeople={SetnumberOfPeople} />
          <Box sx={{ display: "flex", gap: "15px", my: 2 }}>
            <DestinationSearch setDestination={setDestination} />
            <ArrivalSearch setArrival={setArrival} />
          </Box>
          <Box sx={{ display: "flex", gap: "25px" }}>
            <Box>
              <Calendar setDate={setDate} />
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={handleSearchFlights} // Correctly assign onClick handler
                sx={{
                  backgroundColor: "#f77728",
                  "&:hover": { backgroundColor: "#e66a1e" },
                }}
              >
                Search flights
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
