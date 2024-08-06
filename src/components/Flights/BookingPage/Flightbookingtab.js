// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/material";
// import SelectedFlightCard from "./SelectedFlightCard";
// // import FlightMoreDetails from "../FlightResults/HorizontalComponents/FlightMoreDetails";
// import FlightMoreDetails from "./FlightMoreDetails";
// import { useState, useEffect } from "react";
// import FlightPriceCard from "./FlightPriceCard";
// import MobileEmailForm from "./MobileEmailForm";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import { DoneAll } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const steps = ["Review your Itinerary", "Add contact details"];

// export default function Flightbookingtab() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [flightData, setFlightData] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {});

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("flightData")) || [];
//     if (data.length > 0) {
//       setFlightData(data[0]); // Assume only the latest flight data is stored
//     }
//   }, []);

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     if (activeStep === steps.length - 1) {
//       console.log("hi adi");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     navigate("/mytrips");
//   };

//   return (
//     <div>
//       <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
//         <Box sx={{ width: "100%" }} flex={3}>
//           <Stepper activeStep={activeStep}>
//             {steps.map((label, index) => {
//               const stepProps = {};
//               const labelProps = {};
//               if (isStepOptional(index)) {
//                 labelProps.optional = (
//                   <Typography variant="caption">Optional</Typography>
//                 );
//               }
//               if (isStepSkipped(index)) {
//                 stepProps.completed = false;
//               }
//               return (
//                 <Step key={label} {...stepProps}>
//                   <StepLabel {...labelProps}>{label}</StepLabel>
//                 </Step>
//               );
//             })}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography sx={{ mt: 3, mb: 1, ml: 1 }}>
//                 Booking confirmed! <DoneAll />
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Box sx={{ flex: "1 1 auto" }} />
//                 <Button onClick={handleReset}>View Bookings</Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <Typography sx={{ mt: 2, mb: 1 }}>
//                 {activeStep + 1 === 1 && flightData ? (
//                   <FlightMoreDetails />
//                 ) : (
//                   <MobileEmailForm />
//                 )}
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1 }}
//                 >
//                   Back
//                 </Button>
//                 <Box sx={{ flex: "1 1 auto" }} />

//                 <Button onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? "Confirm booking" : "Next"}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//         <Box flex={1}>
//           <FlightPriceCard />
//         </Box>
//       </Stack>
//     </div>
//   );
// }
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/material";
// import SelectedFlightCard from "./SelectedFlightCard";
// import FlightMoreDetails from "./FlightMoreDetails";
// import { useState, useEffect } from "react";
// import FlightPriceCard from "./FlightPriceCard";
// import MobileEmailForm from "./MobileEmailForm";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const steps = ["Review your Itinerary", "Add contact details"];

// export default function Flightbookingtab() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [flightData, setFlightData] = useState([]);
//   const navigate = useNavigate();
//   const token = JSON.parse(localStorage.getItem("userdetails"));
//   const [searchParams] = useSearchParams();
//   const date = searchParams.get("date");
//   const dateObj = new Date(date.date);
//   const flightDataa = JSON.parse(localStorage.getItem("flightData"));

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("flightData")) || [];
//     if (data.length > 0) {
//       setFlightData(data[0]); // Assume only the latest flight data is stored
//     }
//   }, []);

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = async () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     if (activeStep === steps.length - 1) {
//       // Call the API to book the flight
//       try {
//         const response = await fetch(
//           "https://academics.newtonschool.co/api/v1/bookingportals/booking",
//           {
//             method: "POST",
//             headers: {
//               Authorization:
//                 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODEwNThlZjZkYjU4YzkwZDkzNjllMSIsImlhdCI6MTcyMTIyMjY5OCwiZXhwIjoxNzUyNzU4Njk4fQ.KECqmnUDQmVlKvvwGjAnYw0_bSCf7ydXD9lxIZzEza8",
//               projectID: "9harpb4zkaur",
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               bookingType: "flight",
//               bookingDetails: {
//                 flighId: "AI001-AMDNAG-565", // Adjust this based on your data structure
//                 startDate: "2023-10-09T10:03:53.554+00:00", // Adjust this based on your data structure
//                 endDate: "2023-10-09T10:03:53.554+00:00", // Adjust this based on your data structure
//               },
//             }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         console.log("Booking successful:", result);
//         // Navigate to the booking confirmation page or show a success message
//       } catch (error) {
//         console.error("Booking failed:", error);
//         // Handle the error appropriately
//       }
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     navigate("/mytrips");
//   };

//   return (
//     <div>
//       <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
//         <Box sx={{ width: "100%" }} flex={3}>
//           <Stepper activeStep={activeStep}>
//             {steps.map((label, index) => {
//               const stepProps = {};
//               const labelProps = {};
//               if (isStepOptional(index)) {
//                 labelProps.optional = (
//                   <Typography variant="caption">Optional</Typography>
//                 );
//               }
//               if (isStepSkipped(index)) {
//                 stepProps.completed = false;
//               }
//               return (
//                 <Step key={label} {...stepProps}>
//                   <StepLabel {...labelProps}>{label}</StepLabel>
//                 </Step>
//               );
//             })}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography sx={{ mt: 3, mb: 1, ml: 1 }}>
//                 Booking confirmed! <DoneAllIcon />
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Box sx={{ flex: "1 1 auto" }} />
//                 <Button onClick={handleReset}>View Bookings</Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <Typography sx={{ mt: 2, mb: 1 }}>
//                 {activeStep + 1 === 1 && flightData ? (
//                   <FlightMoreDetails />
//                 ) : (
//                   <MobileEmailForm />
//                 )}
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1 }}
//                 >
//                   Back
//                 </Button>
//                 <Box sx={{ flex: "1 1 auto" }} />

//                 <Button onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? "Confirm booking" : "Next"}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//         <Box flex={1}>
//           <FlightPriceCard />
//         </Box>
//       </Stack>
//     </div>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import FlightMoreDetails from "./FlightMoreDetails";
import { useState, useEffect } from "react";
import FlightPriceCard from "./FlightPriceCard";
import MobileEmailForm from "./MobileEmailForm";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";

const steps = ["Review your Itinerary", "Add contact details"];

export default function Flightbookingtab() {
  const [value, setValue] = useState(0);
  // const navigate = useNavigate(); // Initialize the useNavigate hook
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [flightData, setFlightData] = useState([]);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userdetails"));
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const flightDataa = JSON.parse(localStorage.getItem("flightData"));

  const token1 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODEwNThlZjZkYjU4YzkwZDkzNjllMSIsImlhdCI6MTcyMTIyMjY5OCwiZXhwIjoxNzUyNzU4Njk4fQ.KECqmnUDQmVlKvvwGjAnYw0_bSCf7ydXD9lxIZzEza8";

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // Define your navigation paths based on the selected value
    switch (newValue) {
      case 0:
        navigate("/"); // Navigate to Flights
        break;
      case 1:
        navigate("/hotels"); // Navigate to Hotels
        break;
      case 2:
        navigate("/mytrips"); // Navigate to My Trips
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("flightData")) || [];
    if (data.length > 0) {
      setFlightData(data[0]); // Assume only the latest flight data is stored
    }
  }, []);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1) {
      // Call the API to book the flight
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/bookingportals/booking",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.token}`,
              // projectID: "4xh7gn2pv8it",
              projectID: "9harpb4zkaur",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              bookingType: "flight",
              bookingDetails: {
                flightId: `${flightDataa[0]._id}`, // Adjust this based on your data structure
                startDate: "2025-10-09T10:03:53.554+00:00", // Ensure date is in the correct format
                endDate: "2025-10-09T10:04:53.554+00:00", // Ensure date is in the correct format
              },
            }),
          }
        );

        if (!response.ok) {
          // Check for specific error status codes and handle accordingly
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const result = await response.json();
        console.log("Booking successful:", result);
        // Navigate to the booking confirmation page or show a success message
      } catch (error) {
        console.error("Booking failed:", error);
        alert(`Booking failed: ${error.message}`);
        // Handle the error appropriately
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    navigate("/mytrips");
  };

  return (
    <div>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        <Box sx={{ width: "100%" }} flex={3}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 3, mb: 1, ml: 1 }}>
                Booking confirmed! <DoneAllIcon />
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>View Bookings</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep + 1 === 1 && flightData ? (
                  <FlightMoreDetails />
                ) : (
                  <MobileEmailForm />
                )}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Confirm booking" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
        <Box flex={1} sx={{ mb: 10 }}>
          <FlightPriceCard />
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "fixed",

            bottom: 0,
            left: 0,
            zIndex: 1000,
            boxShadow: 3,
            display: { xs: "block", sm: "none" },
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleNavigationChange}
          >
            <BottomNavigationAction
              label="Flights"
              icon={
                <FlightIcon sx={{ fontSize: 20, ml: 1, mr: 1.2, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="Hotels"
              icon={
                <HotelIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
            <BottomNavigationAction
              label="My Trips"
              icon={
                <LuggageIcon sx={{ fontSize: 20, ml: 1, mr: 1.5, my: 0.8 }} />
              }
            />
          </BottomNavigation>
        </Box>
      </Stack>
    </div>
  );
}
