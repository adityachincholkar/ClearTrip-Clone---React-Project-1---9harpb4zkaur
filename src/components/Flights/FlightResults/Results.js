import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import HorizontalFlightSearch from "./HorizontalComponents/HorizontalFlightSearch";
import FlightsResultPage from "./FlightResultPage";
import StopsSidebarFilter from "./FlightResultSidebar/StopsSidebarFilter";
import DepartureTimeFilterSidebar from "./FlightResultSidebar/DepartureTimeFilterSidebar";
import PriceFilterSidebar from "./FlightResultSidebar/PriceFilterSidebar";
import AirlinesFliterSidebar from "./FlightResultSidebar/AirlinesFliterSidebar";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
function Results() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // Define your navigation paths based on the selected value
    switch (newValue) {
      case 0:
        navigate("/"); // Navigate to Flights
        break;
      case 1:
        navigate("/hotels"); // Navigate to Hotels
        break;
      case 2:
        navigate("/mytrips"); // Navigate to My Trips
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <Box>
        <HorizontalFlightSearch />
      </Box>
      <Stack
        direction="row"
        gap={"20px"}
        sx={{
          marginTop: 3,

          marginLeft: {
            xs: 1.5, // for extra-small screens (0px - 599px)
            sm: 2, // for small screens (600px - 899px)
            md: 7, // for medium and larger screens (900px+)
            lg: 14,
          },
          marginRight: {
            xs: 1.5, // for extra-small screens (0px - 599px)
            sm: 2, // for small screens (600px - 899px)
            md: 8, // for medium and larger screens (900px+)
            lg: 16,
          },
        }}
      >
        <Box flex={1} alignItems="end">
          <StopsSidebarFilter />
          <DepartureTimeFilterSidebar />
          <PriceFilterSidebar />
          <AirlinesFliterSidebar />
        </Box>
        <Box flex={5.8}>
          <FlightsResultPage />
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex: 1000,
            boxShadow: 3,
            display: { xs: "block", sm: "none" },
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleNavigationChange}
          >
            <BottomNavigationAction
              label="Flights"
              icon={
                <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="Hotels"
              icon={
                <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="My Trips"
              icon={
                <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
          </BottomNavigation>
        </Box>
      </Stack>
    </Box>
  );
}

export default Results;
