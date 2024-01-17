document.addEventListener("DOMContentLoaded", function () {
  const amountInputField = document.getElementById("amount");
  const rateInputField = document.getElementById("ex-rate");
  const submitBtn = document.getElementById("submit");
  const outputContainer = document.getElementById("outputContainer");
  const restartField = document.querySelector(".restart");
  const inputDiv = document.querySelector(".inputDiv");

  submitBtn.onclick = (event) => {
    event.preventDefault();
    outputContainer.style.display = `block`;
    outputContainer.innerHTML = handleCurrencyConversion();
    restartField.style.display = `block`;
    amountInputField.value = ``;
    rateInputField.value = ``;
    inputDiv.style.display = `none`;

    restartField.onclick = () => {
      outputContainer.style.display = `none`;
      outputContainer.innerHTML = ``;
      restartField.style.display = `none`;
      inputDiv.style.display = `flex`;
    };
  };

  let selectFrom, selectedIndexFrom, selectedOptionFrom, selectedValueFrom;
  let selectTo, selectedIndexTo, selectedOptionTo, selectedValueTo;

  selectFrom = document.querySelector("#from_currency");
  selectTo = document.getElementById("to_currency");

  const exchangeButton = document.getElementById("exchange");
  exchangeButton.addEventListener("click", function () {
    selectedIndexFrom = selectFrom.selectedIndex;
    selectedOptionFrom = selectFrom.options[selectedIndexFrom];
    selectedValueFrom = selectedOptionFrom.value;

    selectedIndexTo = selectTo.selectedIndex;
    selectedOptionTo = selectTo.options[selectedIndexTo];
    selectedValueTo = selectedOptionTo.value;

    // Swap the selected options
    selectFrom.selectedIndex = selectedIndexTo;
    selectTo.selectedIndex = selectedIndexFrom;
  });

  function handleCurrencyConversion() {
    let amount = amountInputField.value;
    let rate = rateInputField.value;

    if (amount === "" || rate === "") {
      return "Input Fields cannot be empty!";
    } else {
      // Move the select element value retrieval here
      selectedIndexFrom = selectFrom.selectedIndex;
      selectedOptionFrom = selectFrom.options[selectedIndexFrom];
      selectedValueFrom = selectedOptionFrom.value;

      selectedIndexTo = selectTo.selectedIndex;
      selectedOptionTo = selectTo.options[selectedIndexTo];
      selectedValueTo = selectedOptionTo.value;

      let results = amount * rate;
      return `${amount}${selectedValueFrom} = ${results}${selectedValueTo}`;
    }
  }

  const myDate = new Date();
  const year = myDate.getFullYear();
  const month = myDate.getMonth();
  const day = myDate.getDate();

  const monthName = [
    `Jan`,
    `Fed`,
    `March`,
    `Aprl`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  const getMonthName = monthName[month];

  const getDevDay = day + ` of ` + getMonthName + ` ` + year;

  document.getElementById("footer").innerHTML = getDevDay;
});
