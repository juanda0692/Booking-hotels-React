import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Filters.style.css";
import moment from "moment";

//format date for the current day
const currentDay = moment().format("YYYY-MM-DD");

function Filters({
  setDestination,
  setHotelCost,
  setSize,
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  priceOptions,
  countryOptions,
  sizeOptions,
  handleReset,
  size,
  country,
  price
}) {
  return (
    <section className="section_filter">
      {/* Departure schedule input */}
      <label className="filter_label" htmlFor="start">
        <FontAwesomeIcon icon="plane-departure" className="icon" />
        <input
          className="filter_input"
          type="date"
          name="dateFrom"
          value={dateFrom}
          min={currentDay}
          onChange={setDateFrom}
        />
      </label>
      {/* Arrival schedule input */}
      <label className="filter_label" htmlFor="start">
        <FontAwesomeIcon icon="plane-arrival" className="icon" />
        <input
          className="filter_input"
          type="date"
          name="dateTo"
          value={dateTo}
          onChange={setDateTo}
        />
      </label>
      {/* Countries options */}
      <div className="filter_label">
        <FontAwesomeIcon icon="globe" className="icon" />
        <label>
          <select
            className="filter_input"
            value={country}
            onChange={setDestination}>
            {countryOptions.map((option) => {
              return (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      {/* Price options */}
      <div className="filter_label">
        <FontAwesomeIcon icon="dollar-sign" className="icon" />
        <label>
          <select
            className="filter_input"
            value={price}
            onChange={setHotelCost}>
            {priceOptions.map((option) => {
              return (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      {/* Size options */}
      <div className="filter_label">
        <FontAwesomeIcon icon="bed" className="icon" />
        <label>
          <select className="filter_input" value={size} onChange={setSize}>
            {sizeOptions.map((option) => {
              return (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      {/* Reset button */}
      <button className="filter_trash-button" onClick={handleReset}>
        <FontAwesomeIcon icon="trash-alt" className="icon white" />
        <span>RESET</span>
      </button>
    </section>
  );
}

export default Filters;
