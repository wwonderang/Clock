let hour = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let ampm = document.querySelector('.timezone');
let day = document.querySelector('.day');

function currentTime() {
  let date = new Date();
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  day.textContent = days[date.getDay()];

  let h = (date.getHours() % 12);
  h = h < 10 ? '0' + h : h;
  hour.textContent = h;

  let m = date.getMinutes();
  m = m < 10 ? '0' + m : m;
  min.textContent = m;

  let s = date.getSeconds();
  s = s < 10 ? '0' + s : s;
  sec.textContent = s;

  if(date.getHours() < 12) {
    ampm.textContent = 'AM';
  } else {
    ampm.textContent = 'PM';
  }
}

setInterval(currentTime, 200);

currentTime();
