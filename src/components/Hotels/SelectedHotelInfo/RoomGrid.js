// // // import React from "react";
// // // import { Card, CardContent, Typography, Divider } from "@mui/material";

// // // const RoomGrid = ({
// // //   roomNumber,
// // //   roomType,
// // //   costPerNight,
// // //   roomSize,
// // //   bedDetail,
// // //   price,
// // //   cancellationPolicy,
// // //   meals,
// // //   offers,
// // //   costDetails,
// // //   id,
// // // }) => {
// // //   return (
// // //     <Card style={{ maxWidth: 400, margin: "20px auto" }}>
// // //       <CardContent>
// // //         <Typography variant="h5" component="div">
// // //           Room Details
// // //         </Typography>
// // //         <Divider style={{ margin: "10px 0" }} />
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Room Number:</strong> {roomNumber}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Room Type:</strong> {roomType}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Cost Per Night:</strong> ₹{costPerNight}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Room Size:</strong> {roomSize} sq ft
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Bed Details:</strong> {bedDetail}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Price:</strong> ₹{price}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Cancellation Policy:</strong> {cancellationPolicy}
// // //         </Typography>
// // //         {/* <Typography variant="body1" color="text.secondary">
// // //           <strong>Meals:</strong> {meals.length > 0 ? meals.join(", ") : "None"}
// // //         </Typography> */}
// // //         {/* <Typography variant="body1" color="text.secondary">
// // //           <strong>Offers:</strong>{" "}
// // //           {offers.length > 0 ? offers.join(", ") : "None"}
// // //         </Typography> */}
// // //         <Divider style={{ margin: "10px 0" }} />
// // //         <Typography variant="h6" component="div">
// // //           Cost Details
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Base Cost:</strong> ₹{costDetails.baseCost}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Taxes and Fees:</strong> ₹{costDetails.taxesAndFees}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Discount:</strong> ₹{costDetails.discount}
// // //         </Typography>
// // //         <Typography variant="body1" color="text.secondary">
// // //           <strong>Room ID:</strong> {id}
// // //         </Typography>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // export default RoomGrid;
// // import React from "react";
// // import { Card, CardContent, Typography, Divider } from "@mui/material";

// // const RoomGrid = ({
// //   room: {
// //     roomNumber,
// //     roomType,
// //     costPerNight,
// //     roomSize,
// //     bedDetail,
// //     price,
// //     cancellationPolicy,
// //     costDetails,
// //     _id,
// //   },
// // }) => {
// //   return (
// //     <Card style={{ maxWidth: 400, margin: "20px auto" }}>
// //       <CardContent>
// //         <Typography variant="h5" component="div">
// //           Room Details
// //         </Typography>
// //         <Divider style={{ margin: "10px 0" }} />
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Number:</strong> {roomNumber}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Type:</strong> {roomType}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cost Per Night:</strong> ₹{costPerNight}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Size:</strong> {roomSize} sq ft
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Bed Details:</strong> {bedDetail}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Price:</strong> ₹{price}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cancellation Policy:</strong> {cancellationPolicy}
// //         </Typography>
// //         <Divider style={{ margin: "10px 0" }} />
// //         <Typography variant="h6" component="div">
// //           Cost Details
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Base Cost:</strong> ₹{costDetails.baseCost}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Taxes and Fees:</strong> ₹{costDetails.taxesAndFees}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Discount:</strong> ₹{costDetails.discount}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room ID:</strong> {_id}
// //         </Typography>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default RoomGrid;
// // import React from "react";
// // import { Card, CardContent, Typography, Divider, Button } from "@mui/material";

// // const RoomGrid = ({
// //   room: {
// //     roomNumber,
// //     roomType,
// //     costPerNight,
// //     roomSize,
// //     bedDetail,
// //     price,
// //     cancellationPolicy,
// //     costDetails,
// //     _id,
// //   },
// // }) => {
// //   return (
// //     <Card
// //       sx={{
// //         maxWidth: 400,
// //         margin: "20px auto",
// //         borderRadius: 3,
// //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// //         backgroundColor: "#f9f9f9",
// //       }}
// //     >
// //       <CardContent>
// //         <Typography
// //           variant="h5"
// //           component="div"
// //           sx={{ color: "#ff5722", mb: 1 }}
// //         >
// //           Room Details
// //         </Typography>
// //         <Divider sx={{ margin: "10px 0" }} />
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Number:</strong> {roomNumber}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Type:</strong> {roomType}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cost Per Night:</strong> ₹{costPerNight}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Size:</strong> {roomSize} sq ft
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Bed Details:</strong> {bedDetail}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Price:</strong> ₹{price}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cancellation Policy:</strong> {cancellationPolicy}
// //         </Typography>
// //         <Divider sx={{ margin: "10px 0" }} />
// //         <Typography variant="h6" component="div" sx={{ color: "#ff5722" }}>
// //           Cost Details
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Base Cost:</strong> ₹{costDetails.baseCost}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Taxes and Fees:</strong> ₹{costDetails.taxesAndFees}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Discount:</strong> ₹{costDetails.discount}
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room ID:</strong> {_id}
// //         </Typography>
// //         <Button
// //           variant="contained"
// //           size="large"
// //           sx={{
// //             backgroundColor: "#ff5722",
// //             "&:hover": {
// //               backgroundColor: "#e64a19",
// //             },
// //             marginTop: 2,
// //             width: "100%",
// //           }}
// //         >
// //           Book Now
// //         </Button>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default RoomGrid;
// // import React from "react";
// // import { Card, CardContent, Typography, Divider, Button } from "@mui/material";

// // const RoomGrid = ({
// //   room: {
// //     roomNumber,
// //     roomType,
// //     costPerNight,
// //     roomSize,
// //     bedDetail,
// //     price,
// //     cancellationPolicy,
// //     costDetails,
// //     _id,
// //   },
// // }) => {
// //   return (
// //     <Card
// //       sx={{
// //         maxWidth: 400,
// //         margin: "20px auto",
// //         borderRadius: 3,
// //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// //         backgroundColor: "#f9f9f9",
// //       }}
// //     >
// //       <CardContent>
// //         <Typography
// //           variant="h5"
// //           component="div"
// //           sx={{ color: "#ff5722", mb: 1 }}
// //         >
// //           Room Details
// //         </Typography>
// //         <Divider sx={{ margin: "10px 0" }} />
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Number:</strong>{" "}
// //           <span style={{ color: "#3f51b5" }}>{roomNumber}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Type:</strong>{" "}
// //           <span style={{ color: "#3f51b5" }}>{roomType}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cost Per Night:</strong>{" "}
// //           <span style={{ color: "#4caf50" }}>₹{costPerNight}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room Size:</strong>{" "}
// //           <span style={{ color: "#3f51b5" }}>{roomSize} sq ft</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Bed Details:</strong>{" "}
// //           <span style={{ color: "#3f51b5" }}>{bedDetail}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Price:</strong>{" "}
// //           <span style={{ color: "#4caf50" }}>₹{price}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Cancellation Policy:</strong>{" "}
// //           <span style={{ color: "#f44336" }}>{cancellationPolicy}</span>
// //         </Typography>
// //         <Divider sx={{ margin: "10px 0" }} />
// //         <Typography variant="h6" component="div" sx={{ color: "#ff5722" }}>
// //           Cost Details
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Base Cost:</strong>{" "}
// //           <span style={{ color: "#4caf50" }}>₹{costDetails.baseCost}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Taxes and Fees:</strong>{" "}
// //           <span style={{ color: "#4caf50" }}>₹{costDetails.taxesAndFees}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Discount:</strong>{" "}
// //           <span style={{ color: "#4caf50" }}>₹{costDetails.discount}</span>
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //           <strong>Room ID:</strong> {_id}
// //         </Typography>
// //         <Button
// //           variant="contained"
// //           size="large"
// //           sx={{
// //             backgroundColor: "#ff5722",
// //             "&:hover": {
// //               backgroundColor: "#e64a19",
// //             },
// //             marginTop: 2,
// //             width: "100%",
// //           }}
// //         >
// //           Book Now
// //         </Button>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default RoomGrid;
// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Divider,
//   Button,
//   Box,
//   Grid,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const StyledCard = styled(Card)(({ theme }) => ({
//   maxWidth: 400,
//   margin: "20px auto",
//   borderRadius: 16,
//   boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
//   backgroundColor: "#ffffff",
//   overflow: "hidden",
// }));

// const CardHeader = styled(Box)(({ theme }) => ({
//   backgroundColor: "#1976d2",
//   color: "#ffffff",
//   padding: "16px 24px",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#1976d2",
//   color: "#ffffff",
//   "&:hover": {
//     backgroundColor: "#1565c0",
//   },
//   marginTop: 16,
//   width: "100%",
// }));

// const DetailItem = ({ label, value, color = "inherit" }) => (
//   <Box display="flex" justifyContent="space-between" mb={1}>
//     <Typography variant="body2" color="text.secondary">
//       {label}
//     </Typography>
//     <Typography variant="body2" fontWeight="medium" color={color}>
//       {value}
//     </Typography>
//   </Box>
// );

// const handelClick = () => {
//   const loggedIn = localStorage.getItem("userdetails");
//   console.log(loggedIn);
//   if (loggedIn) {
//     navigate("/hotelbookingtab");
//   } else {
//     navigate("/signin");
//   }
// };
// const RoomGrid = ({
//   room: {
//     roomNumber,
//     roomType,
//     costPerNight,
//     roomSize,
//     bedDetail,
//     price,
//     cancellationPolicy,
//     costDetails,
//     _id,
//   },
// }) => {
//   return (
//     <StyledCard>
//       <CardHeader>
//         <Typography variant="h6" fontWeight="bold">
//           Room {roomNumber}
//         </Typography>
//       </CardHeader>
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <DetailItem label="Room Type" value={roomType} />
//             <DetailItem label="Room Size" value={`${roomSize} sq ft`} />
//             <DetailItem label="Bed Details" value={bedDetail} />
//           </Grid>
//           <Grid item xs={12}>
//             <Divider />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="subtitle1" fontWeight="bold" mb={1}>
//               Pricing
//             </Typography>
//             <DetailItem
//               label="Cost Per Night"
//               value={`₹${costPerNight}`}
//               color="#4caf50"
//             />
//             <DetailItem
//               label="Total Price"
//               value={`₹${price}`}
//               color="#4caf50"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Divider />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="subtitle1" fontWeight="bold" mb={1}>
//               Cost Breakdown
//             </Typography>
//             <DetailItem label="Base Cost" value={`₹${costDetails.baseCost}`} />
//             <DetailItem
//               label="Taxes and Fees"
//               value={`₹${costDetails.taxesAndFees}`}
//             />
//             <DetailItem
//               label="Discount"
//               value={`-₹${costDetails.discount}`}
//               color="#f44336"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="body2" color="text.secondary">
//               Cancellation Policy:{" "}
//               <span style={{ color: "#f44336" }}>{cancellationPolicy}</span>
//             </Typography>
//           </Grid>
//         </Grid>
//         <StyledButton
//           variant="contained"
//           size="large"
//           onClick={() => handelClick()}
//         >
//           Book Now
//         </StyledButton>
//       </CardContent>
//     </StyledCard>
//   );
// };

// export default RoomGrid;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthorisationContext";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "20px auto",
  borderRadius: 16,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#ffffff",
  overflow: "hidden",
}));

const CardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "#ffffff",
  padding: "16px 24px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  marginTop: 16,
  width: "100%",
}));

const DetailItem = ({ label, value, color = "inherit" }) => (
  <Box display="flex" justifyContent="space-between" mb={1}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2" fontWeight="medium" color={color}>
      {value}
    </Typography>
  </Box>
);

const RoomGrid = ({
  room: {
    roomNumber,
    roomType,
    costPerNight,
    roomSize,
    bedDetail,
    price,
    cancellationPolicy,
    costDetails,
    _id,
  },
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = JSON.parse(localStorage.getItem("userdetails"));
  const CheckIndate = searchParams.get("CheckIndate");
  const CheckOutdate = searchParams.get("CheckOutdate");
  const hotelId = searchParams.get("hotelId");
  const authContextStore = useAuthContext();
  const { isLoggedIn, handleOpen } = authContextStore;

  const handleNext = async () => {
    const projectID = "9harpb4zkaur";
    const url =
      "https://academics.newtonschool.co/api/v1/bookingportals/booking";
    const bookingDetails = {
      hotelId: `${hotelId}`,
      startDate: `${CheckIndate}`, // Replace with actual start date
      endDate: `${CheckOutdate}`, // Replace with actual end date
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.token}`,
          projectID: projectID,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingType: "hotel",
          bookingDetails: bookingDetails,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      console.log("Booking successful:", result);
      alert("Booking successful!"); // or navigate to the next page
    } catch (error) {
      console.error("Booking failed:", error);
      alert(`Booking failed: ${error.message}`);
    }
  };

  const handleClick = () => {
    const loggedIn = localStorage.getItem("userdetails");
    console.log(loggedIn);
    if (loggedIn) {
      handleNext();
      navigate("/mytrips");
    } else {
      handleOpen();
    }
  };

  return (
    <StyledCard>
      <CardHeader>
        <Typography variant="h6" fontWeight="bold">
          Room {roomNumber}
        </Typography>
      </CardHeader>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DetailItem label="Room Type" value={roomType} />
            <DetailItem label="Room Size" value={`${roomSize} sq ft`} />
            <DetailItem label="Bed Details" value={bedDetail} />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Pricing
            </Typography>
            <DetailItem
              label="Cost Per Night"
              value={`₹${costPerNight}`}
              color="#4caf50"
            />
            <DetailItem
              label="Total Price"
              value={`₹${price}`}
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Cost Breakdown
            </Typography>
            <DetailItem label="Base Cost" value={`₹${costDetails.baseCost}`} />
            <DetailItem
              label="Taxes and Fees"
              value={`₹${costDetails.taxesAndFees}`}
            />
            <DetailItem
              label="Discount"
              value={`-₹${costDetails.discount}`}
              color="#f44336"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Cancellation Policy:{" "}
              <span style={{ color: "#f44336" }}>{cancellationPolicy}</span>
            </Typography>
          </Grid>
        </Grid>
        <StyledButton variant="contained" size="large" onClick={handleClick}>
          Book Now
        </StyledButton>
      </CardContent>
    </StyledCard>
  );
};

export default RoomGrid;
