import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FlightMoreDetails from "../FlightResults/HorizontalComponents/FlightMoreDetails";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthorisationContext";

const FlightCardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  border: "1px solid #ddd",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  "& > :last-child": {
    flexBasis: "100%",
    marginTop: theme.spacing(2),
  },
}));

const AirlineInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const FlightDetails = styled(CardContent)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const FlightDuration = styled(Box)({
  textAlign: "center",
});

const FlightPrice = styled(CardContent)({
  textAlign: "right",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const AirlineLogo = styled("img")({
  width: "50px",
  height: "auto",
});

const BookButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: "#f77728",
  "&:hover": { backgroundColor: "#e66a1e" },
  height: "40px",
  width: "100px",
}));

const getAirlineName = (airlineId) => {
  switch (airlineId) {
    case "65144a1b664a43628887c45d":
      return "SpiceJet";
    case "65144a1b664a43628887c45f":
      return "Air India";
    case "65144a1b664a43628887c45e":
      return "Air India Express";
    case "65144a1b664a43628887c461":
      return "Vistara";
    case "65144a1b664a43628887c460":
      return "IndiGo";
    default:
      return "";
  }
};

const getAirlineLogo = (airlineId) => {
  switch (airlineId) {
    case "65144a1b664a43628887c45d":
      return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/SG.svg";
    case "65144a1b664a43628887c45f":
      return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/AI.svg";
    case "65144a1b664a43628887c45e":
      return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/I5.svg";
    case "65144a1b664a43628887c461":
      return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/UK.svg";
    case "65144a1b664a43628887c460":
      return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/6E.svg";
    default:
      return "";
  }
};

function SelectedFlightCard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const authContextStore = useAuthContext();
  const { isLoggedIn, handleOpen } = authContextStore;
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("flightData")) || [];
    if (data.length > 0) {
      setFlightData(data[0]); // Assume only the latest flight data is stored
    }
  }, []);

  const handelClick = () => {
    if (isLoggedIn) {
      navigate("/flightbookingtab");
    } else {
      handleOpen();
    }
  };

  if (!flightData) {
    return <Typography>No selected flight data available</Typography>;
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const airlineName = getAirlineName(flightData.airline);
  const airlineLogo = getAirlineLogo(flightData.airline);

  return (
    <FlightCardContainer>
      <Box>
        <AirlineInfo>
          <AirlineLogo src={airlineLogo} alt="airline logo" />
          <Box>
            <Typography variant="h6">{airlineName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {flightData.flightID}
            </Typography>
          </Box>
        </AirlineInfo>
        <Box>
          <Button
            variant="text"
            sx={{ ml: 2, mt: 2, textTransform: "none", fontSize: "0.875rem" }}
            onClick={handleClick}
          >
            {isOpen ? "Hide details" : "Flight details"}
          </Button>
        </Box>
      </Box>
      <FlightDetails>
        <Box>
          <Typography variant="h6">{flightData.departureTime}</Typography>
        </Box>
        <FlightDuration>
          <Typography variant="body2" color="textSecondary">
            {flightData.duration} hours
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary">
            {flightData.stops === 0 ? "non-stop" : `${flightData.stops} stops`}
          </Typography>
        </FlightDuration>
        <Box>
          <Typography variant="h6">{flightData.arrivalTime}</Typography>
        </Box>
      </FlightDetails>
      <FlightPrice>
        <Typography variant="h6">₹{flightData.ticketPrice}</Typography>
        <BookButton variant="contained" onClick={() => handelClick()}>
          Book
        </BookButton>
        <Typography variant="body2" color="textSecondary">
          Get ₹{(flightData.ticketPrice * 0.05).toFixed(2)} off with CTCOM
        </Typography>
      </FlightPrice>
      <Box>{isOpen && <FlightMoreDetails flightId={flightData._id} />}</Box>
    </FlightCardContainer>
  );
}

export default SelectedFlightCard;
