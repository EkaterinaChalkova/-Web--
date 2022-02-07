const result = document.getElementById("datecalc__result");

export const printError = (errorText) => {
  result.innerText = errorText;
};

export const printResult = ({ years, months, days }) => {
  result.innerHTML = `<span>Лет: ${years} - Месяцев: ${months} - Дней: ${days}</span>`;
};

export const resetResult = () => {
  result.innerText = "";
};
