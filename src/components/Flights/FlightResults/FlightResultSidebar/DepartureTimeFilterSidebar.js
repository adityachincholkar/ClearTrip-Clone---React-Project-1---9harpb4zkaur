import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSearchParams } from "react-router-dom";

function DepatureSidebarTimeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateURLWithDepatureTime = (depatureTime) => {
    if (depatureTime !== "") {
      searchParams.set("depatureTime", depatureTime);
    } else {
      searchParams.delete("depatureTime");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="depatureTime">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Depature Time</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("depatureTime") === "earlyMorning"}
                onChange={(e) =>
                  updateURLWithDepatureTime(
                    e.target.checked ? "earlyMorning" : ""
                  )
                }
              />
            }
            label="Early Morning 12am-8am"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("depatureTime") === "morning"}
                onChange={(e) =>
                  updateURLWithDepatureTime(e.target.checked ? "morning" : "")
                }
              />
            }
            label="Morning 8am-Noon"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("depatureTime") === "afternoon"}
                onChange={(e) =>
                  updateURLWithDepatureTime(e.target.checked ? "afternoon" : "")
                }
              />
            }
            label="Afternoon noon-4pm"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("depatureTime") === "evening"}
                onChange={(e) =>
                  updateURLWithDepatureTime(e.target.checked ? "evening" : "")
                }
              />
            }
            label="Evening 4pm-8pm"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={searchParams.get("depatureTime") === "night"}
                onChange={(e) =>
                  updateURLWithDepatureTime(e.target.checked ? "night" : "")
                }
              />
            }
            label="Night 8pm-12am"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DepatureSidebarTimeFilter;
