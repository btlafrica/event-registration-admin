export const mapCardTransactionType = (indicator) => {
  let obj = {};
  switch (indicator) {
    case "C":
      obj = { lable: "Credit", color: "text-green" };
      break;
    case "D":
      obj = { lable: "Debit", color: "text-red" };
      break;

    default:
      break;
  }
  return obj;
};

export const mapPlatformField = (platform) => {
  let p = "";
  switch (platform) {
    case "Card Withdrawal":
      p = "TranzoPay";
      break;
    case "Card Funding":
      p = "TranzoPay";
      break;
    case null:
      p = "TranzoPay";
      break;
    case "Card Issuance Fee":
      p = "TranzoPay";
      break;

    default:
      p = platform;
      break;
  }

  return p;
};
