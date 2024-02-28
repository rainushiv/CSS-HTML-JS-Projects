const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';

let countdownDate = '';

let countdownValue = Date; 

let countdowActive; 
const second = 1000; 

const minute = second * 60; 

const hour = minute *60

const day = hour *24; 
// Set date input min with today's date 

const today = new Date().toISOString().split("T")[0];

dateEl.setAttribute('min',today)


// Populate Countdown / complete UI 

function updateDOM() {

    const now = new Date().getTime();

    const distance = countdownValue - now;

    console.log('distance', distance)

    const days = Math.floor(distance/day);

    const hours = Math.floor((distance % day)/ hour);

    const minutes = Math.floor((distance % hour)/ minute);

    const seconds = Math.floor((distance % minute)/ second);

console.log(days,hours,minutes);


// Populate Countdown 

countdownElTitle.textContent = `${countdownTitle}`; 

timeElements[0].textContent = `${days}`;
timeElements[1].textContent = `${hours}`;
timeElements[2].textContent = `${minutes}`;
timeElements[3].textContent = `${seconds}`;



timeElements
// Hide input 

inputContainer.hidden = true;

// Show CountDown
countdownEl.hidden = false;



}

function updateCountdown(e) {
e.preventDefault();
let countdownTitle = e.srcElement[0].value;
countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);

    // Get the number version of the date 

    countdownValue = new Date(countdownDate).getTime();

    console.log('countdownValue:',countdownValue);

    updateDOM();
}



countdownForm.addEventListener('submit', updateCountdown);