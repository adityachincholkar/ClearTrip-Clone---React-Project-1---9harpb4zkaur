import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

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
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const dateString = urlParams.get("date");
    if (dateString) {
      const parsedDate = dayjs(dateString);
      if (parsedDate.isValid()) {
        setSelectedDate(parsedDate);
      }
    }
  }, [location]);

  const handleOpenCalendar = () => {
    setOpen(true);
  };

  const handleCloseCalendar = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // const formattedDate = date.format("ddd-(D)/(M)/(YYYY)");
    setDate(date); // Update the date in the parent component
    // const url = new URL(window.location.href);
    // url.searchParams.set("date", formattedDate);
    // window.history.pushState({}, "", url);
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
                  minDate={dayjs()}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
}
