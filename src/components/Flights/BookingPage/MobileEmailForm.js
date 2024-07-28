import React from "react";
import {
  TextField,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";

const MobileEmailForm = () => {
  const [countryCode, setCountryCode] = React.useState("+91");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ maxWidth: 400 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Code</InputLabel>
            <Select
              value={countryCode}
              onChange={handleCountryCodeChange}
              label="Code"
            >
              <MenuItem value="+91">+91</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Mobile number"
            variant="outlined"
            type="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            type="email"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileEmailForm;
