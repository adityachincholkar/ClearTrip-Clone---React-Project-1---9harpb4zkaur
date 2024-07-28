import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import HorizontalFlightSearch from "./HorizontalComponents/HorizontalFlightSearch";
import FlightsResultPage from "./FlightResultPage";
import StopsSidebarFilter from "./FlightResultSidebar/StopsSidebarFilter";
import DepartureTimeFilterSidebar from "./FlightResultSidebar/DepartureTimeFilterSidebar";
import PriceFilterSidebar from "./FlightResultSidebar/PriceFilterSidebar";
import AirlinesFliterSidebar from "./FlightResultSidebar/AirlinesFliterSidebar";
function Results() {
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
      </Stack>
    </Box>
  );
}

export default Results;
