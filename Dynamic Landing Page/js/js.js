// Dom elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const focus = document.getElementById('focus');
const username = document.getElementById('name');

//Option AM PM
const showAmPm = true; 

// Show time
const showTime = () => {
   let today = new Date();
   let hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

   // Set AM or PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

   // 12 hr format
   // hour = hour % 12 || 12;

   // Output time
   time.innerHTML = `${hour}<span>:</span>${addZero(
      min
   )}<span>:</span>${addZero(sec)}`;

   setTimeout(showTime, 1000);
}

// Add Zero to Sec
const addZero = (number) => {
   return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Set Background and Greeting
const setBgGreet = () => {
   let today = new Date();
   let hour = today.getHours();
   greeting.style.fontSize = '3rem';
   username.style.fontSize = '3rem';

   if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('./images/morning.jpg')";
      greeting.textContent = 'Good Morning, ';
   } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon, ';
   } else {
      // Evening
      document.body.style.backgroundImage = "url('./images/evening.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
   }
}

// Set Name
const setName = (e) => {
   if (e.type === 'keypress') {
      // Make sure Enter is pressed - 13
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('name', e.target.innerText);
         username.blur();
      }
   } else {
      // for blur
      localStorage.setItem('name', e.target.innerText);
   }
}

// Get Name
const getName = () => {
   if (localStorage.getItem('name') === null) {
    username.textContent = 'Who are you?';
   } else {
    username.textContent = localStorage.getItem('name');
   }
}

// Set Focus
const setFocus = (e) => {
   if (e.type === 'keypress') {
      // Make sure Enter is pressed - 13
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('focus', e.target.innerText);
         // Cancels new line
         focus.blur();
      }
   } else {
      // for blur
      localStorage.setItem('focus', e.target.innerText);
   }
}

// Get Focus
const getFocus = () => {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
   } else {
      focus.textContent = localStorage.getItem('focus');
   }
}

// Event Listeners
username.addEventListener('keypress', setName);
username.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
