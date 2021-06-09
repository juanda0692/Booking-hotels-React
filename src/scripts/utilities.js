import moment from "moment";

//HEADER TEXT-AREA FUNCTIONS
//Different message about hotels prices options for the header text-area
export const headerPriceMessage = {
  default: "a cualquier precio",
  price1: "de precio económico",
  price2: "de precio moderado",
  price3: "de precio alto",
  price4: "lujosos"
};

//Switch cases to set a message about the different price options
export function checkPriceCases(cond, text) {
  let price = text.default;
  switch (cond) {
    case "1":
      price = text.price1;
      break;
    case "2":
      price = text.price2;
      break;
    case "3":
      price = text.price3;
      break;
    case "4":
      price = text.price4;
      break;
    default:
      break;
  }
  return price;
}

// Different message about hotels sizes options for the header text-area
export const headerSizeMessage = {
  default: "de cualquier tamaño",
  size1: "pequeños",
  size2: "medianos",
  size3: "grandes"
};

export function checkSizeCases(cond, text) {
  let size = text.default;
  switch (cond) {
    case "pequeño":
      size = text.size1;
      break;
    case "mediano":
      size = text.size2;
      break;
    case "grande":
      size = text.size3;
      break;
    default:
      break;
  }
  return size;
}

//CHECK DATE FUNCTION
// Alert the user to confirm the correct check-in and check-out dates
export const checkDate = (dateFrom, dateTo) => {
  const message =
    "La fecha de check-out debe ser igual o mayor que la fecha de check-in";
  let format = "YYYY-MM-DD";
  let dateCheckIn = moment(dateFrom).format(format);
  let dateCheckOut = moment(dateTo).format(format);
  if (dateTo !== datesOptions.dateTo && dateCheckOut < dateCheckIn) {
    alert(message);
  }
};

//CHECKSIZE HOTELS FUNCTION
export const checkSize = (size, rooms) => {
  if (size === "pequeño") {
    if (rooms <= 10) {
      return true;
    } else {
      return false;
    }
  } else if (size === "mediano") {
    if (rooms > 10 && rooms <= 20) {
      return true;
    } else {
      return false;
    }
  } else if (size === "grande") {
    if (rooms > 20) {
      return true;
    } else {
      return false;
    }
  }
};

//FILTERS OPTIONS
export const datesOptions = { dateFrom: "", dateTo: "" };

export const countryOptions = [
  { label: "Selecciona tu destino", value: "cualquiera" },
  { label: "Argentina", value: "Argentina" },
  { label: "Brasil", value: "Brasil" },
  { label: "Chile", value: "Chile" },
  { label: "Uruguay", value: "Uruguay" }
];

export const priceOptions = [
  { label: "Cualquier precio", value: "cualquiera" },
  { label: "$", value: 1 },
  { label: "$$", value: 2 },
  { label: "$$$", value: 3 },
  { label: "$$$$", value: 4 }
];

export const sizeOptions = [
  { label: "Cualquier tamaño", value: "cualquiera" },
  { label: "Hoteles pequeños", value: "pequeño" },
  { label: "Hoteles medianos", value: "mediano" },
  { label: "Hoteles grandes", value: "grande" }
];
