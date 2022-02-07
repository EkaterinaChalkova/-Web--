import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js";

var sound = new Howl({
  src: ["./sound/music.mp3"],
});

const form = document.getElementById("timer__result");

const timerStart = document.getElementById("timerStart");
const timerStop = document.getElementById("timerStop");

const timerMinutesElement = document.getElementById("minutes");
const timerSecondsElement = document.getElementById("seconds");

let timerMinutesTemp;
let timerSecondsTemp;
let interval;

timerStart.onclick = (event) => {
  event.preventDefault();
  let timerMinutesTemp = timerMinutesElement.value;
  let timerSecondsTemp = timerSecondsElement.value;

  interval = setInterval(() => {
    form.innerHTML = `Осталось: ${timerMinutesTemp} м. ${timerSecondsTemp} сек.`;
    timerSecondsTemp = timerSecondsTemp - 1;

    if (timerSecondsTemp == -1) {
      timerSecondsTemp = 59;
      timerMinutesTemp = timerMinutesTemp - 1;
      if (timerMinutesTemp < 0) {
        clearInterval(interval);
        form.innerHTML = `ВРЕМЯ ВЫШЛО!`;
        alert(`ВРЕМЯ ВЫШЛО!`);
        sound.play();
        // alarm.play()
      }
    }
  }, 1000);
};

timerStop.onclick = (event) => {
  event.preventDefault();
  clearInterval(interval);
};
