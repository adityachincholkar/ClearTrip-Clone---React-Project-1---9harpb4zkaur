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
//   const CheckIndate = searchParams.get("CheckIndate") || "";
//   const CheckOutdate = searchParams.get("CheckOutdate") || "";
//   const location = searchParams.get("hotelLocation");
//   const hotelLocation = location ? location.split(",")[0] : "";
//   const sortValue = searchParams.get("sort");
//   const hotelStar = Number(searchParams.get("HotelStar"));
//   const HotelRating = Number(searchParams.get("HotelRating"));
//   const LowerPrice = Number(searchParams.get("LowerPrice"));
//   const UpperPrice = Number(searchParams.get("UpperPrice"));
//   const navigate = useNavigate();
//   const handelClick = (id) => {
//     navigate(
//       `/SelectedHotelInfo?hotelId=${id}&CheckIndate=${CheckIndate}&CheckOutdate=${CheckOutdate}`
//     );
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
//                 style={{ cursor: "pointer" }} // Apply cursor style here
//               >
//                 <ImageCarousel hotel={hotel} />
//                 <Card.Body onClick={() => handelClick(hotel._id)}>
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
    <Container>
      <Box sx={{ my: 5 }}>
        <Filters />
        <Typography variant="h4" sx={{ my: 3 }}>
          Showing hotels in {hotelLocation}
        </Typography>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {HotelData.map((hotel) => (
            <Col key={hotel._id}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => handelClick(hotel._id)}
              >
                <ImageCarousel hotel={hotel} />
                <Card.Body>
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
                    <Typography
                      variant="body2"
                      sx={{ display: "inline-block" }}
                    >
                      + ₹{hotel.rooms[0].costDetails.taxesAndFees} taxes & fees
                      / night
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through", mr: 0.5 }}
                    >
                      ₹
                      {Math.round(
                        hotel.avgCostPerNight + hotel.avgCostPerNight * 0.1
                      )}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "green", mr: 0.5 }}
                    >
                      10% OFF
                    </Typography>
                    <Typography variant="body2">
                      + Additional bank discounts
                    </Typography>
                  </Box>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Box>
    </Container>
  );
}

export default SearchResult;
