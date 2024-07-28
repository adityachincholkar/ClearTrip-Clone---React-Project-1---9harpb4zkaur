import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function Destinations() {
  const offers = [
    {
      img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&h=300&fit=crop",
      DestinationName: "Goa",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?w=400&h=300&fit=crop",
      DestinationName: "Delhi",
    },
    {
      img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop",
      DestinationName: "Bangalore",
    },
    {
      img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=400&h=300&fit=crop",
      DestinationName: "Jaipur",
    },
    {
      img: "https://images.unsplash.com/photo-1578367507788-a6f03f53aa94?w=400&h=300&fit=crop",
      DestinationName: "Pattaya",
    },
  ];

  return (
    <Box>
      <Box sx={{ mt: 6, mb: 3 }}>
        <Typography gutterBottom variant="h4" component="div">
          Popular destinations
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        {offers.map((offer, index) => (
          <Card key={index} sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={offer.img}
                alt={offer.DestinationName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {offer.DestinationName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
