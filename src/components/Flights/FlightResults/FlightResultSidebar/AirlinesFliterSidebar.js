import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSearchParams } from "react-router-dom";
export default function AirlinesFliterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateURLWithStops = (airlines) => {
    if (airlines !== "") {
      searchParams.set("airlines", airlines);
    } else {
      searchParams.delete("airlines");
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
          }}
        >
          <Typography variant="h6">Airlines</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  searchParams.get("airlines") === "65144a1b664a43628887c45f"
                }
                onChange={(e) =>
                  updateURLWithStops(
                    e.target.checked ? "65144a1b664a43628887c45f" : ""
                  )
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
            label="Air India "
            sx={{ color: "var(--div1-color)" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  searchParams.get("airlines") === "65144a1b664a43628887c45e"
                }
                onChange={(e) =>
                  updateURLWithStops(
                    e.target.checked ? "65144a1b664a43628887c45e" : ""
                  )
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
            label="Air India Express"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  searchParams.get("airlines") === "65144a1b664a43628887c460"
                }
                onChange={(e) =>
                  updateURLWithStops(
                    e.target.checked ? "65144a1b664a43628887c460" : ""
                  )
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
            label="IndiGo"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={
                  searchParams.get("airlines") === "65144a1b664a43628887c45d"
                }
                onChange={(e) =>
                  updateURLWithStops(
                    e.target.checked ? "65144a1b664a43628887c45d" : ""
                  )
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
            label="SpiceJet"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={
                  searchParams.get("airlines") === "65144a1b664a43628887c461"
                }
                onChange={(e) =>
                  updateURLWithStops(
                    e.target.checked ? "65144a1b664a43628887c461" : ""
                  )
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
            label="Vistara"
            sx={{ color: "var(--div1-color)", marginBottom: 0 }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
