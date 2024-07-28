import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f77728",
          "&:hover": { backgroundColor: "#e66a1e" },
        }}
      >
        Search flights
      </Button>
    </Stack>
  );
}
