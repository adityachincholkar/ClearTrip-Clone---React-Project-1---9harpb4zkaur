import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "../../styles/ThirdBlockOffers.css"; // Ensure you import the CSS file

function ImageCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchMoreOffers = async () => {
      const projectID = "9harpb4zkaur";
      const url = `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"HOTELS"}`;

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
        console.log("Fetched offers:", data.data.offers); // Log fetched offers
        setOffers(data.data.offers); // Assuming data.data.offers is the correct path
      } catch (error) {
        console.error("Error fetching flight offers:", error.message);
      }
    };

    fetchMoreOffers();
  }, []); // Empty dependency array ensures this runs only once

  const carouselSettings = {
    autoPlay: true,
    interval: 4000,
    infiniteLoop: true,
    showIndicators: false,
    showThumbs: false,
    showStatus: false,
  };

  return (
    <div className="carousel-container">
      <Carousel {...carouselSettings} key={offers.length}>
        {offers.map((offer, index) => (
          <div key={index} className="carousel-slide">
            <img
              className="d-block w-100 carousel-image"
              src={offer.heroUrl}
              alt={`Flight Offer ${index}`}
            />
            <div className="booking-info">
              <h5>{offer.lobDisplayText}</h5>
              <p>{offer.pTl}</p>
              <p>{offer.pTx}</p>
              <button className="book-now-link">{offer.ctaText}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
