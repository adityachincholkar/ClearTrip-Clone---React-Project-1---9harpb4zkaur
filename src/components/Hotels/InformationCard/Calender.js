// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import dayjs from "dayjs";
// import { Box } from "@mui/material";
// import { useSearchParams, useNavigate } from "react-router-dom";

// function formatDate(date) {
//   return date.format("DDMMYYYY");
// }

// export default function Calendar() {
//   const today = dayjs();
//   const tomorrow = dayjs().add(1, "day");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [value, setValue] = React.useState([today, tomorrow]);

//   React.useEffect(() => {
//     const startDate = formatDate(value[0]);
//     const endDate = formatDate(value[1]);
//     const dateParam = `${startDate},${endDate}`;

//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("date", dateParam);

//     navigate(`?${newParams.toString()}`, { replace: true });
//   }, [value, searchParams, navigate]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ width: 300 }}>
//         <DemoContainer components={["DateRangePicker"]}>
//           <DateRangePicker
//             localeText={{ start: "Check-in", end: "Check-out" }}
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//             minDate={today}
//             shouldDisableDate={(date, position) => {
//               if (position === "end" && value[0]) {
//                 return date.isBefore(value[0], "day");
//               }
//               return date.isBefore(today, "day");
//             }}
//           />
//         </DemoContainer>
//       </Box>
//     </LocalizationProvider>
//   );
// }
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

function formatDate(date) {
  return date;
}

export default function Calendar({ setCheckIndate, setCheckOutdate }) {
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [value, setValue] = React.useState([today, tomorrow]);

  React.useEffect(() => {
    const startDate = formatDate(value[0]);
    const endDate = formatDate(value[1]);
    const dateParam = `${startDate},${endDate}`;
    setCheckIndate(`${startDate}`);
    setCheckOutdate(`${endDate}`);
    // const newParams = new URLSearchParams(searchParams);
    // newParams.set("date", dateParam);

    // navigate(`?${newParams.toString()}`, { replace: true });
  }, [value, searchParams, navigate]);

  const handleDateChange = (newValue) => {
    const [newStart, newEnd] = newValue;

    // Check if the new start date is greater than or equal to the new end date
    if (newStart && newEnd && newStart.isAfter(newEnd, "day")) {
      // Update the end date to be one day after the start date
      const correctedEndDate = newStart.add(1, "day");
      setValue([newStart, correctedEndDate]);
    } else {
      setValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 300 }}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            value={value}
            onChange={handleDateChange}
            minDate={today}
            shouldDisableDate={(date, position) => {
              if (position === "end" && value[0]) {
                return date.isBefore(value[0], "day");
              }
              return date.isBefore(today, "day");
            }}
          />
        </DemoContainer>
      </Box>
    </LocalizationProvider>
  );
}
