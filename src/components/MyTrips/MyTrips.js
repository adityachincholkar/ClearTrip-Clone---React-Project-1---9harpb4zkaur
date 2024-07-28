import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FlightBookings from "./FlightBookings";
import HotelBookings from "./HotelBookings";

export default function MyTrips() {
  const [value, setValue] = useState(0);
  const [flightBookings, setFlightBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userdetails"));
    const fetchData = async () => {
      const projectID = "9harpb4zkaur";
      const url =
        "https://academics.newtonschool.co/api/v1/bookingportals/booking";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.token}`,
            projectID: projectID,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const result = await response.json();
        console.log("Booking data:", result);

        // Filter bookings based on type
        const flightBookings = result.data.filter(
          (booking) => booking.booking_type === "flight"
        );
        const hotelBookings = result.data.filter(
          (booking) => booking.booking_type === "hotel"
        );
        setFlightBookings(flightBookings);
        setHotelBookings(hotelBookings);
      } catch (error) {
        console.error("Fetching data failed:", error);
        alert(`Fetching data failed: ${error.message}`);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="My trips tabs">
        <Tab label="Flight bookings" />
        <Tab label="Hotel bookings" />
      </Tabs>

      {value === 0 && <FlightBookings bookings={flightBookings} />}
      {value === 1 && <HotelBookings bookings={hotelBookings} />}
    </div>
  );
}
