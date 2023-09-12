
const income = document.querySelector(".income-input");
const results = document.querySelector(".results-input");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const form = document.querySelector("form");

//Reset page
reset.addEventListener("click", () => {
  setTimeout(() => {
    document.location.reload();
  });
});

//Calculate button
calculate.addEventListener("click", (e) => {
  e.preventDefault;

  if (income.value <= 5000) {
    results.value = income.value * 0;
  } else if (income.value > 5000 && income.value < 18000) {
    results.value = income.value * 0.5;
  } else if (income.value > 18000 && income.value < 35000) {
    results.value = income.value * 0.10;
  } else if (income.value > 35000 && income.value < 55000) {
    results.value = income.value * 0.15;
     } else if (income.value > 55000 && income.value < 75000) {
        results.value = income.value * 0.20;
         } else if (income.value > 75000 && income.value < 10000) {
            results.value = income.value * 0.25;
  } else if (income.value >= 10000) {
    results.value = income.value * 0.30;
  }
  numRounded();
});
