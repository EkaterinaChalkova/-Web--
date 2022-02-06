const switcher = document.getElementById("switch");

const formCalendar = document.getElementById("datecalc");
const formTimer = document.getElementById("timer");

switcher.onclick = () => {
  [formTimer.hidden, formCalendar.hidden] = [
    formCalendar.hidden,
    formTimer.hidden,
  ];
  //   formTimer.hidden = !formTimer.hidden;
  //   formCalendar.hidden = !formCalendar.hidden;
};
