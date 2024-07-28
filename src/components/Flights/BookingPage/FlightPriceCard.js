import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FlightPriceCard = () => {
  const flightData = JSON.parse(localStorage.getItem("flightData"));
  const ticketPrice = flightData[0].ticketPrice;

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="error" sx={{ fontWeight: "bold" }}>
          1 seat left
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 1 }}>
          Total price
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#000", marginTop: 1 }}
        >
          ₹{ticketPrice}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          1 adult
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Base fare (1 traveller)
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            ₹{ticketPrice - ticketPrice / 10}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Taxes and fees
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            ₹{ticketPrice / 10 + 100}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Discounts
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "green" }}
          >
            -₹100
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            backgroundColor: "#ffebee",
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Pay in 3 interest-free EMIs
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ₹{ticketPrice / 3}/mo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            with your credit card
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlightPriceCard;
