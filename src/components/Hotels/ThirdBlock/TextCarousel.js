import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../../styles/TextCarousel";
import { Box, Button, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import Offers from "../../Flights/Offers";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const offers = [
  {
    title: "Last Minute Deals!",
    description: "Upto 40% off on Hotels for check-ins today & tomorrow",
    // coupon: "Use Coupon code CTMHSPL",
    additionalInfo: "Know more",
  },
  {
    title: "No Cost EMI Offers!",
    description:
      "Pay Interest Free EMI with HDFC, ICICI, SBI, AXIS, KOTAK Bank Cards!",
    additionalInfo: "Know more",
  },
  {
    title: "Extra savings with Flipkart Axis bank cards!",
    description:
      "Get 4% unlimited cashback with Flipkart Axis Bank Credit Card",
    additionalInfo: "Know more",
  },
  {
    title: "Domestic hotel offer!",
    description: "Get upto 25% Off on hotels",
    coupon: "Use Coupon Code : CTHOTEL",
    additionalInfo: "Know more",
  },
  {
    title: "International Hotel Offer!",
    description: "Get up to ₹4,000 off on International Hotels",
    coupon: "Use Coupon Code : CTINTL",
    additionalInfo: "Know more",
  },
];

function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const StyledNavLink = styled(NavLink)`
    color: #36c;
    text-decoration: none; /* Optional: to remove underline */

    &:hover {
      color: #36c;
    }
  `;

  const carouselSettings = {
    autoPlay: false,
    infiniteLoop: false,
    showIndicators: false,
    showThumbs: false,
    showStatus: false,
    selectedItem: currentIndex,
    onChange: (index) => setCurrentIndex(index),
    renderArrowPrev: (onClickHandler, hasPrev, label) => null,
    renderArrowNext: (onClickHandler, hasNext, label) => null,
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const card = <React.Fragment></React.Fragment>;
  return (
    <Box>
      <Carousel {...carouselSettings}>
        {offers.map((offer, index) => (
          <div key={index}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: "600",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, Arial, sans-serif;",
              }}
            >
              {offer.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ fontWeight: "400" }}
            >
              {offer.description}
            </Typography>
            <p>
              <strong>{offer.coupon}</strong>
            </p>
            {offer.additionalInfo && (
              <StyledNavLink to="/offers">{offer.additionalInfo}</StyledNavLink>
            )}
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={goToPreviousSlide} style={navButtonStyle}>
          &lt;
        </button>
        {offers.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              margin: "0 5px",
              padding: "5px",
              cursor: "pointer",
              borderBottom:
                index === currentIndex ? "2px solid #000" : "2px solid #ccc",
            }}
          >
            &ndash;
          </span>
        ))}
        <button onClick={goToNextSlide} style={navButtonStyle}>
          &gt;
        </button>
      </div>
    </Box>
  );
}

const navButtonStyle = {
  margin: "0 10px",
  padding: "5px 10px",
  background: "none",
  color: "#000",
  border: "none",
  cursor: "pointer",
};

export default TextCarousel;
