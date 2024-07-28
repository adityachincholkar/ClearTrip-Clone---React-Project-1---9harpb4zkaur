import PriceRatingFilter from "./PriceRatingFilter";
import { Box, Typography } from "@mui/material";
// import StarFilter from "./StarFilter";
import FilterCard from "./FilterCard";
// import StarFilter from "./StarFilter";
function Filters() {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Typography variant="h6" color="primary" sx={{ mt: 0.9 }}>
        All filters:
      </Typography>
      <PriceRatingFilter />
      {/* <StarFilter /> */}
      <FilterCard />
    </Box>
  );
}

export default Filters;
