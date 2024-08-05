// ! Making a Scroll Bar in the Bottom in Navbar
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// ! Skills Progress Bar Fill When Appear
const skills = document.querySelector(".our-skills .container div.skills");
const allSkills = document.querySelectorAll(".skill .the-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop)
  {
    allSkills.forEach((skill) => {
    skill.style.width = skill.dataset.prog;
    });
  }
  else
  {
    allSkills.forEach((skill) => {
    skill.style.width = "0";
    });
  }
});

// ! Making Scroll To Top Button Visible
const btn = document.getElementById("top");
window.addEventListener("scroll", () => {
  window.scrollY >= 2200
  ? (btn.style.right = "20px")
  : (btn.style.right = "-1000px");
});

// ! Events Section Counter To Count My New Birthday Time
const daysSpan = document.querySelector(".events .time .unit span.days");
const hoursSpan = document.querySelector(".events .time .unit span.hours");
const minutesSpan = document.querySelector(".events .time .unit span.minutes");
const secondsSpan = document.querySelector(".events .time .unit span.seconds");
const myBdayAge = document.querySelector(".coming-bday-age");
const myBdaySuffix = document.querySelector(".coming-bday-suffix");
const currDate = new Date();

let myComingBday = currDate.getFullYear() - 2003;
let myComingBdayLastChar = myComingBday.toString()[myComingBday.toString().length - 1];
let countDownDate = new Date(`Dec 3, ${currDate.getFullYear()} 00:00:01`);

const timer = setInterval(() => {
  let dateDiff = countDownDate.getTime() - new Date().getTime();

  if (dateDiff <= 0) {
    countDownDate = new Date(`Aug 4, ${currDate.getFullYear() + 1} 00:00:01`);
  }

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days < 10 ? `0${days}` : days;
  hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
} , 1000);

myBdayAge.innerHTML = myComingBday.toString();

if (myComingBdayLastChar === "1")
{
  myBdaySuffix.innerHTML = "st"
}
else if (myComingBdayLastChar === "2")
{
  myBdaySuffix.innerHTML = "nd";
}
else if (myComingBdayLastChar === "3")
{
  myBdaySuffix.innerHTML = "rd";
}
else
{
  myBdaySuffix.innerHTML = "th";
}

// ! start count Of Stats
let stats = document.getElementById("stats");
let number = document.querySelectorAll(".container .box .number");
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 250) {
    if (!start) {
      number.forEach((num) => startCount(num));
    }
    start = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
};

// ! Make A Function To Make A Display A Hint In Text Name
window.addEventListener('load', function (e) {
  const textName = document.getElementById("name");
  const errorName = document.getElementById("name-error");

  textName.addEventListener('blur', () => {
    const value = textName.value;

    // TODO: Check if the field is empty or contains numbers
    if (value === "" || /\d/.test(value))
    {
      errorName.style.display = "block";
      errorName.textContent = value === "" ? "This field cannot be empty." : "Numbers are not allowed.";
    }
    else
    {
      errorName.style.display = "none";
    }
  });
});

// ! Check If The Phone Number Valid Or Have a Char
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('mobile');
  const phoneError = document.getElementById('phone-error');

  phoneInput.addEventListener('input', function() {
    const pattern = /^\+?\d{0,3}?[- .]?\(?\d{1,4}?\)?[- .]?\d{1,4}[- .]?\d{1,9}$/;
    if (pattern.test(phoneInput.value))
    {
      phoneError.style.display = 'none';
      phoneInput.classList.remove('invalid');
    }
    else
    {
      phoneError.style.display = 'block';
      phoneInput.classList.add('invalid');
    }
  });
});