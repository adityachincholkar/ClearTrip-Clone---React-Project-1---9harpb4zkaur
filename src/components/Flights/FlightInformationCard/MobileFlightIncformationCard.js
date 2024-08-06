// // import * as React from "react";
// // import { useTheme } from "@mui/material/styles";
// // import Box from "@mui/material/Box";
// // import Card from "@mui/material/Card";
// // import CardContent from "@mui/material/CardContent";
// // import CardMedia from "@mui/material/CardMedia";
// // import Container from "@mui/material/Container";
// // import ArrivalSearch from "./ArrivalSearch";
// // // import DestinationSearch from "./DestinationSearch";
// // import DestinationSearch from "./DestinationSerach";
// // import Calendar from "./Calendar";
// // import Typography from "@mui/material/Typography";
// // import { useState } from "react";
// // import Button from "@mui/material/Button";
// // import { useNavigate } from "react-router-dom";
// // import AgeClass from "./AgeClass";

// // export default function MobileFlightIncformationCard() {
// //   const theme = useTheme();
// //   const [destination, setDestination] = useState("");
// //   const [arrival, setArrival] = useState("");
// //   const [date, setDate] = useState("");
// //   const [numberOfPeople, SetnumberOfPeople] = useState(1);
// //   const navigate = useNavigate();

// //   const handleSearchFlights = () => {
// //     navigate(
// //       `/results?from=${destination}&to=${arrival}&date=${date}&numberOfPeople=${numberOfPeople}`
// //     );
// //   };

// //   return (
// //     <Container>
// //       <Card
// //         sx={{
// //           display: "flex",
// //           flexDirection: { xs: "column", md: "row" },
// //           justifyContent: "space-between",
// //           background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Container
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: { xs: "center", md: "flex-start" },
// //             textAlign: { xs: "center", md: "left" },
// //             mt: { xs: 2, md: 0 },
// //           }}
// //         >
// //           <CardContent sx={{ flex: "1 0 auto", mt: 4 }}>
// //             <Typography component="div" variant="h3" className="SearchFlights">
// //               Search flights
// //             </Typography>
// //             <Typography variant="h6" component="div">
// //               Enjoy hassle free bookings with Cleartrip
// //             </Typography>
// //           </CardContent>
// //         </Container>
// //       </Card>
// //       <Container maxWidth="sm" sx={{ mt: 4 }}>
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //             gap: 2,
// //           }}
// //         >
// //           <AgeClass SetnumberOfPeople={SetnumberOfPeople} />
// //           <Box
// //             sx={{
// //               display: "flex",
// //               flexDirection: { xs: "column", md: "row" },
// //               gap: "15px",
// //               my: 2,
// //               width: "100%",
// //             }}
// //           >
// //             <DestinationSearch setDestination={setDestination} />
// //             <ArrivalSearch setArrival={setArrival} />
// //           </Box>
// //           <Box
// //             sx={{
// //               display: "flex",
// //               flexDirection: { xs: "column", md: "row" },
// //               gap: "25px",
// //               width: "100%",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <Box>
// //               <Calendar setDate={setDate} />
// //             </Box>
// //             <Box>
// //               <Button
// //                 variant="contained"
// //                 onClick={handleSearchFlights}
// //                 sx={{
// //                   backgroundColor: "#f77728",
// //                   "&:hover": { backgroundColor: "#e66a1e" },
// //                   width: { xs: "100%", md: "auto" },
// //                   mt: { xs: 2, md: 0 },
// //                 }}
// //               >
// //                 Search flights
// //               </Button>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </Container>
// //   );
// // }
// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Container from "@mui/material/Container";
// import ArrivalSearch from "./ArrivalSearch";
// import DestinationSearch from "./DestinationSerach";
// import Calendar from "./Calendar";
// import Typography from "@mui/material/Typography";
// import { useState } from "react";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import AgeClass from "./AgeClass";

// export default function MobileFlightInformationCard() {
//   const theme = useTheme();
//   const [destination, setDestination] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [date, setDate] = useState("");
//   const [numberOfPeople, SetnumberOfPeople] = useState(1);
//   const navigate = useNavigate();

//   const handleSearchFlights = () => {
//     navigate(
//       `/results?from=${destination}&to=${arrival}&date=${date}&numberOfPeople=${numberOfPeople}`
//     );
//   };

//   return (
//     <Container>
//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           justifyContent: "space-between",
//           background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
//           alignItems: "center",
//         }}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: { xs: "center", md: "flex-start" },
//             textAlign: { xs: "center", md: "left" },
//             mt: { xs: 2, md: 0 },
//           }}
//         >
//           <CardContent sx={{ flex: "1 0 auto", mt: 4 }}>
//             <Typography
//               component="div"
//               variant="h3"
//               className="SearchFlights"
//               sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
//             >
//               Search flights
//             </Typography>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
//             >
//               Enjoy hassle free bookings with Cleartrip
//             </Typography>
//           </CardContent>
//         </Container>
//       </Card>
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <AgeClass SetnumberOfPeople={SetnumberOfPeople} />
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               gap: "15px",
//               my: 2,
//               width: "100%",
//             }}
//           >
//             <DestinationSearch setDestination={setDestination} />
//             <ArrivalSearch setArrival={setArrival} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               gap: "25px",
//               width: "100%",
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{ width: { xs: "100%", md: "auto" } }}>
//               <Calendar setDate={setDate} />
//             </Box>
//             <Box sx={{ width: { xs: "100%", md: "auto" } }}>
//               <Button
//                 variant="contained"
//                 onClick={handleSearchFlights}
//                 sx={{
//                   backgroundColor: "#f77728",
//                   "&:hover": { backgroundColor: "#e66a1e" },
//                   width: { xs: "100%", md: "auto" },
//                   mt: { xs: 2, md: 0 },
//                 }}
//               >
//                 Search flights
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Container>
//   );
// }
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import ArrivalSearch from "./ArrivalSearch";
import DestinationSearch from "./DestinationSerach";
import Calendar from "./Calendar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AgeClass from "./AgeClass";

export default function MobileFlightInformationCard() {
  const theme = useTheme();
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [numberOfPeople, SetnumberOfPeople] = useState(1);
  const navigate = useNavigate();

  const handleSearchFlights = () => {
    navigate(
      `/results?from=${destination}&to=${arrival}&date=${date}&numberOfPeople=${numberOfPeople}`
    );
  };

  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(to right, #FFFEFD, #FFE6DD)",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", textAlign: "center" }}>
          <Typography
            component="div"
            variant="h5"
            className="SearchFlights"
            sx={{ fontSize: "1.5rem" }}
          >
            Search flights
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: "1rem" }}
          >
            Enjoy hassle free bookings with Cleartrip
          </Typography>
        </CardContent>
      </Card>
      <Container maxWidth="xs" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AgeClass SetnumberOfPeople={SetnumberOfPeople} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              my: 2,
              width: "100%",
            }}
          >
            <DestinationSearch setDestination={setDestination} />
            <ArrivalSearch setArrival={setArrival} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Calendar setDate={setDate} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                onClick={handleSearchFlights}
                sx={{
                  backgroundColor: "#f77728",
                  "&:hover": { backgroundColor: "#e66a1e" },
                  width: "100%",
                }}
              >
                Search flights
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
