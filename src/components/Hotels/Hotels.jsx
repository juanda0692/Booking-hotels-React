import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hotels.style.css";
import renderPrice from "./Price";

function Hotels(props) {
  return (
    // Acommodation information
    <div className="card_hotels">
      <img
        className="card_hotels-img"
        src={require(`../../assets/${props.photo}`)}
        alt={props.name}
      />
      <div className="card_hotels-information">
        <h2 className="hotels_name">{props.name}</h2>
        <p className="hotels_information">{props.description}</p>
        <div className="card_hotels-label">
          <div className="card_hotels-label-icon">
            <FontAwesomeIcon icon="globe-americas" />
          </div>
          <span>
            {props.city}, {props.country}
          </span>
        </div>
        <div className="card_hotels-label-container">
          <div className="card_hotels-label">
            <div className="card_hotels-label-icon">
              <FontAwesomeIcon icon="bed" />
            </div>
            <span>{props.rooms} Habitaciones</span>
          </div>

          <div className="card_hotels-label">{renderPrice(props.price)}</div>
        </div>
      </div>
      <button
        className="card_hotels-reserve-button"
        onClick={props.reserveAlert}>
        <FontAwesomeIcon icon="hotel" className="card_hotels-reserve-icon" />
        <p>RESERVAR</p>
      </button>
    </div>
  );
}

export default Hotels;
