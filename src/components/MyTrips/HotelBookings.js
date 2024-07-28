// import React, { useEffect, useState } from "react";
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
// import HotelIcon from "@mui/icons-material/Hotel";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import HomeIcon from "@mui/icons-material/Home";

// const HotelBookings = ({ bookings }) => {
//   if (bookings.length === 0) {
//     return <Typography>No hotel bookings found.</Typography>;
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
//               <Avatar>
//                 <HotelIcon />
//               </Avatar>
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{ fontWeight: "bold", ml: 2 }}
//               >
//                 {booking.hotel.name}
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
//                   <LocationOnIcon sx={{ mr: 1 }} /> {booking.hotel.location}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center", mb: 1 }}
//                 >
//                   <DateRangeIcon sx={{ mr: 1 }} /> Start Date:{" "}
//                   {new Date(booking.start_date).toLocaleString()}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ display: "flex", alignItems: "center" }}
//                 >
//                   <DateRangeIcon sx={{ mr: 1 }} /> End Date:{" "}
//                   {new Date(booking.end_date).toLocaleString()}
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
//               Rooms:
//             </Typography>
//             <List>
//               {booking.hotel.rooms.map((room, i) => (
//                 <ListItem key={i} sx={{ pl: 0 }}>
//                   <HomeIcon sx={{ mr: 1 }} /> Room {i + 1}: {room.type} - ₹
//                   {room.price} per night
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default HotelBookings;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DateRangeIcon from "@mui/icons-material/DateRange";

const HotelBookings = ({ bookings }) => {
  if (bookings.length === 0) {
    return <Typography>No hotel bookings found.</Typography>;
  }

  const calculateAveragePrice = (rooms) => {
    const total = rooms.reduce((sum, room) => sum + room.price, 0);
    return total / rooms.length;
  };

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
              <Avatar>
                <HotelIcon />
              </Avatar>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", ml: 2 }}
              >
                {booking.hotel.name}
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
                  <LocationOnIcon sx={{ mr: 1 }} /> {booking.hotel.location}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <DateRangeIcon sx={{ mr: 1 }} /> Check-in Date:{" "}
                  {new Date(booking.start_date).toLocaleDateString()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <DateRangeIcon sx={{ mr: 1 }} /> Check-out Date:{" "}
                  {new Date(booking.end_date).toLocaleDateString()}
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
              Average Room Price: ₹{calculateAveragePrice(booking.hotel.rooms)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HotelBookings;
