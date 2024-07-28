// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, Button, Grid } from "@mui/material";

// function FlightsOffersCard() {
//   const [offers, setOffers] = useState([]);

//   useEffect(() => {
//     const fetchMoreOffers = async () => {
//       const projectID = "9harpb4zkaur";
//       const url = `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"HOTELS"}&limit=3`;

//       try {
//         const response = await fetch(url, {
//           headers: {
//             projectID,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("6 cards:", data.data.offers); // Log fetched offers
//         setOffers(data.data.offers); // Assuming data.data.offers is the correct path
//       } catch (error) {
//         console.error("Error fetching flight offers:", error.message);
//       }
//     };

//     fetchMoreOffers();
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <Box sx={{ flexGrow: 1, padding: 2 }}>
//       <Grid container spacing={1}>
//         {offers.map((offer) => (
//           <Grid item xs={12} sm={6} md={4} key={offer.id}>
//             <Card sx={{ width: 320, height: 180, position: "relative" }}>
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={offer.heroUrl}
//                 alt="Offer Image"
//                 sx={{ width: 320 }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   bottom: 0,
//                   width: "60%",
//                   background:
//                     "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
//                   color: "white",
//                   padding: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography
//                   gutterBottom
//                   variant="h6"
//                   component="div"
//                   sx={{
//                     color: "wheat",
//                     fontWeight: "600",
//                     fontFamily:
//                       "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, Arial, sans-serif;",
//                   }}
//                 >
//                   {offer.lobDisplayText}
//                 </Typography>
//                 <Typography
//                   gutterBottom
//                   variant="body1"
//                   component="div"
//                   sx={{ fontWeight: "400" }}
//                 >
//                   {offer.pTl}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="white"
//                   sx={{ fontWeight: "300" }}
//                 >
//                   {offer.pTx}
//                 </Typography>
//                 <Button
//                   size="small"
//                   color="primary"
//                   sx={{
//                     mt: 2,
//                     background: "rgba(255, 255, 255, 0.7)",
//                     color: "black",
//                   }}
//                 >
//                   {offer.cardCTAText}
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default FlightsOffersCard;
// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

// function FlightsOffersCard() {
//   const [offers, setOffers] = useState([]);
//   const theme = useTheme();
//   const isSmUp = useMediaQuery(theme.breakpoints.up("sm")); // Screens larger than 'small' breakpoint
//   const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Screens larger than 'medium' breakpoint

//   useEffect(() => {
//     const fetchMoreOffers = async () => {
//       const projectID = "9harpb4zkaur";
//       const url = `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"HOTELS"}&limit=3`;

//       try {
//         const response = await fetch(url, {
//           headers: {
//             projectID,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("6 cards:", data.data.offers); // Log fetched offers
//         setOffers(data.data.offers); // Assuming data.data.offers is the correct path
//       } catch (error) {
//         console.error("Error fetching flight offers:", error.message);
//       }
//     };

//     fetchMoreOffers();
//   }, []); // Empty dependency array ensures this runs only once

//   // Determine how many cards to display based on screen size
//   const displayedOffers = isMdUp
//     ? offers
//     : isSmUp
//     ? offers.slice(0, 2)
//     : offers.slice(0, 1);

//   return (
//     <Box sx={{ flexGrow: 1, padding: 2 }}>
//       <Grid container spacing={2}>
//         {displayedOffers.map((offer) => (
//           <Grid item xs={12} sm={6} md={4} key={offer.id}>
//             <Card sx={{ width: "100%", height: 180, position: "relative" }}>
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={offer.heroUrl}
//                 alt="Offer Image"
//                 sx={{ maxwidth: "100%" }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   bottom: 0,
//                   width: "60%",
//                   background:
//                     "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
//                   color: "white",
//                   padding: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography
//                   gutterBottom
//                   variant="h6"
//                   component="div"
//                   sx={{
//                     color: "wheat",
//                     fontWeight: "600",
//                     fontFamily:
//                       "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, Arial, sans-serif;",
//                   }}
//                 >
//                   {offer.lobDisplayText}
//                 </Typography>
//                 <Typography
//                   gutterBottom
//                   variant="body1"
//                   component="div"
//                   sx={{ fontWeight: "400" }}
//                 >
//                   {offer.pTl}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="white"
//                   sx={{ fontWeight: "300" }}
//                 >
//                   {offer.pTx}
//                 </Typography>
//                 <Button
//                   size="small"
//                   color="primary"
//                   sx={{
//                     mt: 2,
//                     background: "rgba(255, 255, 255, 0.7)",
//                     color: "black",
//                   }}
//                 >
//                   {offer.cardCTAText}
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default FlightsOffersCard;
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

function FlightsOffersCard() {
  const [offers, setOffers] = useState([]);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const fetchMoreOffers = async () => {
      const projectID = "9harpb4zkaur";
      const url = `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"HOTELS"}&limit=3`;

      try {
        const response = await fetch(url, {
          headers: {
            projectID,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("6 cards:", data.data.offers);
        setOffers(data.data.offers);
      } catch (error) {
        console.error("Error fetching flight offers:", error.message);
      }
    };

    fetchMoreOffers();
  }, []);

  const displayedOffers = isMdUp
    ? offers
    : isSmUp
    ? offers.slice(0, 2)
    : offers.slice(0, 1);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {displayedOffers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.id}>
            <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
              <CardMedia
                component="img"
                height="180"
                image={offer.heroUrl}
                alt="Offer Image"
                sx={{ width: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))",
                  color: "white",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    color: "wheat",
                    fontWeight: "600",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, Arial, sans-serif",
                  }}
                >
                  {offer.lobDisplayText}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ fontWeight: "400" }}
                >
                  {offer.pTl}
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: "300" }}
                >
                  {offer.pTx}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{
                    mt: 2,
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                  }}
                >
                  {offer.cardCTAText}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FlightsOffersCard;
