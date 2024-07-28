import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Rating,
  List,
  ListItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImageCarousel from "./ImageCarouselC";

import StarIcon from "@mui/icons-material/Star";
import SuggestedByPeople from "./SuggestedByPeople";
import { useAuthContext } from "../../context/AuthorisationContext";

function SelectedHotelInfo() {
  const [searchParams] = useSearchParams();
  const hotelId = searchParams.get("hotelId");
  const [hotelInfo, setHotelInfo] = useState(null);
  const [hotelImages, setHotelImages] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const authContextStore = useAuthContext();
  const { isLoggedIn, handleOpen } = authContextStore;
  const token = JSON.parse(localStorage.getItem("userdetails"));

  const navigate = useNavigate();
  const CheckIndate = searchParams.get("CheckIndate");
  const CheckOutdate = searchParams.get("CheckOutdate");

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

  const handelClick = () => {
    const loggedIn = localStorage.getItem("userdetails");
    console.log(loggedIn);
    if (loggedIn) {
      handleNext();
      navigate("/mytrips");
    } else {
      handleOpen();
    }
  };
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const value = 3.5;

  useEffect(() => {
    const fetchHotelInfo = async () => {
      const projectID = "9harpb4zkaur";
      const url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`;

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
        console.log("SelectedHotelInfo", data.data);
        setHotelImages(data.data.images);
        setHotelInfo(data.data);
        setAmenities(data.data.amenities);
      } catch (error) {
        console.error("Error fetching hotel info:", error.message);
      }
    };

    if (hotelId) {
      fetchHotelInfo();
    }
  }, [hotelId]);

  if (!hotelInfo) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Box flex={1}>
          <Box>
            <Typography variant="h3">{hotelInfo.name}</Typography>

            <Typography variant="h6" sx={{ color: "rgb(128, 128, 128)" }}>
              {Math.floor(hotelInfo.rating)}-star hotel | {hotelInfo.location}
            </Typography>
            <Box sx={{ display: "flex", gap: "0.6px" }}>
              <Typography sx={{ color: "rgb(17, 166, 112)" }}>
                {hotelInfo.rating}/5
              </Typography>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={hotelInfo.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                  size="large"
                />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box>
              </Box>
            </Box>
            <Box>
              <SuggestedByPeople />
            </Box>
          </Box>
        </Box>
        <Box flex={1}>
          <ImageCarousel hoteImages={hotelImages} />
          <Container
            sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ display: "inline-block", mr: 0.5 }}
                >
                  ₹{Math.round(hotelInfo.avgCostPerNight)}
                </Typography>
                <Typography variant="body1" sx={{ display: "inline-block" }}>
                  + ₹{hotelInfo.rooms[0].costDetails.taxesAndFees} taxes & fees
                  / night
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: "line-through",
                    mr: 0.5,
                    color: "grey",
                  }}
                >
                  ₹
                  {Math.round(
                    hotelInfo.avgCostPerNight + hotelInfo.avgCostPerNight * 0.1
                  )}
                </Typography>
                <Typography variant="body1" sx={{ color: "green", mr: 0.5 }}>
                  10% OFF
                </Typography>
                <Typography variant="body1">
                  + Additional bank discounts
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#" }}
                onClick={() => handelClick()}
              >
                Book
              </Button>
            </Box>
          </Container>
        </Box>
      </Stack>
    </Container>
  );
}

export default SelectedHotelInfo;
