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

/*
// ! Make A Function To Make A Display A Hint In Text Name
window.addEventListener('load', function (e) {
  const textName1 = document.getElementById("firstName");
  const errorName1 = document.getElementById("errorName1");

  textName1.addEventListener('blur', () => {
    const value = textName1.value;

    // TODO: Check if the field is empty or contains numbers
    if (value === "" || /\d/.test(value))
    {
      errorName1.style.display = "block";
      errorName1.textContent = value === "" ? "This field cannot be empty." : "Numbers are not allowed.";
    }
    else
    {
      errorName1.style.display = "none";
    }
  });
  
  // ! Make a Zip Code as A Default
  // ! Trigger the change event on page load to set default zip code
  document.getElementById('country').addEventListener('change', function () {
    const countryZipCodes = {
    'Afghanistan': '1001',
    'Åland Islands': '22100',
    'Albania': '1001',
    'Algeria': '16000',
    'American Samoa': '96799',
    'Andorra': 'AD500',
    'Angola': '1000',
    'Anguilla': 'AI-2640',
    'Antarctica': '0000',
    'Antigua & Barbuda': '00000',
    'Argentina': 'C1000',
    'Armenia': '0001',
    'Aruba': '0000',
    'Ascension Island': 'ASCN 1ZZ',
    'Australia': '2000',
    'Austria': '1010',
    'Azerbaijan': '1000',
    'Bahamas': '00000',
    'Bahrain': '199',
    'Bangladesh': '1212',
    'Barbados': 'BB11000',
    'Belarus': '220000',
    'Belgium': '1000',
    'Belize': '0000',
    'Benin': '0000',
    'Bermuda': 'HM 11',
    'Bhutan': '11001',
    'Bolivia': '0000',
    'Bosnia & Herzegovina': '71000',
    'Botswana': '0000',
    'Bouvet Island': '0000',
    'Brazil': '01000-000',
    'British Indian Ocean Territory': 'BBND 1ZZ',
    'British Virgin Islands': 'VG1110',
    'Brunei': 'BB1110',
    'Bulgaria': '1000',
    'Burkina Faso': '0000',
    'Burundi': '0000',
    'Cambodia': '12000',
    'Cameroon': '0000',
    'Canada': 'A1A 1A1',
    'Canary Islands': '35000',
    'Cape Verde': '0000',
    'Caribbean Netherlands': '0000',
    'Cayman Islands': 'KY1-1000',
    'Central African Republic': '0000',
    'Ceuta & Melilla': '51001',
    'Chad': '0000',
    'Chile': '8320000',
    'China': '100000',
    'Christmas Island': '6798',
    'Clipperton Island': '98799',
    'Cocos (Keeling) Islands': '6799',
    'Colombia': '110111',
    'Comoros': '0000',
    'Congo - Brazzaville': '0000',
    'Congo - Kinshasa': '0000',
    'Cook Islands': '0000',
    'Costa Rica': '10101',
    'Côte d’Ivoire': '0000',
    'Croatia': '10000',
    'Cuba': '10000',
    'Curaçao': '0000',
    'Cyprus': '1000',
    'Czechia': '110 00',
    'Denmark': '1000',
    'Diego Garcia': '0000',
    'Djibouti': '0000',
    'Dominica': '00000',
    'Dominican Republic': '10101',
    'Ecuador': '170150',
    'Egypt': '11511',
    'El Salvador': '01101',
    'Equatorial Guinea': '0000',
    'Eritrea': '0000',
    'Estonia': '10101',
    'Eswatini': 'H100',
    'Ethiopia': '1000',
    'Falkland Islands': 'FIQQ 1ZZ',
    'Faroe Islands': '100',
    'Fiji': '0000',
    'Finland': '00100',
    'France': '75001',
    'French Guiana': '97300',
    'French Polynesia': '98709',
    'French Southern Territories': '98400',
    'Gabon': '0000',
    'Gambia': '0000',
    'Georgia': '0100',
    'Germany': '10115',
    'Ghana': '00233',
    'Gibraltar': 'GX11 1AA',
    'Greece': '10431',
    'Greenland': '3900',
    'Grenada': '0000',
    'Guadeloupe': '97100',
    'Guam': '96910',
    'Guatemala': '01001',
    'Guernsey': 'GY1 1AA',
    'Guinea': '0000',
    'Guinea-Bissau': '0000',
    'Guyana': '0000',
    'Haiti': '0000',
    'Heard & McDonald Islands': '0000',
    'Honduras': '11101',
    'Hong Kong SAR China': '999077',
    'Hungary': '1000',
    'Iceland': '101',
    'India': '110001',
    'Indonesia': '10110',
    'Iran': '11369-43661',
    'Iraq': '10001',
    'Ireland': 'D01',
    'Isle of Man': 'IM1 1AA',
    'Israel': '91999',
    'Italy': '00100',
    'Jamaica': '0000',
    'Japan': '100-0001',
    'Jersey': 'JE1 1AA',
    'Jordan': '11118',
    'Kazakhstan': '010000',
    'Kenya': '00100',
    'Kiribati': '0000',
    'Kuwait': '13001',
    'Kyrgyzstan': '720001',
    'Laos': '0000',
    'Latvia': 'LV-1001',
    'Lebanon': '1001',
    'Lesotho': '100',
    'Liberia': '1000',
    'Libya': '1000',
    'Liechtenstein': '9490',
    'Lithuania': '01001',
    'Luxembourg': '1009',
    'Macao SAR China': '999078',
    'Madagascar': '101',
    'Malawi': '100',
    'Malaysia': '50000',
    'Maldives': '20002',
    'Mali': '0000',
    'Malta': '1000',
    'Marshall Islands': '96960',
    'Martinique': '97200',
    'Mauritania': '0000',
    'Mauritius': '0000',
    'Mayotte': '97600',
    'Mexico': '01000',
    'Micronesia': '96941',
    'Moldova': 'MD-2001',
    'Monaco': '98000',
    'Mongolia': '15160',
    'Montenegro': '81000',
    'Montserrat': '0000',
    'Morocco': '10000',
    'Mozambique': '1100',
    'Myanmar (Burma)': '11181',
    'Namibia': '0000',
    'Nauru': '0000',
    'Nepal': '44600',
    'Netherlands': '1000 AA',
    'New Caledonia': '98800',
    'New Zealand': '6011',
    'Nicaragua': '11001',
    'Niger': '0000',
    'Nigeria': '100001',
    'Niue': '0000',
    'Norfolk Island': '2899',
    'North Korea': '0000',
    'North Macedonia': '1000',
    'Northern Mariana Islands': '96950',
    'Norway': '0101',
    'Oman': '100',
    'Pakistan': '44000',
    'Palau': '96940',
    'Palestinian Territories': '0000',
    'Panama': '0000',
    'Papua New Guinea': '111',
    'Paraguay': '1000',
    'Peru': '15000',
    'Philippines': '1000',
    'Pitcairn Islands': 'PCRN 1ZZ',
    'Poland': '00-001',
    'Portugal': '1000-001',
    'Puerto Rico': '00901',
    'Qatar': '00000',
    'Réunion': '97400',
    'Romania': '010011',
    'Russia': '101000',
    'Rwanda': '0000',
    'Samoa': '0000',
    'San Marino': '47890',
    'São Tomé & Príncipe': '0000',
    'Saudi Arabia': '11564',
    'Senegal': '0000',
    'Serbia': '11000',
    'Seychelles': '0000',
    'Sierra Leone': '0000',
    'Singapore': '018956',
    'Sint Maarten': '0000',
    'Slovakia': '811 01',
    'Slovenia': '1000',
    'Solomon Islands': '0000',
    'Somalia': '0000',
    'South Africa': '0001',
    'South Georgia & South Sandwich Islands': 'SIQQ 1ZZ',
    'South Korea': '03001',
    'South Sudan': '0000',
    'Spain': '28001',
    'Sri Lanka': '00100',
    'St. Barthélemy': '97133',
    'St. Helena': 'STHL 1ZZ',
    'St. Kitts & Nevis': '0000',
    'St. Lucia': '0000',
    'St. Martin': '97150',
    'St. Pierre & Miquelon': '97500',
    'St. Vincent & Grenadines': '0000',
    'Sudan': '11111',
    'Suriname': '0000',
    'Svalbard & Jan Mayen': '9170',
    'Sweden': '100 05',
    'Switzerland': '8001',
    'Syria': '0000',
    'Taiwan': '100',
    'Tajikistan': '734025',
    'Tanzania': '11101',
    'Thailand': '10330',
    'Timor-Leste': '0000',
    'Togo': '0000',
    'Tokelau': '0000',
    'Tonga': '0000',
    'Trinidad & Tobago': '0000',
    'Tristan da Cunha': 'TDCU 1ZZ',
    'Tunisia': '1001',
    'Turkey': '34000',
    'Turkmenistan': '744000',
    'Turks & Caicos Islands': 'TKCA 1ZZ',
    'Tuvalu': '0000',
    'Uganda': '00256',
    'Ukraine': '01001',
    'United Arab Emirates': '00000',
    'United Kingdom': 'SW1A 1AA',
    'United States': '12345',
    'Uruguay': '11000',
    'Uzbekistan': '100000',
    'Vanuatu': '0000',
    'Vatican City': '00120',
    'Venezuela': '1010',
    'Vietnam': '100000',
    'Wallis & Futuna': '98600',
    'Western Sahara': '00000',
    'Yemen': '0000',
    'Zambia': '10101',
    'Zimbabwe': '00263',
  };

    const selectedCountry = this.value;
    const zipInput = document.getElementById('zip');

    if (countryZipCodes[selectedCountry])
    {
      zipInput.value = countryZipCodes[selectedCountry];
    }
    else
    {
      zipInput.value = '';
    }
  });
});

// ! Check If The Phone Number Valid Or Have a Char
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
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

// ! Check If The Hoppies Has at Least One Hoppe
document.addEventListener('DOMContentLoaded', function() {
  const hobbies = document.querySelectorAll('input[name="object"]');
  const errorHobbies = document.getElementById('errorObject');

  document.querySelector('form').addEventListener('submit', function(event) {
    let checked = false;
    hobbies.forEach(function(hobby) {
      if (hobby.checked)
      {
        checked = true;
      }
    });

    if (!checked)
    {
      errorHobbies.style.display = 'block';
      event.preventDefault();
    }
    else
    {
      errorHobbies.style.display = 'none';
    }
  });
});

// ! Make An Confirm To Check If The User Want To Clear The Form.
document.addEventListener('DOMContentLoaded', function() {
  const clearButton = document.getElementById('clear-btn');
  const form = clearButton.form;

  clearButton.addEventListener('click', function(e) {
    const userConfirmed = confirm('Are you sure you want to clear all fields?');

    if (!userConfirmed)
    {
      e.preventDefault();
    }
  });
});*/