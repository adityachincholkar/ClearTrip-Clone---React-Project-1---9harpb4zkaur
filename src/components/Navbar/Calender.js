// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import dayjs from "dayjs";
// import { Box } from "@mui/material";
// import { useSearchParams } from "react-router-dom";

// export default function Calendar() {
//   const today = dayjs();
//   const tomorrow = dayjs().add(1, "day");

//   const [value, setValue] = React.useState([today, tomorrow]);
//   const [searchParams] = useSearchParams();
//   let CheckIndate = searchParams.get("CheckIndate") || "";
//   let CheckOutdate = searchParams.get("CheckOutdate") || "";

//   React.useEffect(() => {
//     if (!CheckIndate && !CheckOutdate) {
//       CheckIndate = dayjs(dates[0]);
//       CheckOutdate = dayjs(dates[1]);
//       setValue([CheckIndate, CheckOutdate]);
//     }
//   }, [CheckIndate, CheckOutdate]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ width: 300 }}>
//         {" "}
//         {/* Set a fixed width to ensure consistent layout */}
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
import { useSearchParams } from "react-router-dom";

export default function Calendar() {
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  const [value, setValue] = React.useState([today, tomorrow]);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const checkInDate = searchParams.get("CheckIndate");
    const checkOutDate = searchParams.get("CheckOutdate");

    if (checkInDate && checkOutDate) {
      const parsedCheckInDate = dayjs(new Date(checkInDate));
      const parsedCheckOutDate = dayjs(new Date(checkOutDate));

      setValue([parsedCheckInDate, parsedCheckOutDate]);
    }
  }, [searchParams]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 300 }}>
        {" "}
        {/* Set a fixed width to ensure consistent layout */}
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            value={value}
            onChange={(newValue) => setValue(newValue)}
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
