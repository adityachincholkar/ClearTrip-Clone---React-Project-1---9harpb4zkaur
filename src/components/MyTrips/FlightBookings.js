// import React from "react";
// import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

// const FlightBookings = ({ bookings }) => {
//   if (bookings.length === 0) {
//     return <Typography>No flight bookings found.</Typography>;
//   }

//   return (
//     <div>
//       {bookings.map((booking, index) => (
//         <Card key={index} variant="outlined" sx={{ mb: 2 }}>
//           <CardContent>
//             <Typography variant="h6">
//               {booking.flight.source} to {booking.flight.destination}
//             </Typography>
//             <Typography>Departure: {booking.flight.departureTime}</Typography>
//             <Typography>Arrival: {booking.flight.arrivalTime}</Typography>
//             <Typography>Duration: {booking.flight.duration} hours</Typography>
//             <Typography>Ticket Price: ₹{booking.flight.ticketPrice}</Typography>
//             <Typography>Status: {booking.status}</Typography>
//             <Typography>
//               User: {booking.user.name} ({booking.user.email})
//             </Typography>
//             <List>
//               {booking.flight.amenities.map((amenity, i) => (
//                 <ListItem key={i}>{amenity}</ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default FlightBookings;
// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   List,
//   ListItem,
//   Box,
//   Avatar,
//   Chip,
//   Divider,
// } from "@mui/material";
// import FlightIcon from "@mui/icons-material/Flight";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// // Helper functions
// const getAirlineName = (airlineId) => {
//   switch (airlineId) {
//     case "65144a1b664a43628887c45d":
//       return "SpiceJet";
//     case "65144a1b664a43628887c45f":
//       return "Air India";
//     case "65144a1b664a43628887c45e":
//       return "Air India Express";
//     case "65144a1b664a43628887c461":
//       return "Vistara";
//     case "65144a1b664a43628887c460":
//       return "IndiGo";
//     default:
//       return "";
//   }
// };

// const getAirlineLogo = (airlineId) => {
//   switch (airlineId) {
//     case "65144a1b664a43628887c45d":
//       return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/SG.svg";
//     case "65144a1b664a43628887c45f":
//       return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/AI.svg";
//     case "65144a1b664a43628887c45e":
//       return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/I5.svg";
//     case "65144a1b664a43628887c461":
//       return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/UK.svg";
//     case "65144a1b664a43628887c460":
//       return "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/svg_logos/6E.svg";
//     default:
//       return "";
//   }
// };

// const FlightBookings = ({ bookings }) => {
//   if (bookings.length === 0) {
//     return <Typography>No flight bookings found.</Typography>;
//   }

//   return (
//     <div>
//       {bookings.map((booking, index) => (
//         <Card
//           key={index}
//           variant="outlined"
//           sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}
//         >
//           <CardContent>
//             <Box display="flex" alignItems="center">
//               <Avatar
//                 alt={getAirlineName(booking.flight.airline)}
//                 src={getAirlineLogo(booking.flight.airline)}
//                 sx={{ width: 56, height: 56, mr: 2 }}
//               />
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{ fontWeight: "bold" }}
//               >
//                 {getAirlineName(booking.flight.airline)}
//               </Typography>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Box>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center", mb: 1 }}
//                 >
//                   <LocationOnIcon sx={{ mr: 1 }} /> {booking.flight.source} to{" "}
//                   {booking.flight.destination}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center", mb: 1 }}
//                 >
//                   <ScheduleIcon sx={{ mr: 1 }} /> Departure:{" "}
//                   {booking.flight.departureTime} - Arrival:{" "}
//                   {booking.flight.arrivalTime}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center", mb: 1 }}
//                 >
//                   <FlightIcon sx={{ mr: 1 }} /> Duration:{" "}
//                   {booking.flight.duration} hours
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center" }}
//                 >
//                   <MonetizationOnIcon sx={{ mr: 1 }} /> Ticket Price: ₹
//                   {booking.flight.ticketPrice}
//                 </Typography>
//               </Box>
//               <Box>
//                 <Chip
//                   icon={<EventAvailableIcon />}
//                   label={`Status: ${booking.status}`}
//                   color="primary"
//                 />
//               </Box>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Typography variant="body2" sx={{ fontWeight: "bold" }}>
//               Amenities:
//             </Typography>
//             <List>
//               {booking.flight.amenities.map((amenity, i) => (
//                 <ListItem key={i} sx={{ pl: 0 }}>
//                   {amenity}
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default FlightBookings;
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
  Avatar,
  Chip,
  Divider,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DateRangeIcon from "@mui/icons-material/DateRange";

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

const FlightBookings = ({ bookings }) => {
  if (bookings.length === 0) {
    return <Typography>No flight bookings found.</Typography>;
  }

  return (
    <div>
      {bookings.map((booking, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}
        >
          <CardContent>
            <Box display="flex" alignItems="center">
              <Avatar
                alt={getAirlineName(booking.flight.airline)}
                src={getAirlineLogo(booking.flight.airline)}
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {getAirlineName(booking.flight.airline)}
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <LocationOnIcon sx={{ mr: 1 }} /> {booking.flight.source} to{" "}
                  {booking.flight.destination}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <ScheduleIcon sx={{ mr: 1 }} /> Departure:{" "}
                  {booking.flight.departureTime} - Arrival:{" "}
                  {booking.flight.arrivalTime}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <FlightIcon sx={{ mr: 1 }} /> Duration:{" "}
                  {booking.flight.duration} hours
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <MonetizationOnIcon sx={{ mr: 1 }} /> Ticket Price: ₹
                  {booking.flight.ticketPrice}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <DateRangeIcon sx={{ mr: 1 }} /> Date:{" "}
                  {new Date(booking.start_date).toLocaleString().split(",")[0]}
                </Typography>
              </Box>
              <Box>
                <Chip
                  icon={<EventAvailableIcon />}
                  label={`Status: ${booking.status}`}
                  color="primary"
                />
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Amenities:
            </Typography>
            <List>
              {booking.flight.amenities.map((amenity, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  {amenity}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FlightBookings;
