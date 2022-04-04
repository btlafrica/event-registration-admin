import {
  dayNames,
  generateYears,
  monthNames,
} from "features/wallet/wallet-data";

export const tickFormat = (filter) => {
  switch (filter) {
    case "Week":
      return dayNames;
    case "Month":
      return monthNames;
    case "Year":
      return generateYears();

    default:
      break;
  }
};
