import ImageCarousel from "./ThirdBlock/ImageCarousel";
import { Box, Container, Stack, Typography, styled } from "@mui/material";

import { NavLink } from "react-router-dom";
import TextCarousel from "./ThirdBlock/TextCarousel";
import InformationCard from "./InformationCard/InformationCard";
import OffersCard from "./OffersCard";
import Footer from "../Flights/Footer";
import Destinations from "../Flights/Destinations";
import SingleImageOffer from "../Flights/SingleImageOffer";
// import FlightsOffersCard from "./OffersCard";
const StyledNavLink = styled(NavLink)`
  color: initial;
  text-decoration: none; /* Optional: to remove underline */

  &:hover {
    color: #36c;
  }
`;

function Hotels() {
  return (
    <Container>
      <Stack direction="row" justifyContent={"space-between"}>
        <Box flex={3.5} marginTop={1} marginRight={3}>
          <InformationCard />
          <Box sx={{ display: { xs: { width: "680" }, sm: "block", m: 2 } }}>
            <img src="https://www.cleartrip.com/offermgmt/hotelsCommonImages/cfnr/clearchoice-home-banner.png" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <OffersCard length="2" />
          </Box>
        </Box>
        <Box flex={1.5} sx={{ display: { xs: "none", lg: "block" } }}>
          <ImageCarousel />
          <Box sx={{ display: "flex", gap: "200px", mt: 3, mb: 3 }}>
            <Typography>More offers</Typography>
            <StyledNavLink to="/offers">View all</StyledNavLink>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextCarousel />
          </Box>
        </Box>
      </Stack>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <OffersCard length="3" />
      </Box>
      {/* <Box>
        <FlightsOffersCard />
      </Box> */}
      <Box sx={{ my: 5 }}>
        <SingleImageOffer />
      </Box>
      <Box>
        <Destinations />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default Hotels;
