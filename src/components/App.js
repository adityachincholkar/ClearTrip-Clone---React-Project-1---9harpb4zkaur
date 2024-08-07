import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Flights from "./Flights/Flights";
import Navbar from "./Navbar/Navbar";
import Hotels from "./Hotels/Hotels";
import MyTrips from "./MyTrips/MyTrips";
import Offers from "./Flights/Offers";
import Results from "./Flights/FlightResults/Results";
import SearchResult from "./Hotels/SearchResult/SearchResult";
import SelectedHotelInfo from "./Hotels/SelectedHotelInfo/SelectedHotelInfo";
import HotelInfo from "./Hotels/SelectedHotelInfo/HotelInfo";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import { AuthContextProvider } from "./context/AuthorisationContext";
import Flightbookingtab from "./Flights/BookingPage/Flightbookingtab";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./Footer";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DiscountIcon from "@mui/icons-material/Discount";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";

function App() {
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
    <>
      {/* <AuthContextProvider>
				<Navbar />
        </AuthContextProvider> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Flights />} />

          {/* <Route path="offers" element={<Offers />} /> */}

          <Route path="hotels" element={<Hotels />} />
          {/* <Route path="mytrips" element={<MyTrips />} /> */}
          <Route
            path="mytrips"
            element={<ProtectedRoute Component={MyTrips} />}
          />
        </Route>
        <Route path="/results" element={<Results />}>
          <Route element={<Results />} />
        </Route>
        {/* hotelsearchresults */}
        <Route path="hotels/hotelsearchresults" element={<SearchResult />}>
          <Route element={<SearchResult />} />
        </Route>
        SelectedHotelInfo
        <Route path="/SelectedHotelInfo" element={<HotelInfo />}>
          <Route element={<HotelInfo />} />
        </Route>
        {/* <Route path="/signup" element={<SignUp />}>
					<Route element={<SignUp />} />
				</Route>
				<Route path="/signin" element={<SignIn />}>
					<Route element={<SignIn />} />

				</Route> */}
        <Route
          path="/flightbookingtab"
          element={<ProtectedRoute Component={Flightbookingtab} />}
        />
        {/* <Route
          path="/mytrips"
          element={<ProtectedRoute Component={MyTrips} />}
        /> */}
      </Routes>
      <Footer />
      <Box
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
            icon={<FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />}
          />
          <BottomNavigationAction
            label="Hotels"
            icon={<HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />}
          />
          <BottomNavigationAction
            label="My Trips"
            icon={
              <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
            }
          />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default App;
