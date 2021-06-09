import React from "react";
import "./Header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import "moment/locale/es";
import {
  headerPriceMessage,
  checkPriceCases,
  headerSizeMessage,
  checkSizeCases,
  countryOptions,
  priceOptions,
  sizeOptions
} from "../../scripts/utilities";

function Header({ dateFrom, dateTo, optionCountry, optionPrice, optionSize }) {
  // Declaration of date from and date to filters when they are active
  let format = "dddd D MMMM YYYY";
  let checkIn = "";
  let checkOut = "";
  if (dateFrom && dateTo && dateTo >= dateFrom) {
    checkIn = moment(dateFrom).format(format);
    checkOut = moment(dateTo).format(format);
  }

  //HEADER CHECK FILTERS ACTIVE FUNCTION
  const checkFiltersActive = (optionCountry, optionPrice, optionSize) => {
    let filtersActive = false;
    if (
      optionCountry !== countryOptions[0].value ||
      optionPrice !== priceOptions[0].value ||
      optionSize !== sizeOptions[0].value
    ) {
      filtersActive = true;
    }
    return filtersActive;
  };

  //Instanciate the checkFiltersActive function like a reference
  const filtersActive = checkFiltersActive(
    optionCountry,
    optionPrice,
    optionSize
  );

  //Show the country default size text
  let hotelCountry = optionCountry;
  if (hotelCountry === countryOptions[0].value) {
    hotelCountry = "todos los países";
  }

  //Instantiation the checkPriceCases function like a reference
  let hotelPrice = checkPriceCases(optionPrice, headerPriceMessage);

  //Instantiation the checkSizeCases function like a reference
  let hotelSize = checkSizeCases(optionSize, headerSizeMessage);

  return (
    // Acommodation information
    <header className="header">
      <h1 className="header_hotels-title">
        Maravillosos Hoteles
        <FontAwesomeIcon icon="umbrella-beach" className="header_hotels-icon" />
      </h1>

      <div className="header_hotels-text">
        <p>
          {filtersActive && (
            <span>
              Búsqueda de hoteles {hotelSize} y {hotelPrice} en {hotelCountry}
            </span>
          )}{" "}
          {checkIn && checkOut && (
            <span>
              {" "}
              desde el {checkIn} hasta el {checkOut}
            </span>
          )}
        </p>
      </div>
    </header>
  );
}

export default Header;
