import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const offers = [
  {
    title: "Malaysia Airlines Offer!",
    description:
      "Save Up to 35% on Flights from Ahmedabad, Amritsar, and Trivandrum",
    coupon: "Use Coupon code CTMHSPL",
    additionalInfo: "Know more",
  },
  {
    title: "Malaysia Airlines Special Offer!",
    description: "Explore Malaysia with Flights Starting at ₹5,999!",
    coupon: "Use Coupon Code CTMHSPL",
  },
  {
    title: "Qantas Airways Special Offer!",
    description: "Exclusive fares + extra ₹10,000 off on Qantas flights!",
    coupon: "Use Coupon Code CTQANTAS",
    additionalInfo: "Know more",
  },
  {
    title: "Air India Special Business Class Offer!",
    description:
      "Enjoy up to 70%* discount on Air India Business Class bookings!",
    coupon: "Hurry, Book Now!",
  },
  {
    title: "Air India Special Offer!",
    description: "Save Up to ₹2,500 on Domestic Flights with Air India!",
    coupon: "Use Coupon Code CTAISPL",
  },
];

function ThirdBlockMoreOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div>
      <Carousel {...carouselSettings}>
        {offers.map((offer, index) => (
          <div key={index}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p>
              <strong>{offer.coupon}</strong>
            </p>
            {offer.additionalInfo && <p>{offer.additionalInfo}</p>}
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
    </div>
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

export default ThirdBlockMoreOffers;
