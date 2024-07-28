// import React from "react";
// import { Box, Container, Typography, Stack } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

// function SuggestedByPeople() {
//   return (
//     <Container sx={{ mt: 4, mb: 4, mx: 0 }}>
//       <Box
//         sx={{
//           border: "1px solid #eee",
//           borderRadius: "8px",
//           p: 2,
//           backgroundColor: "#fff",
//         }}
//       >
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <LocationOnIcon sx={{ color: "#f44336" }} />
//           <Box>
//             <Typography variant="h6" component="div">
//               Central Location
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               The guest highlights the excellent location of the accommodation,
//               with a variety of restaurants and markets in close proximity.
//             </Typography>
//           </Box>
//         </Stack>
//       </Box>
//       <Box sx={{ mt: 2 }}>
//         <Typography variant="caption" sx={{ color: "text.secondary" }}>
//           AI generated highlights from recent guest reviews
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           border: "1px solid #eee",
//           borderRadius: "8px",
//           p: 2,
//           mt: 2,
//           backgroundColor: "#fff",
//         }}
//       >
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <FreeBreakfastIcon sx={{ color: "#4caf50" }} />
//           <Box>
//             <Typography variant="h6" component="div">
//               Free breakfast on select plans
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               Some plans include free breakfast
//             </Typography>
//           </Box>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

// export default SuggestedByPeople;
import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

function SuggestedByPeople() {
  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
        mx: "auto",
        maxWidth: "100% !important",
        padding: "0 !important",
      }}
    >
      <Box
        sx={{
          border: "1px solid #eee",
          borderRadius: "8px",
          p: 2,
          backgroundColor: "#fff",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <LocationOnIcon sx={{ color: "#f44336" }} />
          <Box>
            <Typography variant="h6" component="div">
              Central Location
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The guest highlights the excellent location of the accommodation,
              with a variety of restaurants and markets in close proximity.
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          AI generated highlights from recent guest reviews
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #eee",
          borderRadius: "8px",
          p: 2,
          mt: 2,
          backgroundColor: "#fff",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <FreeBreakfastIcon sx={{ color: "#4caf50" }} />
          <Box>
            <Typography variant="h6" component="div">
              Free breakfast on select plans
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Some plans include free breakfast
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default SuggestedByPeople;
