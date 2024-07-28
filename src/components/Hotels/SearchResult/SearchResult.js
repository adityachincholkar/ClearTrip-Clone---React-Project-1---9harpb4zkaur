// // import Card from "react-bootstrap/Card";
// // import Col from "react-bootstrap/Col";
// // import Row from "react-bootstrap/Row";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Box } from "@mui/material";
// // import { useEffect, useState } from "react";
// // import ImageCarousel from "./ImageCarousel";
// // function SearchResult() {
// //   const [HotelData, SetHotelData] = useState([]);

// //   useEffect(() => {
// //     const fetchHotelInformation = async () => {
// //       const projectID = "9harpb4zkaur";
// //       const url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"Pune"}&limit=30`;

// //       try {
// //         const response = await fetch(url, {
// //           headers: {
// //             projectID,
// //           },
// //         });

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();
// //         console.log("6 cards:", data.data); // Log fetched offers
// //         SetHotelData(data.data.hotels); // Assuming data.data.offers is the correct path
// //         console.log(HotelData, "HotelData");
// //       } catch (error) {
// //         console.error("Error fetching HotelInformation:", error.message);
// //       }
// //     };

// //     fetchHotelInformation();
// //   }, []);
// //   return (
// //     <Box sx={{ my: 5, mx: 16 }}>
// //       <Row xs={1} md={4} className="g-4 ">
// //         {HotelData.map((hotel, idx) => (
// //           <Col key={hotel._id}>
// //             <Card>
// //               {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
// //               <ImageCarousel hotel={hotel} />
// //               <Card.Body>
// //                 <Card.Title>Card title</Card.Title>
// //                 <Card.Text>
// //                   This is a longer card with supporting text below as a natural
// //                   lead-in to additional content. This content is a little bit
// //                   longer.
// //                 </Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Box>
// //   );
// // }

// // export default SearchResult;

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import ImageCarousel from "./ImageCarousel";
// import { useSearchParams } from "react-router-dom";
// import Filters from "./Filters";

// function SearchResult() {
//   const [HotelData, SetHotelData] = useState([]);
//   const [searchParams] = useSearchParams();
//   const Location = searchParams.get("hotelLocation");
//   const hotelLocation = Location.split(",")[0];
//   const sortValue = searchParams.get("sort");
//   const HotelStar = searchParams.get("HotelStar");
//   useEffect(() => {
//     const fetchHotelInformation = async () => {
//       const obj = {};
//       if (HotelStar) {
//         obj.rating = { $lte: "5", $gte: "4" };
//       }
//       const encodedObj = encodeURIComponent(JSON.stringify(obj));
//       const projectID = "9harpb4zkaur";
//       let url = "";
//       if (sortValue !== "recommended" && sortValue) {
//         const sNAME = sortValue.split(":")[0];
//         const sValue = sortValue.split(":")[1];

//         url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//           `{"location":"${hotelLocation}"}`
//         )}&sort=${encodeURIComponent(
//           `{"${sNAME}":${sValue}}`
//         )}&filter=${encodedObj}&limit=40`;
//         // url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//         //   `{"location":"${hotelLocation}"}`
//         // )}&sort=${encodeURIComponent(
//         //   `{"${sNAME}":${sValue}}`
//         // )}&filter=${encodeURIComponent({
//         //   rating: { $lte: "5", $gte: "4" },
//         // })}&limit=40`;
//       } else {
//         url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//           `{"location":"${hotelLocation}"}`
//         )}&limit=40`;
//       }

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
//         console.log(data.data.hotels);
//         SetHotelData(data.data.hotels);
//       } catch (error) {
//         console.error("Error fetching HotelInformation:", error.message);
//       }
//     };

//     fetchHotelInformation();
//   }, [sortValue]);

//   return (
//     <Box>
//       <Box sx={{ my: 5, mx: 16 }}>
//         <Filters />
//         <Typography variant="h4" sx={{ my: 3 }}>
//           Showing hotels in {hotelLocation}
//         </Typography>
//         <Row xs={1} md={4} className="g-4">
//           {HotelData.map((hotel) => (
//             <Col key={hotel._id}>
//               <Card>
//                 <ImageCarousel hotel={hotel} />
//                 <Card.Body>
//                   <Box
//                     sx={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <Card.Title>{hotel.name}</Card.Title>
//                     <Box>
//                       <Typography sx={{ color: "rgb(17, 166, 112)" }}>
//                         {hotel.rating}/5
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Card.Text variant="h5" sx={{ color: "rgb(128, 128, 128)" }}>
//                     {Math.floor(hotel.rating)}-star hotel | {hotel.location}
//                   </Card.Text>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ display: "inline-block", mr: 0.5 }}
//                     >
//                       {/* ₹{hotel.rooms[0].costDetails.baseCost} */}₹
//                       {Math.round(hotel.avgCostPerNight)}
//                     </Typography>
//                     <Typography variant="div1" sx={{ display: "inline-block" }}>
//                       + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
//                       / night
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="div1"
//                       sx={{ textDecoration: "line-through", mr: 0.5 }}
//                     >
//                       ₹
//                       {Math.round(
//                         +hotel.avgCostPerNight + +hotel.avgCostPerNight * 0.1
//                       )}
//                     </Typography>
//                     <Typography variant="div1" sx={{ color: "green", mr: 0.5 }}>
//                       10% OFF
//                     </Typography>
//                     <Typography variant="div1">
//                       + Addtional bank discounts
//                     </Typography>
//                   </Box>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Box>
//     </Box>
//   );
// }

// export default SearchResult;
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Container, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import ImageCarousel from "./ImageCarousel";
// import { useSearchParams } from "react-router-dom";
// import Filters from "./Filters";

// function SearchResult() {
//   const [HotelData, SetHotelData] = useState([]);
//   const [searchParams] = useSearchParams();
//   const location = searchParams.get("hotelLocation");
//   const hotelLocation = location.split(",")[0];
//   const sortValue = searchParams.get("sort");
//   const hotelStar = Number(searchParams.get("HotelStar"));

//   useEffect(() => {
//     const fetchHotelInformation = async () => {
//       const obj = {};
//       if (hotelStar) {
//         if (hotelStar === 5)
//           obj.rating = {
//             $gte: 5,
//           };
//         if (hotelStar === 4.5)
//           obj.rating = {
//             $lte: 4.5,
//             $gte: 4,
//           };
//         if (hotelStar === 3.5)
//           obj.rating = {
//             $lte: 3.5,
//           };
//       }

//       const encodedObj = encodeURIComponent(JSON.stringify(obj));
//       const projectID = "9harpb4zkaur";
//       let url = "";

//       if (sortValue !== "recommended" && sortValue  && !obj) {
//         const [sNAME, sValue] = sortValue.split(":");
//         url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//           `{"location":"${hotelLocation}"}`
//         )}&sort=${encodeURIComponent(
//           `{"${sNAME}":${sValue}}`
//         )}&limit=40`;
//       }
//       else if(obj && !sortValue){
//         url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//           `{"location":"${hotelLocation}"}`
//         )}&sort=${encodeURIComponent(
//           `{"${sNAME}":${sValue}}`
//         )}&filter=${encodedObj}&limit=40`;}

//         else if(obj && sortValue !== "recommended" && sortValue){
//           const [sNAME, sValue] = sortValue.split(":");
//           url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//             `{"location":"${hotelLocation}"}`
//           )}&sort=${encodeURIComponent(
//             `{"${sNAME}":${sValue}}`
//           )}&filter=${encodedObj}&limit=40`;
//         }
//         else {
//           url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//             `{"location":"${hotelLocation}"}`
//           )}&limit=40`;
//         }

//         try {
//           const response = await fetch(url, {
//             headers: {
//               projectID,
//             },
//           });

//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         SetHotelData(data.data.hotels);
//       } catch (error) {
//         console.error("Error fetching HotelInformation:", error.message);
//       }
//     };
//   }

//     fetchHotelInformation();
//   }, [sortValue, hotelStar]);

//   return (
//     <Container>
//       <Box sx={{ my: 5, mx: 16 }}>
//         <Filters />
//         <Typography variant="h4" sx={{ my: 3 }}>
//           Showing hotels in {hotelLocation}
//         </Typography>
//         <Row xs={1} md={4} className="g-4">
//           {HotelData.map((hotel) => (
//             <Col key={hotel._id}>
//               <Card>
//                 <ImageCarousel hotel={hotel} />
//                 <Card.Body>
//                   <Box
//                     sx={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <Card.Title>{hotel.name}</Card.Title>
//                     <Box>
//                       <Typography sx={{ color: "rgb(17, 166, 112)" }}>
//                         {hotel.rating}/5
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Card.Text variant="h5" sx={{ color: "rgb(128, 128, 128)" }}>
//                     {Math.floor(hotel.rating)}-star hotel | {hotel.location}
//                   </Card.Text>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ display: "inline-block", mr: 0.5 }}
//                     >
//                       ₹{Math.round(hotel.avgCostPerNight)}
//                     </Typography>
//                     <Typography variant="div1" sx={{ display: "inline-block" }}>
//                       + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
//                       / night
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="div1"
//                       sx={{ textDecoration: "line-through", mr: 0.5 }}
//                     >
//                       ₹
//                       {Math.round(
//                         hotel.avgCostPerNight + hotel.avgCostPerNight * 0.1
//                       )}
//                     </Typography>
//                     <Typography variant="div1" sx={{ color: "green", mr: 0.5 }}>
//                       10% OFF
//                     </Typography>
//                     <Typography variant="div1">
//                       + Additional bank discounts
//                     </Typography>
//                   </Box>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Box>
//     </Container>
//   );
// }

// export default SearchResult;

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Container, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import ImageCarousel from "./ImageCarousel";
// import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import Filters from "./Filters";

// function SearchResult() {
//   const [HotelData, SetHotelData] = useState([]);
//   const [searchParams] = useSearchParams();
//   const location = searchParams.get("hotelLocation");
//   const hotelLocation = location ? location.split(",")[0] : "";
//   const sortValue = searchParams.get("sort");
//   const hotelStar = Number(searchParams.get("HotelStar"));
//   const HotelRating = Number(searchParams.get("HotelRating"));
//   const LowerPrice = Number(searchParams.get("LowerPrice"));
//   const UpperPrice = Number(searchParams.get("UpperPrice"));
//   const navigate = useNavigate();

//   const handelClick = (id) => {
//     navigate(`/SelectedHotelInfo?hotelId=${id}`);
//   };
//   useEffect(() => {
//     const fetchHotelInformation = async () => {
//       const obj = {};
//       if (hotelStar) {
//         if (hotelStar === 5) {
//           obj.rating = { $gte: 5 };
//         } else if (hotelStar === 4.5) {
//           obj.rating = { $lte: 4.5, $gte: 4 };
//         } else if (hotelStar === 3.5) {
//           obj.rating = { $lte: 3.5 };
//         }
//       }

//       if (LowerPrice && UpperPrice) {
//         obj.avgCostPerNight = { $lte: UpperPrice, $gte: LowerPrice };
//       }

//       const encodedObj = encodeURIComponent(JSON.stringify(obj));
//       const projectID = "9harpb4zkaur";
//       let url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//         `{"location":"${hotelLocation}"}`
//       )}`;

//       if (sortValue && sortValue !== "recommended") {
//         const [sNAME, sValue] = sortValue.split(":");
//         url += `&sort=${encodeURIComponent(`{"${sNAME}":${sValue}}`)}`;
//       }

//       if (Object.keys(obj).length > 0) {
//         url += `&filter=${encodedObj}`;
//       }

//       url += "&limit=40";

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
//         SetHotelData(data.data.hotels);
//       } catch (error) {
//         console.error("Error fetching HotelInformation:", error.message);
//       }
//     };

//     fetchHotelInformation();
//   }, [
//     hotelLocation,
//     sortValue,
//     hotelStar,
//     HotelRating,
//     LowerPrice,
//     UpperPrice,
//   ]);

//   return (
//     <Box>
//       <Box sx={{ my: 5, mx: 16 }}>
//         <Filters />
//         <Typography variant="h4" sx={{ my: 3 }}>
//           Showing hotels in {hotelLocation}
//         </Typography>
//         <Row xs={1} md={4} className="g-4">
//           {HotelData.map((hotel) => (
//             <Col key={hotel._id}>
//               <Card
//                 onClick={() => handelClick(hotel._id)}
//                 sx={{ "&:hover": { cursor: "pointer" } }}
//               >
//                 <ImageCarousel hotel={hotel} />
//                 <Card.Body>
//                   <Box
//                     sx={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <Card.Title>{hotel.name}</Card.Title>
//                     <Box>
//                       <Typography sx={{ color: "rgb(17, 166, 112)" }}>
//                         {hotel.rating}/5
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Card.Text variant="h5" sx={{ color: "rgb(128, 128, 128)" }}>
//                     {Math.floor(hotel.rating)}-star hotel | {hotel.location}
//                   </Card.Text>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ display: "inline-block", mr: 0.5 }}
//                     >
//                       ₹{Math.round(hotel.avgCostPerNight)}
//                     </Typography>
//                     <Typography variant="div1" sx={{ display: "inline-block" }}>
//                       + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
//                       / night
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="div1"
//                       sx={{ textDecoration: "line-through", mr: 0.5 }}
//                     >
//                       ₹
//                       {Math.round(
//                         hotel.avgCostPerNight + hotel.avgCostPerNight * 0.1
//                       )}
//                     </Typography>
//                     <Typography variant="div1" sx={{ color: "green", mr: 0.5 }}>
//                       10% OFF
//                     </Typography>
//                     <Typography variant="div1">
//                       + Additional bank discounts
//                     </Typography>
//                   </Box>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Box>
//     </Box>
//   );
// }

// export default SearchResult;
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Container, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import ImageCarousel from "./ImageCarousel";
// import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import Filters from "./Filters";

// function SearchResult() {
//   const [HotelData, SetHotelData] = useState([]);
//   const [searchParams] = useSearchParams();
//   const location = searchParams.get("hotelLocation");
//   const hotelLocation = location ? location.split(",")[0] : "";
//   const sortValue = searchParams.get("sort");
//   const hotelStar = Number(searchParams.get("HotelStar"));
//   const HotelRating = Number(searchParams.get("HotelRating"));
//   const LowerPrice = Number(searchParams.get("LowerPrice"));
//   const UpperPrice = Number(searchParams.get("UpperPrice"));
//   const navigate = useNavigate();

//   const handelClick = (id) => {
//     navigate(`/SelectedHotelInfo?hotelId=${id}`);
//   };

//   useEffect(() => {
//     const fetchHotelInformation = async () => {
//       const obj = {};
//       if (hotelStar) {
//         if (hotelStar === 5) {
//           obj.rating = { $gte: 5 };
//         } else if (hotelStar === 4.5) {
//           obj.rating = { $lte: 4.5, $gte: 4 };
//         } else if (hotelStar === 3.5) {
//           obj.rating = { $lte: 3.5 };
//         }
//       }

//       if (LowerPrice && UpperPrice) {
//         obj.avgCostPerNight = { $lte: UpperPrice, $gte: LowerPrice };
//       }

//       const encodedObj = encodeURIComponent(JSON.stringify(obj));
//       const projectID = "9harpb4zkaur";
//       let url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
//         `{"location":"${hotelLocation}"}`
//       )}`;

//       if (sortValue && sortValue !== "recommended") {
//         const [sNAME, sValue] = sortValue.split(":");
//         url += `&sort=${encodeURIComponent(`{"${sNAME}":${sValue}}`)}`;
//       }

//       if (Object.keys(obj).length > 0) {
//         url += `&filter=${encodedObj}`;
//       }

//       url += "&limit=40";

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
//         SetHotelData(data.data.hotels);
//       } catch (error) {
//         console.error("Error fetching HotelInformation:", error.message);
//       }
//     };

//     fetchHotelInformation();
//   }, [
//     hotelLocation,
//     sortValue,
//     hotelStar,
//     HotelRating,
//     LowerPrice,
//     UpperPrice,
//   ]);

//   return (
//     <Box>
//       <Box sx={{ my: 5, mx: 16 }}>
//         <Filters />
//         <Typography variant="h4" sx={{ my: 3 }}>
//           Showing hotels in {hotelLocation}
//         </Typography>
//         <Row xs={1} md={4} className="g-4">
//           {HotelData.map((hotel) => (
//             <Col key={hotel._id}>
//               <Card
//                 onClick={() => handelClick(hotel._id)}
//                 style={{ cursor: "pointer" }} // Apply cursor style here
//               >
//                 <ImageCarousel hotel={hotel} />
//                 <Card.Body>
//                   <Box
//                     sx={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <Card.Title>{hotel.name}</Card.Title>
//                     <Box>
//                       <Typography sx={{ color: "rgb(17, 166, 112)" }}>
//                         {hotel.rating}/5
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Card.Text variant="h5" sx={{ color: "rgb(128, 128, 128)" }}>
//                     {Math.floor(hotel.rating)}-star hotel | {hotel.location}
//                   </Card.Text>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ display: "inline-block", mr: 0.5 }}
//                     >
//                       ₹{Math.round(hotel.avgCostPerNight)}
//                     </Typography>
//                     <Typography variant="div1" sx={{ display: "inline-block" }}>
//                       + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
//                       / night
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="div1"
//                       sx={{ textDecoration: "line-through", mr: 0.5 }}
//                     >
//                       ₹
//                       {Math.round(
//                         hotel.avgCostPerNight + hotel.avgCostPerNight * 0.1
//                       )}
//                     </Typography>
//                     <Typography variant="div1" sx={{ color: "green", mr: 0.5 }}>
//                       10% OFF
//                     </Typography>
//                     <Typography variant="div1">
//                       + Additional bank discounts
//                     </Typography>
//                   </Box>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Box>
//     </Box>
//   );
// }

// export default SearchResult;
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Filters from "./Filters";

function SearchResult() {
  const [HotelData, SetHotelData] = useState([]);
  const [searchParams] = useSearchParams();
  const CheckIndate = searchParams.get("CheckIndate") || "";
  const CheckOutdate = searchParams.get("CheckOutdate") || "";
  const location = searchParams.get("hotelLocation");
  const hotelLocation = location ? location.split(",")[0] : "";
  const sortValue = searchParams.get("sort");
  const hotelStar = Number(searchParams.get("HotelStar"));
  const HotelRating = Number(searchParams.get("HotelRating"));
  const LowerPrice = Number(searchParams.get("LowerPrice"));
  const UpperPrice = Number(searchParams.get("UpperPrice"));
  const navigate = useNavigate();
  const handelClick = (id) => {
    navigate(
      `/SelectedHotelInfo?hotelId=${id}&CheckIndate=${CheckIndate}&CheckOutdate=${CheckOutdate}`
    );
  };

  useEffect(() => {
    const fetchHotelInformation = async () => {
      const obj = {};
      if (hotelStar) {
        if (hotelStar === 5) {
          obj.rating = { $gte: 5 };
        } else if (hotelStar === 4.5) {
          obj.rating = { $lte: 4.5, $gte: 4 };
        } else if (hotelStar === 3.5) {
          obj.rating = { $lte: 3.5 };
        }
      }

      if (LowerPrice && UpperPrice) {
        obj.avgCostPerNight = { $lte: UpperPrice, $gte: LowerPrice };
      }

      const encodedObj = encodeURIComponent(JSON.stringify(obj));
      const projectID = "9harpb4zkaur";
      let url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(
        `{"location":"${hotelLocation}"}`
      )}`;

      if (sortValue && sortValue !== "recommended") {
        const [sNAME, sValue] = sortValue.split(":");
        url += `&sort=${encodeURIComponent(`{"${sNAME}":${sValue}}`)}`;
      }

      if (Object.keys(obj).length > 0) {
        url += `&filter=${encodedObj}`;
      }

      url += "&limit=40";

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
        SetHotelData(data.data.hotels);
      } catch (error) {
        console.error("Error fetching HotelInformation:", error.message);
      }
    };

    fetchHotelInformation();
  }, [
    hotelLocation,
    sortValue,
    hotelStar,
    HotelRating,
    LowerPrice,
    UpperPrice,
  ]);

  return (
    <Box>
      <Box sx={{ my: 5, mx: 16 }}>
        <Filters />
        <Typography variant="h4" sx={{ my: 3 }}>
          Showing hotels in {hotelLocation}
        </Typography>
        <Row xs={1} md={4} className="g-4">
          {HotelData.map((hotel) => (
            <Col key={hotel._id}>
              <Card
                style={{ cursor: "pointer" }} // Apply cursor style here
              >
                <ImageCarousel hotel={hotel} />
                <Card.Body onClick={() => handelClick(hotel._id)}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Title>{hotel.name}</Card.Title>
                    <Box>
                      <Typography sx={{ color: "rgb(17, 166, 112)" }}>
                        {hotel.rating}/5
                      </Typography>
                    </Box>
                  </Box>
                  <Card.Text variant="h5" sx={{ color: "rgb(128, 128, 128)" }}>
                    {Math.floor(hotel.rating)}-star hotel | {hotel.location}
                  </Card.Text>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ display: "inline-block", mr: 0.5 }}
                    >
                      ₹{Math.round(hotel.avgCostPerNight)}
                    </Typography>
                    <Typography variant="div1" sx={{ display: "inline-block" }}>
                      + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
                      / night
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="div1"
                      sx={{ textDecoration: "line-through", mr: 0.5 }}
                    >
                      ₹
                      {Math.round(
                        hotel.avgCostPerNight + hotel.avgCostPerNight * 0.1
                      )}
                    </Typography>
                    <Typography variant="div1" sx={{ color: "green", mr: 0.5 }}>
                      10% OFF
                    </Typography>
                    <Typography variant="div1">
                      + Additional bank discounts
                    </Typography>
                  </Box>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Box>
    </Box>
  );
}

export default SearchResult;
