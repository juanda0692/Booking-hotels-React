// IMPORTS
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Hotels from "./components/Hotels/Hotels";
import "./styles.css";
import moment from "moment";
import { hotelsData } from "./scripts/data";
import {
  checkSize,
  checkDate,
  datesOptions,
  countryOptions,
  priceOptions,
  sizeOptions
} from "./scripts/utilities";

// APP COMPONENT
export default function App() {
  //STATES
  //State check-in date
  const [dateFrom, setDateFrom] = useState(datesOptions.dateFrom);
  //State check-out date
  const [dateTo, setDateTo] = useState(datesOptions.dateTo);
  //State country options
  const [country, setDestination] = useState(countryOptions[0].value);
  //State price options
  const [price, setHotelCost] = useState(priceOptions[0].value);
  //State size options
  const [size, setSize] = useState(sizeOptions[0].value);

  // HANDLERS
  //Check-in Handler Event
  const onChangeDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  //Check-out Handler Event
  const onChangeDateTo = (e) => {
    setDateTo(e.target.value);
  };

  //Country Handler Event
  const onChangeCountry = (e) => {
    setDestination(e.target.value);
  };

  //Price Handler Event
  const onChangePrice = (e) => {
    setHotelCost(e.target.value);
  };

  //Size Handler Event
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  //Reset Handler Event
  const clickReset = () => {
    setDateFrom(datesOptions.dateFrom);
    setDateTo(datesOptions.dateTo);
    setDestination(countryOptions[0].value);
    setHotelCost(priceOptions[0].value);
    setSize(sizeOptions[0].value);
  };

  //Reserve Alert Handler Event
  const reserveAlert = () => {
    Swal.fire({
      icon: "success",
      title: "¡Felicitaciones!",
      text: "Has reservado tu hotel favorito!",
      timer: 3000
    });
  };

  //FILTER FUNCTIONS
  function newHotelList() {
    let format = "YYYY-MM-DD";
    let dateCheckIn = moment(dateFrom).format(format);
    let dateCheckOut = moment(dateTo).format(format);
    checkDate(dateFrom, dateTo);
    const newList = hotelsData
      //Filter by dates
      .filter((hotel) => {
        if (dateFrom && dateTo) {
          if (dateTo >= dateFrom) {
            const dateHotel =
              dateCheckIn >= moment(hotel.availabilityFrom).format(format) &&
              dateCheckOut <= moment(hotel.availabilityTo).format(format);
            return dateHotel;
          }
        }
        return hotel;
      })
      // Filter by country
      .filter((hotel) => {
        if (country === countryOptions[0].value) {
          return hotel;
        } else if (country !== countryOptions.value) {
          return hotel.country === country;
        }
        return hotel;
      })
      // Filter by price
      .filter((hotel) => {
        if (price === priceOptions[0].value) {
          return hotel;
        } else if (price !== priceOptions.value) {
          return hotel.price === Number(price);
        }
        return hotel;
      })
      // Filter by size
      .filter((hotel) => {
        if (size === sizeOptions[0].value) {
          return hotel;
        } else if (size !== sizeOptions.value) {
          return checkSize(size, hotel.rooms);
        }
        return hotel;
      });
    return newList;
  }

  //Declaration of the newHotelList function like a reference
  let filteredList = newHotelList();

  return (
    <div className="App">
      <Header
        dateFrom={dateFrom}
        dateTo={dateTo}
        optionCountry={country}
        optionPrice={price}
        optionSize={size}
      />
      <Filters
        setDateTo={onChangeDateTo}
        setDateFrom={onChangeDateFrom}
        setDestination={onChangeCountry}
        dateFrom={dateFrom}
        dateTo={dateTo}
        country={country}
        price={price}
        size={size}
        setHotelCost={onChangePrice}
        setSize={onChangeSize}
        priceOptions={priceOptions}
        countryOptions={countryOptions}
        sizeOptions={sizeOptions}
        handleReset={clickReset}
      />
      <main className="section_hotels">
        {/* if filteredList is higher than 0 ([]) ? render Hotels cards : show only text */}
        {filteredList.length > 0 ? (
          filteredList.map((hotel) => (
            <Hotels
              key={hotel.slug}
              name={hotel.name}
              photo={hotel.photo}
              description={hotel.description}
              availabilityFrom={hotel.availabilityFrom}
              availabilityTo={hotel.availabilityTo}
              rooms={hotel.rooms}
              city={hotel.city}
              country={hotel.country}
              price={hotel.price}
              reserveAlert={reserveAlert}
            />
          ))
        ) : (
          <div className="App_not-results">
            <h2>¡No hay resultados para tu búsqueda!</h2>
            <FontAwesomeIcon icon="sad-tear" className="App_not-results-icon" />
          </div>
        )}
      </main>
    </div>
  );
}
