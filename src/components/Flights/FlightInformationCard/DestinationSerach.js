import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Grid } from "@mui/material";

export default function DestinationSearch({ setDestination }) {
  const [searchListOutput, setSearchListOutput] = useState([]);

  const fetchAirports = async () => {
    const projectID = "9harpb4zkaur";
    const url =
      "https://academics.newtonschool.co/api/v1/bookingportals/airport?limit=30";

    try {
      const response = await fetch(url, { headers: { projectID } });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Airport data:", data.data.airports);
      setSearchListOutput(data.data.airports);
    } catch (error) {
      console.error("Error fetching airport data:", error.message);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <FlightTakeoffIcon />
        </Grid>
        <Grid item xs>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={searchListOutput.map(
              (option) =>
                `${option.iata_code} - ${option.city}, ${option.country} - ${option.name}`
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where From?"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onChange={(event, newValue) => {
              // Extract the iata_code from the selected value
              const iataCode = newValue ? newValue.split(" - ")[0] : "";
              setDestination(iataCode);
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
