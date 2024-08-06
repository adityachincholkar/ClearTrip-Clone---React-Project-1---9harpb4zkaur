import * as React from "react";
// import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Stack, Typography } from "@mui/material";
import FlightIncformationCard from "./FlightInformationCard/FlightIncformationCard";
import ThirdBlockOffers from "./ThirdBlock/ThirdBlockOffers";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ThirdBlockMoreOffers from "./ThirdBlock/ThirdBlockMoreOffers";
import FlightsOffersCard from "./FlightsOffersCard";
import Destinations from "./Destinations";
import SingleImageOffer from "./SingleImageOffer";
import Footer from "./Footer";
import MobileFlightIncformationCard from "./FlightInformationCard/MobileFlightIncformationCard";

const StyledNavLink = styled(NavLink)`
  color: initial;
  text-decoration: none; /* Optional: to remove underline */

  &:hover {
    color: blue;
  }
`;

function Flights() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Stack direction="row" justifyContent={"space-between"}>
        <Box
          flex={3.5}
          marginTop={1}
          marginRight={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <FlightIncformationCard />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <MobileFlightIncformationCard />
        </Box>
        <Box flex={1.5} sx={{ display: { xs: "none", sm: "block" } }}>
          <ThirdBlockOffers />
          <Box sx={{ display: "flex", gap: "200px", mt: 3, mb: 3 }}>
            <Typography>More offers</Typography>
            <StyledNavLink to="/offers">View all</StyledNavLink>
          </Box>
          <Box sx={{ mb: 3 }}>
            <ThirdBlockMoreOffers />
          </Box>
        </Box>
      </Stack>

      <Box sx={{ display: { xs: "block", sm: "block" } }}>
        <FlightsOffersCard />
      </Box>
      <Box sx={{ my: 5, display: { xs: "none", sm: "block" } }}>
        <SingleImageOffer />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Destinations />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Footer />
      </Box>

      {/* <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box> */}
    </div>
  );
}

export default Flights;
