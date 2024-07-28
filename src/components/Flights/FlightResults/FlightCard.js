import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FlightMoreDetails from "./HorizontalComponents/FlightMoreDetails";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
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

function FlightCard({ data, setFligtDetailsId, FligtDetailsId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [flightId, SetFlightId] = useState("");
  const navigate = useNavigate();
  const authContextStore = useAuthContext();
  const { isLoggedIn, handleOpen } = authContextStore;

  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  // const dateObj = new Date(date);

  const handelClick = () => {
    if (isLoggedIn) {
      saveToLocalStorage(data);
      navigate(`/flightbookingtab?date=${date}`);
    } else {
      handleOpen();
    }
  };

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setFligtDetailsId("");
    } else {
      SetFlightId(data._id);
      setIsOpen(true);
      setFligtDetailsId(data.flightID);
    }
  };

  const saveToLocalStorage = (flightData) => {
    const existingData = [];
    existingData.push(flightData);
    localStorage.setItem("flightData", JSON.stringify(existingData));
  };

  const airlineName = getAirlineName(data.airline);
  const airlineLogo = getAirlineLogo(data.airline);

  return (
    <FlightCardContainer>
      <Box>
        <AirlineInfo>
          <AirlineLogo src={airlineLogo} alt="airline logo" />
          <Box>
            <Typography variant="h6">{airlineName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {data.flightID}
            </Typography>
          </Box>
        </AirlineInfo>
        <Box>
          <Button
            variant="text"
            sx={{ ml: 2, mt: 2, textTransform: "none", fontSize: "0.875rem" }}
            onClick={handleClick}
          >
            {FligtDetailsId === data.flightID && isOpen
              ? "Hide details"
              : "Flight details"}
          </Button>
        </Box>
      </Box>
      <FlightDetails>
        <Box>
          <Typography variant="h6">{data.departureTime}</Typography>
        </Box>
        <FlightDuration>
          <Typography variant="body2" color="textSecondary">
            {data.duration} hours
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary">
            {data.stops === 0 ? "non-stop" : `${data.stops} stops`}
          </Typography>
        </FlightDuration>
        <Box>
          <Typography variant="h6">{data.arrivalTime}</Typography>
        </Box>
      </FlightDetails>
      <FlightPrice>
        <Typography variant="h6">₹{data.ticketPrice}</Typography>
        <BookButton
          variant="contained"
          onClick={() => handelClick()}
          sx={{ mb: 2 }}
        >
          Book
        </BookButton>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ color: "green" }}
        >
          Get ₹{(data.ticketPrice * 0.05).toFixed(2)} off with CTCOM
        </Typography>
      </FlightPrice>
      <Box>
        {FligtDetailsId === data.flightID && isOpen && (
          <FlightMoreDetails flightId={flightId} />
        )}
      </Box>
    </FlightCardContainer>
  );
}

export default FlightCard;
