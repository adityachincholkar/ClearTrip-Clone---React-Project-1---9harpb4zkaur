// import { useEffect, useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// function LocationInput() {
//   const [locationData, setLocationData] = useState([]);
//   const fetchLocations = async () => {
//     const projectID = "9harpb4zkaur";
//     const url =
//       "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID: projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("HotelLocationData:", data.data.cities);
//       setLocationData(data.data.cities);
//     } catch (error) {
//       console.error("Error fetching airport data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   return (
//     <Autocomplete
//       placeholder="Enter city"
//       disablePortal
//       id="combo-box-demo"
//       options={locationData.map((city) => city.cityState)}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="City" />}
//     />
//   );
// }

// export default LocationInput;
// import { useEffect, useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InputAdornment from "@mui/material/InputAdornment";

// function LocationInput() {
//   const [locationData, setLocationData] = useState([]);

//   const fetchLocations = async () => {
//     const projectID = "9harpb4zkaur";
//     const url =
//       "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID: projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("HotelLocationData:", data.data.cities);
//       setLocationData(data.data.cities);
//     } catch (error) {
//       console.error("Error fetching airport data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   return (
//     <Autocomplete
//       color="grey"
//       disablePortal
//       id="combo-box-demo"
//       options={locationData.map((city) => city.cityState)}
//       sx={{ maxWidth: 650 }} // Adjust the width here
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="City"
//           InputProps={{
//             ...params.InputProps,
//             startAdornment: (
//               <InputAdornment position="start">
//                 <LocationOnIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// }

// export default LocationInput;
// import { useEffect, useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InputAdornment from "@mui/material/InputAdornment";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   option: {
//     "&[aria-selected='true']": {
//       backgroundColor: "#FF4F17 !important",
//       color: "white",
//     },
//   },
// });

// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "black",
//             },
//             "&:hover fieldset": {
//               borderColor: "black",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "black",
//             },
//           },
//         },
//       },
//     },
//   },
// });

// function LocationInput() {
//   const [locationData, setLocationData] = useState([]);
//   const classes = useStyles();

//   const fetchLocations = async () => {
//     const projectID = "9harpb4zkaur";
//     const url =
//       "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID: projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("HotelLocationData:", data.data.cities);
//       setLocationData(data.data.cities);
//     } catch (error) {
//       console.error("Error fetching airport data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={locationData.map((city) => city.cityState)}
//         sx={{ width: 400 }} // Adjust the width here
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="City"
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOnIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         )}
//         classes={{ option: classes.option }}
//       />
//     </ThemeProvider>
//   );
// }

// export default LocationInput;
// import { useEffect, useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InputAdornment from "@mui/material/InputAdornment";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import MapIcon from "@mui/icons-material/Map";
// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "black",
//             },
//             "&:hover fieldset": {
//               borderColor: "black",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "black",
//             },
//           },
//         },
//       },
//     },
//   },
// });

// const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
//   "& .MuiAutocomplete-option[aria-selected='true']": {
//     backgroundColor: "#FF4F17",
//     color: "white",
//   },
// }));

// function LocationInput() {
//   const [locationData, setLocationData] = useState([]);
//   const [focused, setFocused] = useState(false);

//   const fetchLocations = async () => {
//     const projectID = "9harpb4zkaur";
//     const url =
//       "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID: projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("HotelLocationData:", data.data.cities);
//       setLocationData(data.data.cities);
//     } catch (error) {
//       console.error("Error fetching airport data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CustomAutocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={locationData.map((city) => city.cityState)}
//         sx={{ maxWidth: "500px" }} // Adjust the width here
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="City"
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOnIcon
//                     style={{ color: focused ? "#FF4F17" : "inherit" }}
//                   />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         )}
//       />
//     </ThemeProvider>
//   );
// }

// export default LocationInput;
// import { useEffect, useState } from "react";
// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InputAdornment from "@mui/material/InputAdornment";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import MapIcon from "@mui/icons-material/Map";
// import Box from "@mui/material/Box";
// import { useSearchParams } from "react-router-dom";

// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "black",
//             },
//             "&:hover fieldset": {
//               borderColor: "black",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "black",
//             },
//           },
//         },
//       },
//     },
//   },
// });

// const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
//   "& .MuiAutocomplete-option[aria-selected='true']": {
//     backgroundColor: "#FF4F17",
//     color: "white",
//   },
// }));

// function LocationInput({ setSelectedLocation }) {
//   const [locationData, setLocationData] = useState([]);
//   const [focused, setFocused] = useState(false);
//   const [searchParams] = useSearchParams();
//   const hotelLocation = searchParams.get("hotelLocation") || "";
//   const fetchLocations = async () => {
//     const projectID = "9harpb4zkaur";
//     const url =
//       "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

//     try {
//       const response = await fetch(url, {
//         headers: {
//           projectID: projectID,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("HotelLocationData:", data.data.cities);
//       setLocationData(data.data.cities);
//     } catch (error) {
//       console.error("Error fetching airport data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CustomAutocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={locationData.map((city) => city.cityState)}
//         value={hotelLocation}
//         onChange={(event, newValue) => setSelectedLocation(newValue)}
//         sx={{ maxWidth: "526px", minWidth: "200px" }} // Adjust the width here
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="City"
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOnIcon
//                     style={{ color: focused ? "#FF4F17" : "inherit" }}
//                   />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         )}
//         renderOption={(props, option) => (
//           <Box component="li" {...props}>
//             <MapIcon style={{ marginRight: 8 }} />
//             {option}
//           </Box>
//         )}
//       />
//     </ThemeProvider>
//   );
// }

// export default LocationInput;
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import MapIcon from "@mui/icons-material/Map";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        },
      },
    },
  },
});

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiAutocomplete-option[aria-selected='true']": {
    backgroundColor: "#FF4F17",
    color: "white",
  },
}));

function LocationInput({ setSelectedLocation }) {
  const [locationData, setLocationData] = useState([]);
  const [focused, setFocused] = useState(false);
  const [searchParams] = useSearchParams();
  const hotelLocation = searchParams.get("hotelLocation") || "";

  const fetchLocations = async () => {
    const projectID = "9harpb4zkaur";
    const url =
      "https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40";

    try {
      const response = await fetch(url, {
        headers: {
          projectID: projectID,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("HotelLocationData:", data.data.cities);
      setLocationData(data.data.cities);
    } catch (error) {
      console.error("Error fetching airport data:", error.message);
    }
  };

  useEffect(() => {
    console.log("URL Hotel Location:", hotelLocation);
    fetchLocations();
  }, [hotelLocation]);

  return (
    <ThemeProvider theme={theme}>
      <CustomAutocomplete
        disablePortal
        id="combo-box-demo"
        options={locationData.map((city) => city.cityState)}
        value={hotelLocation}
        onChange={(event, newValue) => setSelectedLocation(newValue)}
        sx={{ maxWidth: "526px", minWidth: "200px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon
                    style={{ color: focused ? "#FF4F17" : "inherit" }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <MapIcon style={{ marginRight: 8 }} />
            {option}
          </Box>
        )}
      />
    </ThemeProvider>
  );
}

export default LocationInput;
