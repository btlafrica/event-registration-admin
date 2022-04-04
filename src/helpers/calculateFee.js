export const calculateFee = (amount, feePercent, feeAmount) => {
  let percent = (feePercent / 100) * parseFloat(amount);
  let total = percent + feeAmount;
  return total.toFixed(2);
};
