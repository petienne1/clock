// to select seconds hand on the page
const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');

function setDate () {
  const now = new Date();
  const seconds = now.getSeconds();
  // to represent cureent seconds in degrees of 360 degree circle
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const hours = now.getHours();
  const hoursDegrees = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

}

setInterval(setDate, 1000);
