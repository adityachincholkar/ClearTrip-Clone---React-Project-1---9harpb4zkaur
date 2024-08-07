// import { NavLink, Outlet } from "react-router-dom";
// import DiscountIcon from "@mui/icons-material/Discount";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import FlightIcon from "@mui/icons-material/Flight";
// import HotelIcon from "@mui/icons-material/Hotel";
// import { Box, Container, Stack } from "@mui/material";
// import "./styles/Home.css"; // Import the CSS file
// import Navbar from "./Navbar/Navbar";

// function Home() {
//   return (
//     <Container>
//       <Box
//         sx={{
//           marginTop: 3,

//           marginLeft: {
//             xs: 1.5, // for extra-small screens (0px - 599px)
//             sm: 2, // for small screens (600px - 899px)
//             md: 7, // for medium and larger screens (900px+)
//             lg: 14,
//           },
//           marginRight: {
//             xs: 1.5, // for extra-small screens (0px - 599px)
//             sm: 2, // for small screens (600px - 899px)
//             md: 8, // for medium and larger screens (900px+)
//             lg: 16,
//           },
//         }}
//       >
//         <Stack direction="row" justifyContent={"space-around"}>
//           <Box
//             flex={1}
//             alignItems="center"
//             marginRight={4}
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             <ul>
//               <li style={{ textDecoration: "none" }}>
//                 <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                   <NavLink to="/" className="NavLink">
//                     <FlightIcon
//                       sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 1.2 }}
//                     />
//                     Flights
//                   </NavLink>
//                 </Box>
//               </li>

//               <li>
//                 <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                   <NavLink to="/hotels" className="NavLink">
//                     <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
//                     Hotels
//                   </NavLink>
//                 </Box>
//               </li>
//               {/* <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/offers" className="NavLink">
//                 <DiscountIcon
//                 sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }}
//                   />
//                   Offers
//                   </NavLink>
//                   </Box>
//                   </li> */}
//               <li>
//                 <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                   <NavLink to="/mytrips" className="NavLink">
//                     <LuggageIcon
//                       sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }}
//                     />
//                     My Trips
//                   </NavLink>
//                 </Box>
//               </li>
//             </ul>
//           </Box>
//           <Box flex={6}>
//             <Outlet />
//           </Box>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

// export default Home;
// import { Link, NavLink, Outlet } from "react-router-dom";
// import DiscountIcon from "@mui/icons-material/Discount";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import FlightIcon from "@mui/icons-material/Flight";
// import HotelIcon from "@mui/icons-material/Hotel";
// import { Box, Container, Stack } from "@mui/material";
// import "./styles/Home.css"; // Import the CSS file
// import Navbar from "./Navbar/Navbar";
// import * as React from "react";
// // import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// function Home() {
//   const [value, setValue] = React.useState(0);
//   return (
//     <Container
//       sx={{
//         marginTop: 3,

//         marginLeft: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 7, // for medium and larger screens (900px+)
//           lg: 10,
//         },
//         marginRight: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 8, // for medium and larger screens (900px+)
//           lg: 16,
//         },
//       }}
//     >
//       {/* <Box
//       sx={{
//         marginTop: 3,

//         marginLeft: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 7, // for medium and larger screens (900px+)
//           lg: 14,
//         },
//         marginRight: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 8, // for medium and larger screens (900px+)
//           lg: 16,
//         },
//       }}
//       > */}

//       <Stack direction="row" justifyContent={"space-around"}>
//         <Box
//           flex={1}
//           alignItems="center"
//           marginRight={4}
//           sx={{ display: { xs: "none", sm: "block" } }}
//         >
//           <ul>
//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/" className="NavLink">
//                   <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 1.2 }} />
//                   Flights
//                 </NavLink>
//               </Box>
//             </li>

//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/hotels" className="NavLink">
//                   <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
//                   Hotels
//                 </NavLink>
//               </Box>
//             </li>
//             {/* <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/offers" className="NavLink">
//                 <DiscountIcon
//                   sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }}
//                   />
//                   Offers
//                   </NavLink>
//                   </Box>
//                   </li> */}
//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/mytrips" className="NavLink">
//                   <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
//                   My Trips
//                 </NavLink>
//               </Box>
//             </li>
//           </ul>
//         </Box>
//         <Box flex={6}>
//           <Outlet />
//         </Box>
//         <Box sx={{ width: 500 }}>{/* Content goes here */}</Box>

//         {/* Bottom Navigation */}
//         <Box
//           sx={{
//             width: "100%",
//             position: "fixed",
//             bottom: 0,
//             left: 0,
//             zIndex: 1000,
//             boxShadow: 3,
//             display: { xs: "block", sm: "none" },
//           }}
//         >
//           <BottomNavigation
//             showLabels
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//           >
//             <BottomNavigationAction
//               label="Flights"
//               icon={
//                 <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />
//               }
//             />

//             <BottomNavigationAction
//               label="Hotels"
//               icon={
//                 <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
//               }
//             />
//             <BottomNavigationAction
//               label="My Trips"
//               icon={
//                 <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
//               }
//             />
//           </BottomNavigation>
//         </Box>
//       </Stack>
//       {/* </Box> */}
//     </Container>
//   );
// }

// export default Home;
// import { Link, NavLink, Outlet } from "react-router-dom";
// import DiscountIcon from "@mui/icons-material/Discount";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import FlightIcon from "@mui/icons-material/Flight";
// import HotelIcon from "@mui/icons-material/Hotel";
// import { Box, Container, Stack } from "@mui/material";
// import "./styles/Home.css"; // Import the CSS file
// import Navbar from "./Navbar/Navbar";
// import * as React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function Home() {
//   const [value, setValue] = React.useState(0);
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleNavigationChange = (event, newValue) => {
//     setValue(newValue);

//     // Define your navigation paths based on the selected value
//     switch (newValue) {
//       case 0:
//         navigate("/"); // Navigate to Flights
//         break;
//       case 1:
//         navigate("/hotels"); // Navigate to Hotels
//         break;
//       case 2:
//         navigate("/mytrips"); // Navigate to My Trips
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Container
//       sx={{
//         marginTop: 3,
//         marginLeft: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 7, // for medium and larger screens (900px+)
//           lg: 10,
//         },
//         marginRight: {
//           xs: 1.5, // for extra-small screens (0px - 599px)
//           sm: 2, // for small screens (600px - 899px)
//           md: 8, // for medium and larger screens (900px+)
//           lg: 16,
//         },
//       }}
//     >
//       <Stack direction="row" justifyContent={"space-around"}>
//         <Box
//           flex={1}
//           alignItems="center"
//           marginRight={4}
//           sx={{ display: { xs: "none", sm: "block" } }}
//         >
//           <ul>
//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/" className="NavLink">
//                   <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 1.2 }} />
//                   Flights
//                 </NavLink>
//               </Box>
//             </li>
//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/hotels" className="NavLink">
//                   <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
//                   Hotels
//                 </NavLink>
//               </Box>
//             </li>
//             <li>
//               <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
//                 <NavLink to="/mytrips" className="NavLink">
//                   <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
//                   My Trips
//                 </NavLink>
//               </Box>
//             </li>
//           </ul>
//         </Box>
//         <Box flex={6}>
//           <Outlet />
//         </Box>

//         <Box
//           sx={{
//             width: "100%",
//             position: "fixed",
//             bottom: 0,
//             left: 0,
//             zIndex: 1000,
//             boxShadow: 3,
//             display: { xs: "block", sm: "none" },
//           }}
//         >
//           <BottomNavigation
//             showLabels
//             value={value}
//             onChange={handleNavigationChange}
//           >
//             <BottomNavigationAction
//               label="Flights"
//               icon={
//                 <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />
//               }
//             />
//             <BottomNavigationAction
//               label="Hotels"
//               icon={
//                 <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
//               }
//             />
//             <BottomNavigationAction
//               label="My Trips"
//               icon={
//                 <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
//               }
//             />
//           </BottomNavigation>
//         </Box>
//       </Stack>
//     </Container>
//   );
// }

// export default Home;
import { Link, NavLink, Outlet } from "react-router-dom";
import DiscountIcon from "@mui/icons-material/Discount";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { Box, Container, Stack } from "@mui/material";
import "./styles/Home.css"; // Import the CSS file
import Navbar from "./Navbar/Navbar";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";

function Home() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // Define your navigation paths based on the selected value
    switch (newValue) {
      case 0:
        navigate("/"); // Navigate to Flights
        break;
      case 1:
        navigate("/hotels"); // Navigate to Hotels
        break;
      case 2:
        navigate("/mytrips"); // Navigate to My Trips
        break;
      default:
        break;
    }
  };

  return (
    <Container
      sx={{
        marginTop: 3,
        marginLeft: {
          xs: 1.5, // for extra-small screens (0px - 599px)
          sm: 2, // for small screens (600px - 899px)
          md: 7, // for medium and larger screens (900px+)
          lg: 10,
        },
        marginRight: {
          xs: 1.5, // for extra-small screens (0px - 599px)
          sm: 2, // for small screens (600px - 899px)
          md: 8, // for medium and larger screens (900px+)
          lg: 16,
        },
        paddingBottom: { xs: 8, sm: 0 }, // add padding to prevent content being hidden behind the BottomNavigation
      }}
    >
      <Stack direction="row" justifyContent={"space-around"}>
        <Box
          flex={1}
          alignItems="center"
          marginRight={4}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <ul>
            <li>
              <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
                <NavLink to="/" className="NavLink">
                  <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 1.2 }} />
                  Flights
                </NavLink>
              </Box>
            </li>
            <li>
              <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
                <NavLink to="/hotels" className="NavLink">
                  <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
                  Hotels
                </NavLink>
              </Box>
            </li>
            <li>
              <Box sx={{ fontSize: 20, ml: 2, mr: 1, my: 1 }}>
                <NavLink to="/mytrips" className="NavLink">
                  <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 1.5 }} />
                  My Trips
                </NavLink>
              </Box>
            </li>
          </ul>
        </Box>
        <Box flex={6}>
          <Outlet />
        </Box>

        {/* <Footer /> */}

        {/* <Box
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex: 1000,
            boxShadow: 3,
            display: { xs: "block", sm: "none" },
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleNavigationChange}
          >
            <BottomNavigationAction
              label="Flights"
              icon={
                <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="Hotels"
              icon={
                <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="My Trips"
              icon={
                <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
          </BottomNavigation>
        </Box> */}
      </Stack>
    </Container>
  );
}

export default Home;
