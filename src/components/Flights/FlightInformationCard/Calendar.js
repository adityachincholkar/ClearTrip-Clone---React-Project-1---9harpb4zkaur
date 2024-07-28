// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import "../../styles/Calendar.css";

// // SVG calendar icon component
// const CalendarIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     style={{ marginRight: "8px" }}
//   >
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );

// export default function Calendar({ setDate }) {
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(dayjs());

//   useEffect(() => {
//     // Set the initial date when the component mounts
//     setDate(dayjs());
//   }, [setDate]);

//   const handleOpenCalendar = () => {
//     setOpen(true);
//   };

//   const handleCloseCalendar = () => {
//     setOpen(false);
//   };

//   // const handleDateChange = (date) => {
//   //   setSelectedDate(date);
//   //   // const formattedDate = date; // Updated to "Mon-(D)/(M)/(YYYY)" format
//   //   setDate(date);

//   //   // Update the URL parameter
//   //   // const url = new URL(window.location.href);
//   //   // url.searchParams.set("date", formattedDate);
//   //   // window.history.pushState({}, "", url);

//   //   handleCloseCalendar(); // Close the calendar after selecting a date
//   // };

//   const handleDateChange = (date) => {
//     const utcDate = dayjs(date).utc().startOf("day");
//     setSelectedDate(utcDate);
//     setDate(utcDate);
//     handleCloseCalendar();
//   };

//   const handleClickOutside = (event) => {
//     if (open && !event.target.closest(".calendar-container")) {
//       handleCloseCalendar();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [open]);

//   const placeholderText = selectedDate.format("dddd, MMMM D"); // Placeholder text format

//   return (
//     <div className="calendar-container">
//       <div className="input-with-icon">
//         <label htmlFor="calendar">
//           <CalendarIcon />
//         </label>
//         <input
//           type="text"
//           placeholder={placeholderText}
//           name="calendar"
//           value={placeholderText} // Ensure input remains controlled
//           readOnly // Make input read-only to prevent direct editing
//           onClick={handleOpenCalendar}
//         />
//       </div>
//       {open && (
//         <div className="calendar-popup">
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={["DateCalendar"]}>
//               <DemoItem>
//                 <DateCalendar
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   minDate={dayjs()} // Disable previous dates
//                 />
//               </DemoItem>
//             </DemoContainer>
//           </LocalizationProvider>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import utc from "dayjs-plugin-utc"; // Import the utc plugin
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import "../../styles/Calendar.css";

// dayjs.extend(utc); // Extend dayjs with the utc plugin

// // SVG calendar icon component
// const CalendarIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     style={{ marginRight: "8px" }}
//   >
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );

// export default function Calendar({ setDate }) {
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(
//     dayjs().utc().startOf("day")
//   );

//   useEffect(() => {
//     // Set the initial date when the component mounts
//     setDate(dayjs().utc().startOf("day"));
//   }, [setDate]);

//   const handleOpenCalendar = () => {
//     setOpen(true);
//   };

//   const handleCloseCalendar = () => {
//     setOpen(false);
//   };

//   const handleDateChange = (date) => {
//     const utcDate = dayjs(date).utc().startOf("day");
//     setSelectedDate(utcDate);
//     setDate(utcDate);
//     handleCloseCalendar();
//   };

//   const handleClickOutside = (event) => {
//     if (open && !event.target.closest(".calendar-container")) {
//       handleCloseCalendar();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [open]);

//   const placeholderText = selectedDate.format("dddd, MMMM D"); // Placeholder text format

//   return (
//     <div className="calendar-container">
//       <div className="input-with-icon">
//         <label htmlFor="calendar">
//           <CalendarIcon />
//         </label>
//         <input
//           type="text"
//           placeholder={placeholderText}
//           name="calendar"
//           value={placeholderText} // Ensure input remains controlled
//           readOnly // Make input read-only to prevent direct editing
//           onClick={handleOpenCalendar}
//         />
//       </div>
//       {open && (
//         <div className="calendar-popup">
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={["DateCalendar"]}>
//               <DemoItem>
//                 <DateCalendar
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   minDate={dayjs().utc().startOf("day")} // Disable previous dates
//                 />
//               </DemoItem>
//             </DemoContainer>
//           </LocalizationProvider>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "../../styles/Calendar.css";

dayjs.extend(utc);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "8px" }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function Calendar({ setDate }) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().utc().startOf("day")
  );

  useEffect(() => {
    setDate(dayjs().utc().startOf("day"));
  }, [setDate]);

  const handleOpenCalendar = () => {
    setOpen(true);
  };

  const handleCloseCalendar = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    const utcDate = dayjs(date).utc().startOf("day");
    setSelectedDate(utcDate);
    setDate(utcDate);
    handleCloseCalendar();
  };

  const handleClickOutside = (event) => {
    if (open && !event.target.closest(".calendar-container")) {
      handleCloseCalendar();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const placeholderText = selectedDate.format("dddd, MMMM D");

  return (
    <div className="calendar-container">
      <div className="input-with-icon">
        <label htmlFor="calendar">
          <CalendarIcon />
        </label>
        <input
          type="text"
          placeholder={placeholderText}
          name="calendar"
          value={placeholderText}
          readOnly
          onClick={handleOpenCalendar}
        />
      </div>
      {open && (
        <div className="calendar-popup">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar"]}>
              <DemoItem>
                <DateCalendar
                  value={selectedDate}
                  onChange={handleDateChange}
                  minDate={dayjs().utc().startOf("day")}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
}
