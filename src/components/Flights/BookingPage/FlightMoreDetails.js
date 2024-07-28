// import React, { useEffect, useState } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { Card, Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// const FlightCardContainer = styled(Card)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: theme.spacing(2),
//   margin: theme.spacing(2, 0),
//   border: "1px solid #ddd",
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   backgroundColor: "#fff",
// }));

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

// const FlightMoreDetails = ({ flightId }) => {
//   const [flightDetails, setFlightDetails] = useState(null);
//   const [destinationAirport, setDestinationAirport] = useState("");
//   const location = useLocation();
//   const [searchParams] = useSearchParams();
//   const [arrivalAirport, setArrivalAirport] = useState("");
//   const from = searchParams.get("from");
//   const to = searchParams.get("to");
// //   const date = searchParams.get("date");

// //   const parseDate = (dateStr) => {
// //     const parts = dateStr.match(/\d+/g);
// //     if (parts) {
// //       const [day, month, year] = parts.map(Number);
// //       return new Date(year, month - 1, day);
// //     }
// //     return new Date();
// //   };

// //   const formattedDate = (date) => {
// //     return `${date.getDate().toString().padStart(2, "0")}/${(
// //       date.getMonth() + 1
// //     )
// //       .toString()
// //       .padStart(2, "0")}/${date.getFullYear()}`;
// //   };

//   useEffect(() => {
//     const fetchAirport = async (iataCode, setAirport) => {
//       const projectID = "9harpb4zkaur";
//       const url = `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"iata_code":"${iataCode}"}`;

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
//         setAirport(data.data.airports[0].name);
//       } catch (error) {
//         console.error("Error Fetching Airport details", error.message);
//       }
//     };

//     if (from) {
//       fetchAirport(from, setDestinationAirport);
//     }
//     if (to) {
//       fetchAirport(to, setArrivalAirport);
//     }
//   }, [from, to]);

//   useEffect(() => {
//     const fetchMoreOffers = async () => {
//       const projectID = "9harpb4zkaur";
//       const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId}`;

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
//         setFlightDetails(data.data);
//       } catch (error) {
//         console.error("Error Fetching More Flight details", error.message);
//       }
//     };

//     fetchMoreOffers();
//   }, [flightId]);

//   if (!flightDetails) {
//     return <Typography>Loading...</Typography>;
//   }

//   const airlineName = getAirlineName(flightDetails.airline);
//   const airlineLogo = getAirlineLogo(flightDetails.airline);
// //   const flightDate = parseDate(date);

// //   const arrivalDate = new Date(flightDate);
//   const totalHours =
//     parseInt(flightDetails.departureTime) + parseInt(flightDetails.duration);
// //   if (totalHours >= 24) {
// //     arrivalDate.setDate(flightDate.getDate() + 1);
//   }

//   return (
//     <FlightCardContainer>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <img
//           src={airlineLogo}
//           alt={airlineName}
//           style={{ width: 50, height: 50 }}
//         />
//         <Typography variant="body1">{airlineName}</Typography>
//         <Typography variant="body2">{flightDetails.flightID}</Typography>
//         <Typography variant="body2">Economy</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <Typography variant="h6">
//           {flightDetails.source} {flightDetails.departureTime}
//         </Typography>

//         <Typography variant="body2">{destinationAirport}</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <AccessTimeIcon sx={{ fontSize: 40 }} />
//         <Typography variant="body1">{flightDetails.duration} hours</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <Typography variant="h6">
//           {flightDetails.arrivalTime} {flightDetails.destination}
//         </Typography>

//         <Typography variant="body2">{arrivalAirport}</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         {flightDetails.amenities &&
//           flightDetails.amenities.map((amenity, index) => (
//             <Typography key={index} variant="body2">
//               {amenity}
//             </Typography>
//           ))}
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//           marginTop: 2,
//           width: "100%",
//         }}
//       >
//         <Typography variant="body2">PARTIALLY REFUNDABLE</Typography>
//         <Typography variant="body2">Know more</Typography>
//       </Box>
//     </FlightCardContainer>
//   );
// };

// export default FlightMoreDetails;
// import React, { useEffect, useState } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { Card, Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// const FlightCardContainer = styled(Card)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: theme.spacing(2),
//   margin: theme.spacing(2, 0),
//   border: "1px solid #ddd",
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   backgroundColor: "#fff",
// }));

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

// const FlightMoreDetails = () => {
//   const [flightDetails, setFlightDetails] = useState(null);
//   const [destinationAirport, setDestinationAirport] = useState("");
//   const location = useLocation();
//   const [searchParams] = useSearchParams();
//   const [arrivalAirport, setArrivalAirport] = useState("");
//   const flightData = JSON.parse(localStorage.getItem("flightData"));

//   const from = flightData[0].source;
//   const to = flightData[0].destination;

//   const fetchAirport = async (iataCode, setAirport) => {
//     const projectID = "9harpb4zkaur";
//     const url = `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"iata_code":"${iataCode}"}`;

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAirport(data.data.airports[0].name);
//     } catch (error) {
//       console.error("Error Fetching Airport details", error.message);
//     }
//   };
//   useEffect(() => {
//     fetchAirport(flightData[0].source, setDestinationAirport);
//     // console.log();

//     fetchAirport(flightData[0].destination, setArrivalAirport);
//   }, [flightData]);

//   const fetchMoreOffers = async () => {
//     const projectID = "9harpb4zkaur";
//     // const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/`;

//     console.log(flightData);
//     const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightData[0]._id}`;

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setFlightDetails(data.data);
//     } catch (error) {
//       console.error("Error Fetching More Flight details", error.message);
//     }
//   };
//   useEffect(() => {
//     // console.log(flightId);

//     fetchMoreOffers();
//   }, [flightData]);

//   if (!flightDetails) {
//     return <Typography>Loading...</Typography>;
//   }

//   const airlineName = getAirlineName(flightDetails.airline);
//   const airlineLogo = getAirlineLogo(flightDetails.airline);
//   const totalHours =
//     parseInt(flightData.departureTime) + parseInt(flightData.duration);

//   return (
//     <FlightCardContainer>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <img
//           src={airlineLogo}
//           alt={airlineName}
//           style={{ width: 50, height: 50 }}
//         />
//         <Typography variant="body1">{airlineName}</Typography>
//         <Typography variant="body2">{flightDetails.flightID}</Typography>
//         <Typography variant="body2">Economy</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <Typography variant="h6">
//           {flightDetails.source} {flightDetails.departureTime}
//         </Typography>
//         <Typography variant="body2">{destinationAirport}</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <AccessTimeIcon sx={{ fontSize: 40 }} />
//         <Typography variant="body1">{flightDetails.duration} hours</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         <Typography variant="h6">
//           {flightDetails.arrivalTime} {flightDetails.destination}
//         </Typography>
//         <Typography variant="body2">{arrivalAirport}</Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginRight: 2,
//         }}
//       >
//         {flightDetails.amenities &&
//           flightDetails.amenities.map((amenity, index) => (
//             <Typography key={index} variant="body2">
//               {amenity}
//             </Typography>
//           ))}
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//           marginTop: 2,
//           width: "100%",
//         }}
//       >
//         <Typography variant="body2" sx={{ color: "brown" }}>
//           PARTIALLY REFUNDABLE
//         </Typography>
//       </Box>
//     </FlightCardContainer>
//   );
// };

// export default FlightMoreDetails;

import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FlightCardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  border: "1px solid #ddd",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
}));

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

const FlightMoreDetails = () => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState("");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [arrivalAirport, setArrivalAirport] = useState("");
  const flightData = JSON.parse(localStorage.getItem("flightData"));

  const from = flightData[0].source;
  const to = flightData[0].destination;

  const fetchAirport = async (iataCode, setAirport) => {
    const projectID = "9harpb4zkaur";
    const url = `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"iata_code":"${iataCode}"}`;

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
      setAirport(data.data.airports[0].name);
    } catch (error) {
      console.error("Error Fetching Airport details", error.message);
    }
  };
  useEffect(() => {
    const flightData = JSON.parse(localStorage.getItem("flightData"));

    fetchAirport(flightData[0].source, setDestinationAirport);
    // console.log();

    fetchAirport(flightData[0].destination, setArrivalAirport);
  }, []);

  const fetchMoreOffers = async () => {
    const projectID = "9harpb4zkaur";
    // const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/`;

    // console.log(flightData);
    const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightData[0]._id}`;

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
      setFlightDetails(data.data);
    } catch (error) {
      console.error("Error Fetching More Flight details", error.message);
    }
  };
  useEffect(() => {
    // console.log(flightId);

    fetchMoreOffers();
  }, []);

  if (!flightDetails) {
    return <Typography>Loading...</Typography>;
  }

  const airlineName = getAirlineName(flightDetails.airline);
  const airlineLogo = getAirlineLogo(flightDetails.airline);
  const totalHours =
    parseInt(flightData.departureTime) + parseInt(flightData.duration);

  return (
    <FlightCardContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        <img
          src={airlineLogo}
          alt={airlineName}
          style={{ width: 50, height: 50 }}
        />
        <Typography variant="body1">{airlineName}</Typography>
        <Typography variant="body2">{flightDetails.flightID}</Typography>
        <Typography variant="body2">Economy</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        <Typography variant="h6">
          {flightDetails.source} {flightDetails.departureTime}
        </Typography>
        <Typography variant="body2">{destinationAirport}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        <AccessTimeIcon sx={{ fontSize: 40 }} />
        <Typography variant="body1">{flightDetails.duration} hours</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        <Typography variant="h6">
          {flightDetails.arrivalTime} {flightDetails.destination}
        </Typography>
        <Typography variant="body2">{arrivalAirport}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        {flightDetails.amenities &&
          flightDetails.amenities.map((amenity, index) => (
            <Typography key={index} variant="body2">
              {amenity}
            </Typography>
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginTop: 2,
          width: "100%",
        }}
      >
        <Typography variant="body2" sx={{ color: "brown" }}>
          PARTIALLY REFUNDABLE
        </Typography>
      </Box>
    </FlightCardContainer>
  );
};

export default FlightMoreDetails;
