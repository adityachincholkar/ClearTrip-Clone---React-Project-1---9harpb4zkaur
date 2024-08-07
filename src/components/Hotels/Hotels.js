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
        <Box
          flex={3.5}
          marginTop={1}
          marginRight={{ xs: 0, sm: 3 }}
          // sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Box>
            <InformationCard />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
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
      <Box sx={{ my: 5, display: { xs: "none", sm: "block" } }}>
        <SingleImageOffer />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Destinations />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Footer />
      </Box>
    </Container>
  );
}

export default Hotels;
