export const transactionTypeGrouper = (type, currency, desc) => {
  const inflow = ["Top Up", "Transfer", "Airtime To Cash"];
  if (currency === "$" && desc === "Exchanged GHS To USD") {
    // alert("yes")
    inflow.push("Exchange");
  }
  if (currency === "₵" && desc === "Exchanged USD To GHS") {
    inflow.push("Exchange");
  }
  if (inflow.includes(type)) {
    return "inflow";
  } else {
    return "outflow";
  }
};
