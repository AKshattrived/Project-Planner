/* ==================== HEADER DATE ==================== */
let headerDate = document.querySelector(".header__date-date");
let headerYear = document.querySelector(".header__date-year");
let now = new Date();
headerYear.innerHTML = "" + now.getFullYear();
let day = {
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
  7: "Sun",
};
let month = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "June",
  6: "July",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
let dayN = now.getDay();
let monthN = now.getMonth();
headerDate.innerHTML =
  "" + day[dayN] + ", " + month[monthN] + " " + now.getDate();
