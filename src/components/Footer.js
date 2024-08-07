// // Footer.js
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white py-4 mt-auto">
//       <Container>
//         <Row>
//           <Col xs={12} sm={4}>
//             <h6>Company</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#" className="text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={12} sm={4}>
//             <h6>Services</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#" className="text-white">
//                   Flights
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Hotels
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   My Trips
//                 </a>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={12} sm={4}>
//             <h6>Follow Us</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#" className="text-white">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-white">
//                   Instagram
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col className="text-center">
//             <small>
//               &copy; {new Date().getFullYear()} Your Company Name. All rights
//               reserved.
//             </small>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
// Footer.js
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto mb-10">
      <Container>
        <Row>
          <Col className="text-center">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="/" className="text-white">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  Features
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  Pricing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  FAQs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Cleartrip, Inc</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
