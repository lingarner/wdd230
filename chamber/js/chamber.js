// select the elements to manipulate (output to)
let datePlacement = document.querySelector(".currentDate");

// derive the current date using a date object

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();
let month = months[today.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayText = days[today.getDay()];
let dayNum = today.getDate();

let year = today.getFullYear();

console.log(today);
console.log(days);
console.log(dayNum);
console.log(dayText);

datePlacement.innerHTML = `${dayText}, ${dayNum} ${month}, ${year}`;
// long, medium, short options ... try them

// Button Click
let button = document.querySelector(".btn");
let links = document.querySelector(".links");

function show() {
  links.classList.toggle("disappear");
}

button.addEventListener("click", show);

// Footer Date
let date = new Date();
let yearFoot = date.getFullYear();

document.querySelector(".yearFoot").textContent = yearFoot;

let currentDate = document.lastModified;

document.querySelector(".lastModified").textContent = currentDate;

// Add Join
// document.querySelector("#join").innerHTML = "Join";

// Add banner
//  a banner on Mondays or Tuesdays
//  "🤝🏼 Come join us for the chamber meet
// and greet Wednesday at 7:00 p.m."

if (dayText == "Monday" || dayText == "Tuesday") {
  banner = document.querySelector("#joinUsBanner");
  banner.textContent = "🤝🏼 Come join us for the chamber meet!";
}
