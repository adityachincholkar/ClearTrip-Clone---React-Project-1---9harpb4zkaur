// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import "../../styles/ThirdBlockOffers.css"; // Ensure you import the CSS file

// function ImageCarousel({ hotel }) {
//   const carouselSettings = {
//     autoPlay: false,
//     interval: 4000,
//     infiniteLoop: true,
//     showIndicators: false,
//     showThumbs: false,
//     showStatus: false,
//   };

//   return (
//     <div className="carousel-container">
//       <Carousel {...carouselSettings}>
//         {hotel.images.map((offer, index) => (
//           <div key={index} className="carousel-slide">
//             <img
//               className="d-block w-60 carousel-image"
//               src={offer}
//               alt={`Flight Offer ${index}`}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default ImageCarousel;
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ hoteImages }) {
  return (
    <Carousel interval={null} controls={true} sx={{ p: 1 }}>
      {hoteImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
