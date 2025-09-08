let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const milli = document.getElementById("milliseconds");

const render = () => {
  min.innerText = String(minutes).padStart(2, '0');
  sec.innerText = String(seconds).padStart(2, '0');
  milli.innerText = String(milliseconds).padStart(2, '0');
};
render();

const timer = () => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  render();
};

const start = () => {
  if (!interval) {
    interval = setInterval(timer, 10);
  }
};

const pause = () => {
  clearInterval(interval);
  interval = null;
};

const reset = () => {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  render();
  clearInterval(interval);
  interval = null;
};