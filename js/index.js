let hour = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let ampm = document.querySelector('.timezone');
let day = document.querySelector('.day');

function currentTime() {
  let date = new Date();
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  day.textContent = days[date.getDay()];

  const addZero = (num) => num < 10 ? '0' + num : num;

  let h = (date.getHours() % 12);
  hour.textContent = addZero(h);

  let m = date.getMinutes();
  min.textContent = addZero(m);

  let s = date.getSeconds();
  sec.textContent = addZero(s);

  const typeOfTime = (h) => h < 12 ? 'AM' : 'PM';
  ampm.textContent = typeOfTime(h);
}

setInterval(currentTime, 200);

currentTime();
