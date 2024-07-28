import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
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
    </>
  );
}

export default App;
