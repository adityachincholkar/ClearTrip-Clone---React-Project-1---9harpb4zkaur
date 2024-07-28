import React, { useState } from "react";
import "../../styles/SortOptions.css"; // Create this CSS file for SortOptions specific styles

function SortOptions({ setName, setValue }) {
  const [departure, setDeparture] = useState(0);
  const [duration, setDuration] = useState(0);
  const [arrival, setArrival] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSort = (type) => {
    let newValue;
    switch (type) {
      case "departureTime":
        newValue = departure === 1 ? -1 : 1;
        setDeparture(newValue);
        setDuration(0);
        setArrival(0);
        setPrice(0);
        break;
      case "duration":
        newValue = duration === 1 ? -1 : 1;
        setDuration(newValue);
        setDeparture(0);
        setArrival(0);
        setPrice(0);
        break;
      case "arrivalTime":
        newValue = arrival === 1 ? -1 : 1;
        setArrival(newValue);
        setDeparture(0);
        setDuration(0);
        setPrice(0);
        break;
      case "ticketPrice":
        newValue = price === 1 ? -1 : 1;
        setPrice(newValue);
        setDeparture(0);
        setDuration(0);
        setArrival(0);
        break;
      default:
        return;
    }
    setName(type);
    setValue(newValue);
  };

  return (
    <div className="sort-options-container">
      <div>Airlines</div>
      <div onClick={() => handleSort("departureTime")}>
        Departure {departure === 1 ? "▲" : departure === -1 ? "▼" : ""}
      </div>
      <div onClick={() => handleSort("duration")}>
        Duration {duration === 1 ? "▲" : duration === -1 ? "▼" : ""}
      </div>
      <div onClick={() => handleSort("arrivalTime")}>
        Arrival {arrival === 1 ? "▲" : arrival === -1 ? "▼" : ""}
      </div>
      <div onClick={() => handleSort("ticketPrice")}>
        Price {price === 1 ? "▲" : price === -1 ? "▼" : ""}
      </div>
    </div>
  );
}

export default SortOptions;
