import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uniqueId } from "lodash";

function renderPrice(number) {
  let priceIcons = [];
  for (let i = 0; i < number; i++) {
    priceIcons.push(
      <FontAwesomeIcon
        icon="dollar-sign"
        key={uniqueId()}
        className="card_hotels-price-icon"
      />
    );
  }
  return priceIcons;
}

export default renderPrice;
