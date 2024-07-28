import { ImportExport } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

import { json, useSearchParams } from "react-router-dom";
import FlightCard from "./FlightCard";
import SortOptions from "./SortOptions";

const FlightsResultPage = () => {
  const [searchParams] = useSearchParams();
  const [flightsResultsData, setFlightsResultsData] = useState([]);
  const airlines = searchParams.get("airlines");
  const stopsValue = searchParams.get("stops");
  const departureTimeValue = searchParams.get("depatureTime");
  const ticketPriceLimitValue = searchParams.get("price");
  const source = searchParams.get("from");
  const destination = searchParams.get("to");
  const Fullday = searchParams.get("date");
  const day = Fullday ? Fullday.substring(0, 3) : null;
  const [name, setName] = useState("duration");
  const [value, setValue] = useState(-1);
  const [ticketPriceLimit, setticketPriceLimit] = useState("ticketPrice");
  const [lowerLimit, setlowerLimit] = useState("$lte");
  const [upperLimit, setUpperLimit] = useState("$gte");

  const [FligtDetailsId, setFligtDetailsId] = useState("");
  useEffect(
    () => {
      const fetchFlightData = async () => {
        if (!source || !destination || !day) {
          // Check for required parameters
          console.error("Missing required search parameters.");
          return;
        }
        console.log(stopsValue);
        let filterObj = {};
        if (stopsValue) {
          filterObj.stops = stopsValue;
        }
        if (departureTimeValue) {
          if (departureTimeValue === "earlyMorning") {
            filterObj.departureTime = { $gte: "00:00", $lte: "08:00" };
          }

          if (departureTimeValue === "morning") {
            filterObj.departureTime = { $gte: "08:00", $lt: "12:00" };
          }
          if (departureTimeValue === "afternoon") {
            filterObj.departureTime = { $gte: "12:00", $lt: "16:00" };
          }
          if (departureTimeValue === "evening") {
            filterObj.departureTime = { $gte: "16:00", $lt: "20:00" };
          }
          if (departureTimeValue === "night") {
            filterObj.departureTime = { $gte: "20:00", $lt: "24:00" };
          }
        }
        if (ticketPriceLimitValue) {
          if (ticketPriceLimitValue === "2100") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lte: "2100",
            };
          }
          if (ticketPriceLimitValue === "2150") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lte: "2150",
            };
          }
          if (ticketPriceLimitValue === "2200") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lte: "2200",
            };
          }
          if (ticketPriceLimitValue === "2250") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lte: "2250",
            };
          }
          if (ticketPriceLimitValue === "2300") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lt: "2300",
            };
          }
          if (ticketPriceLimitValue === "2350") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lt: "2350",
            };
          }
          if (ticketPriceLimitValue === "2400") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lt: "2400",
            };
          }
          if (ticketPriceLimitValue === "2450") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lt: "2450",
            };
          }
          if (ticketPriceLimitValue === "2500") {
            filterObj.ticketPrice = {
              $gte: "2000",
              $lt: "2500",
            };
          }
        }

        if (airlines) {
          filterObj.airline = airlines;
        }
        console.log(
          ticketPriceLimitValue,
          typeof ticketPriceLimitValue,
          "ticketPriceLimitValue"
        );
        console.log(filterObj, "filterObj");
        const encodedObj = encodeURIComponent(JSON.stringify(filterObj));

        let Link;
        if (filterObj) {
          Link = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&sort={"${name}" : "${value}"}&filter=${encodedObj}`;
        } else {
          Link = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&sort={"${name}" : "${value}"}`;
        }
        try {
          const response = await fetch(Link, {
            method: "GET",
            headers: {
              projectID: "9harpb4zkaur",
            },
          });

          if (response.ok) {
            const data = await response.json();

            if (
              data.status === "success" &&
              data.data &&
              Array.isArray(data.data.flights)
            ) {
              setFlightsResultsData(data.data.flights); // Set flight results data
              console.log("Flight data:", data.data.flights);
            } else {
              console.error("Unexpected response structure:", data); // Handle unexpected response
            }
          } else {
            console.error(
              "Error fetching flight data, status code:",
              response.status
            ); // Log response status if not OK
          }
        } catch (error) {
          console.error("An error occurred:", error); // Catch and log any errors
        }
      };

      fetchFlightData();
    },
    [
      source,
      destination,
      day,
      name,
      value,
      stopsValue,
      departureTimeValue,
      ticketPriceLimitValue,
      airlines,
    ],
    []
  );
  return (
    <>
      <SortOptions setName={setName} setValue={setValue} />
      <div>
        {flightsResultsData.map((data) => (
          <FlightCard
            data={data}
            key={data._id}
            setFligtDetailsId={setFligtDetailsId}
            FligtDetailsId={FligtDetailsId}
          />
        ))}
      </div>
    </>
  );
};

export default FlightsResultPage;
