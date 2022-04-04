import dateFormat from "dateformat";

const standardizeDate = (date) => dateFormat(date, "yyyy-mm-dd");

const returnDatesFromDaysAgo = (numberOfDaysAgo) => {
  let dates = [];

  for (var i = 1; i <= numberOfDaysAgo; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(standardizeDate(new Date(d).toLocaleDateString()));
  }
  return dates;
};
function isCurrentBetweenDates(startDate, endDate, itemDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const itemD = new Date(itemDate).getTime();
  let valid = false;
  if (itemD >= start && itemD <= end) {
    valid = true;
  }
  return valid;
}
function getMinutesBetweenDates(startDate, endDate) {
  var diff = endDate.getTime() - startDate.getTime();
  return diff / 60000;
}
function minutesToTime(MINUTES) {
  // To handle -negative inputs
  let absMin = Math.abs(MINUTES);
  let m = absMin % 60;
  let h = (absMin - m) / 60;
  // eslint-disable-next-line no-useless-concat
  return h.toString() + "h" + ":" + (m < 10 ? "0" : "") + m.toString() + "m";
}

function addDays(date, days) {
  let results = new Date(date);
  results.setDate(results.getDate() + parseInt(days));
  return results;
}
const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
var addMinutes = function (dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
};
export {
  standardizeDate,
  returnDatesFromDaysAgo,
  isCurrentBetweenDates,
  addDays,
  minutesToTime,
  isToday,
  addMinutes,
  getMinutesBetweenDates,
};
