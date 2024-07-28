import React from "react";
import { useSearchParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function StopsSidebarFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateURLWithStops = (stops) => {
    if (stops !== "") {
      searchParams.set("stops", stops);
    } else {
      searchParams.delete("stops");
    }
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          border: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "&:hover": {
              ".MuiSvgIcon-root": {
                color: "lightblue",
              },
            },
            margin: 0,
          }}
        >
          <Typography variant="h6" sx={{ margin: 0 }}>
            Stops
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("stops") === "0"}
                onChange={(e) =>
                  updateURLWithStops(e.target.checked ? "0" : "")
                }
                sx={{
                  "&.Mui-checked": {
                    color: "var(--div1-color)",
                  },
                  "&:hover": {
                    border: "1px solid var(--div1-color)",
                  },
                }}
              />
            }
            label="Non-stop"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("stops") === "1"}
                onChange={(e) =>
                  updateURLWithStops(e.target.checked ? "1" : "")
                }
                sx={{
                  "&.Mui-checked": {
                    color: "var(--div1-color)",
                  },
                  "&:hover": {
                    border: "1px solid var(--div1-color)",
                  },
                }}
              />
            }
            label="1 Stop"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("stops") === "2"}
                onChange={(e) =>
                  updateURLWithStops(e.target.checked ? "2" : "")
                }
                sx={{
                  "&.Mui-checked": {
                    color: "var(--div1-color)",
                  },
                  "&:hover": {
                    border: "1px solid var(--div1-color)",
                  },
                }}
              />
            }
            label="2 Stops"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default StopsSidebarFilter;
