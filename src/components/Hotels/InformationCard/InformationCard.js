// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import LocationInput from "./LocationInput";
// import Calender from "./Calender";
// import AgeClass from "./AgeClass";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function InformationCard() {
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [checkIndate, setCheckIndate] = useState("");
//   const [checkOutdate, setCheckOutdate] = useState("");

//   const navigate = useNavigate();
//   const HandelHotelSearch = () => {
//     // const Location = selectedLocation.split(",")[0];
//     if (!selectedLocation) alert("Please Fill the Required details");
//     else
//       navigate(
//         `hotelsearchresults?hotelLocation=${selectedLocation}&CheckIndate=${checkIndate}&CheckOutdate=${checkOutdate}`
//       );
//   };

//   const card = (
//     <React.Fragment>
//       <CardContent>
//         <Box sx={{ m: 2 }}>
//           <LocationInput setSelectedLocation={setSelectedLocation} />
//         </Box>
//         <Box sx={{ display: "flex", gap: "20px", m: 2 }}>
//           <Calender
//             setCheckIndate={setCheckIndate}
//             setCheckOutdate={setCheckOutdate}
//           />
//           <AgeClass />
//         </Box>

//         <Box
//           sx={{
//             mx: 3,
//             mr: 8,
//             mt: 5,
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Box>
//             <Button
//               size="large"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ff4f17",
//                 "&:hover": { backgroundColor: "#d64315" },
//               }}
//               onClick={() => HandelHotelSearch()}
//             >
//               Search Hotels
//             </Button>
//           </Box>
//         </Box>
//       </CardContent>
//     </React.Fragment>
//   );

//   return (
//     <Box>
//       <Card
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
//         }}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <CardContent sx={{ flex: "1 0 auto", mt: 4 }}>
//             <Typography component="div" variant="h3" className="SearchFlights">
//               Search hotels
//             </Typography>
//             <Typography variant="h6" component="div">
//               Enjoy hassle-free bookings with Cleartrip
//             </Typography>
//           </CardContent>
//         </Box>
//         <Box sx={{ display: { xs: "none", sm: "block" } }}>
//           <CardMedia
//             component="img"
//             sx={{ maxWidth: 130 }}
//             image="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_116,h_120,dpr_2/offermgmt/images/CLEAR_TRIP_MS_DHONI_DESKTOP.png"
//             alt="Live from space album cover"
//           />
//         </Box>
//       </Card>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import LocationInput from "./LocationInput";
// import Calender from "./Calender";
// import AgeClass from "./AgeClass";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function InformationCard() {
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [checkIndate, setCheckIndate] = useState("");
//   const [checkOutdate, setCheckOutdate] = useState("");

//   const navigate = useNavigate();
//   const HandelHotelSearch = () => {
//     if (!selectedLocation) alert("Please Fill the Required details");
//     else
//       navigate(
//         `hotelsearchresults?hotelLocation=${selectedLocation}&CheckIndate=${checkIndate}&CheckOutdate=${checkOutdate}`
//       );
//   };

//   const card = (
//     <React.Fragment>
//       <CardContent>
//         <Box sx={{ m: { xs: 1, sm: 2 } }}>
//           <LocationInput setSelectedLocation={setSelectedLocation} />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             gap: { xs: "10px", sm: "20px" },
//             m: { xs: 1, sm: 2 },
//           }}
//         >
//           <Calender
//             setCheckIndate={setCheckIndate}
//             setCheckOutdate={setCheckOutdate}
//           />
//           <AgeClass />
//         </Box>

//         <Box
//           sx={{
//             mx: { xs: 1, sm: 3 },
//             mr: { xs: 2, sm: 8 },
//             mt: { xs: 2, sm: 5 },
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Box>
//             <Button
//               size="large"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ff4f17",
//                 "&:hover": { backgroundColor: "#d64315" },
//               }}
//               onClick={HandelHotelSearch}
//             >
//               Search Hotels
//             </Button>
//           </Box>
//         </Box>
//       </CardContent>
//     </React.Fragment>
//   );

//   return (
//     <Box>
//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           justifyContent: "space-between",
//           background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
//           alignItems: { xs: "center", sm: "flex-start" },
//           p: { xs: 0, sm: 0 },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: { xs: "center", sm: "flex-start" },
//           }}
//         >
//           <CardContent
//             sx={{
//               flex: "1 0 auto",
//               mt: { xs: 2, sm: 4 },
//               textAlign: { xs: "center", sm: "left" },
//             }}
//           >
//             <Typography
//               component="div"
//               variant={{ xs: "h5", sm: "h4" }}
//               className="SearchFlights"
//             >
//               Search hotels
//             </Typography>
//             <Typography variant={{ xs: "subtitle1", sm: "h4" }} component="div">
//               Enjoy hassle-free bookings with Cleartrip
//             </Typography>
//           </CardContent>
//         </Box>
//         <Box sx={{ display: { xs: "none", sm: "block" } }}>
//           <CardMedia
//             component="img"
//             sx={{ maxWidth: 130 }}
//             image="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_116,h_120,dpr_2/offermgmt/images/CLEAR_TRIP_MS_DHONI_DESKTOP.png"
//             alt="Live from space album cover"
//           />
//         </Box>
//       </Card>
//       <Card variant="outlined" sx={{ mt: { xs: 2, sm: 3 } }}>
//         {card}
//       </Card>
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import LocationInput from "./LocationInput";
import Calender from "./Calender";
import AgeClass from "./AgeClass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InformationCard() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkIndate, setCheckIndate] = useState("");
  const [checkOutdate, setCheckOutdate] = useState("");

  const navigate = useNavigate();
  const HandelHotelSearch = () => {
    if (!selectedLocation) alert("Please Fill the Required details");
    else
      navigate(
        `hotelsearchresults?hotelLocation=${selectedLocation}&CheckIndate=${checkIndate}&CheckOutdate=${checkOutdate}`
      );
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ m: { xs: 1, sm: 2 } }}>
          <LocationInput setSelectedLocation={setSelectedLocation} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "10px", sm: "20px" },
            m: { xs: 1, sm: 2 },
          }}
        >
          <Calender
            setCheckIndate={setCheckIndate}
            setCheckOutdate={setCheckOutdate}
          />
          <AgeClass />
        </Box>

        <Box
          sx={{
            mx: { xs: 1, sm: 3 },
            mr: { xs: 2, sm: 8 },
            mt: { xs: 2, sm: 5 },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box>
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#ff4f17",
                "&:hover": { backgroundColor: "#d64315" },
              }}
              onClick={HandelHotelSearch}
            >
              Search Hotels
            </Button>
          </Box>
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
          alignItems: { xs: "center", sm: "flex-start" },
          p: { xs: 2, sm: 2 },
          width: { xs: "100%", sm: "auto" },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", sm: "auto" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              mt: { xs: 2, sm: 4 },
            }}
          >
            <Typography
              component="div"
              variant="h5"
              className="SearchFlights"
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
            >
              Search hotels
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
            >
              Enjoy hassle-free bookings with Cleartrip
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 130 }}
            image="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_116,h_120,dpr_2/offermgmt/images/CLEAR_TRIP_MS_DHONI_DESKTOP.png"
            alt="Live from space album cover"
          />
        </Box>
      </Card>
      <Card variant="outlined" sx={{ mt: { xs: 2, sm: 3 } }}>
        {card}
      </Card>
    </Box>
  );
}
