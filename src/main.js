import { printError, printResult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";

const form = document.getElementById("datecalc");

form.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const firstDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  if (!firstDate || !secondDate) {
    printError("Enter date, please");
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);
    printResult(dateDiff);
  }
};
