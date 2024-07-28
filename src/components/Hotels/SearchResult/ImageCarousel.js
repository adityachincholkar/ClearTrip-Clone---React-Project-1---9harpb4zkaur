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
// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// function ImageCarousel({ hotel }) {
//   return (
//     <Carousel interval={null} controls={true} indicators={false} sx={{ p: 1 }}>
//       {hotel.images.map((image, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-60 carousel-image"
//             src={image}
//             alt={`Slide ${index + 1}`}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default ImageCarousel;
import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { useNavigate, useSearchParams } from "react-router-dom";

function ImageCarousel({ hotel }) {
  const [searchParams] = useSearchParams();
  const CheckIndate = searchParams.get("CheckIndate");
  const CheckOutdate = searchParams.get("CheckOutdate");
  const navigate = useNavigate();
  const handelClick = (id) => {
    navigate(
      `/SelectedHotelInfo?hotelId=${id}&CheckIndate=${CheckIndate}&CheckOutdate=${CheckOutdate}`
    );
  };
  return (
    <Carousel interval={null} controls={true} indicators={false} sx={{ p: 1 }}>
      {hotel.images.map((image, index) => (
        <Carousel.Item key={index} onClick={() => handelClick(hotel._id)}>
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt={`Slide ${index + 1}`}
            // onClick={() => handelClick(hotel._id)}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
