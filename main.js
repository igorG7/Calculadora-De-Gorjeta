let inputBill = document.getElementById("moneyValue");
let inputPeoples = document.getElementById("number-peoples");
let inputCustom = document.getElementById("custom-tip");

let itemAttribute;

const tipButtons = Array.from(document.getElementsByName("percentTip"));

const amount = document.getElementById("resultAmount");
const total = document.getElementById("resultTotal");
const resetButton = document.getElementById("resetButton");
const warningErroB = document.getElementById("cantbezeroB");
const warningErroP = document.getElementById("cantbezeroP");

inputBill.addEventListener("input", (e) => {
  inputBill = e.target.value;
  console.log(inputBill);

  if (inputBill > 0 && inputPeoples > 0 && itemAttribute > 0) {
    calcResult();
  } else if (inputBill > 0 && inputPeoples > 0 && inputCustom > 0) {
    calcResultCustom();
  }

  enabledReset();
  errorZeroEventBill();
});

inputPeoples.addEventListener("input", (e) => {
  inputPeoples = e.target.value;
  console.log(inputPeoples);

  if (inputBill > 0 && inputPeoples > 0 && itemAttribute > 0) {
    calcResult();
  } else if (inputBill > 0 && inputPeoples > 0 && inputCustom > 0) {
    calcResultCustom();
  }

  enabledReset();
  errorZeroEventPeoples();
});

const calcResult = function () {
  let amountPerPerson =
    (inputBill / inputPeoples) * Number(itemAttribute / 100);

  let totalPerPerson = inputBill / inputPeoples + amountPerPerson;

  console.log(totalPerPerson, amountPerPerson);

  amountPerPerson == amountPerPerson
    ? (amount.innerHTML = `$${amountPerPerson.toFixed(2)}`)
    : (amount.innerHTML = `$0.00`);

  totalPerPerson == totalPerPerson
    ? (total.innerHTML = `$${totalPerPerson.toFixed(2)}`)
    : (total.innerHTML = `$0.00`);
};

tipButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    itemAttribute = e.target.getAttribute("data-percent");

    tipButtons.forEach((item) => {
      itemActive = item.getAttribute("data-percent");

      if (itemActive === itemAttribute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (inputBill > 0 && inputPeoples > 0 && itemAttribute > 0) {
      calcResult();
    } else if (inputBill > 0 && inputPeoples > 0 && inputCustom > 0) {
      calcResultCustom();
    }

    enabledReset();
  });
});

const calcResultCustom = function () {
  let amountPerPersonCustom = (inputBill / inputPeoples) * (inputCustom / 100);

  let totalPerPersonCustom = inputBill / inputPeoples + amountPerPersonCustom;

  amountPerPersonCustom == amountPerPersonCustom
    ? (amount.innerHTML = `$${amountPerPersonCustom.toFixed(2)}`)
    : (amount.innerHTML = `$0.00`);

  totalPerPersonCustom == totalPerPersonCustom
    ? (total.innerHTML = `$${totalPerPersonCustom.toFixed(2)}`)
    : (total.innerHTML = `$0.00`);
};

inputCustom.addEventListener("input", (e) => {
  inputCustom = Number(e.target.value);

  if (inputBill > 0 && inputPeoples > 0 && inputCustom > 0) {
    calcResultCustom();
  }

  console.log(inputCustom);
});

const errorZeroEventPeoples = function () {
  if (inputPeoples == 0) {
    document.getElementById("number-peoples").classList.add("errorEvent");
    warningErroP.classList.add("visib");
  } else {
    document.getElementById("number-peoples").classList.remove("errorEvent");
    warningErroP.classList.remove("visib");
  }
};

const errorZeroEventBill = function () {
  if (inputBill == 0) {
    document.getElementById("moneyValue").classList.add("errorEvent");
    warningErroB.classList.add("visib");
  } else {
    document.getElementById("moneyValue").classList.remove("errorEvent");
    warningErroB.classList.remove("visib");
  }
};

const removeErro = function () {
  document.getElementById("number-peoples").classList.remove("errorEvent");
  warningErroP.classList.remove("visib");

  document.getElementById("moneyValue").classList.remove("errorEvent");
  warningErroB.classList.remove("visib");
};

resetButton.addEventListener("click", (e) => {
  resetButton.disabled = true;

  document.getElementById("moneyValue").value = null;
  inputBill = e.target.value = null;

  document.getElementById("number-peoples").value = null;
  inputPeoples = e.target.value = null;

  document.getElementById("custom-tip").value = null;
  inputCustom = e.target.value = null;

  tipButtons.forEach((item) => {
    item.classList.remove("active");
    itemAttribute = e.target.value = null;
  });

  console.log(inputBill);

  amount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";

  disabledReset();
  removeErro();
});

const enabledReset = function () {
  resetButton.disabled = false;

  resetButton.classList.add("enabled");
  resetButton.classList.remove("disabled");
};
const disabledReset = function () {
  resetButton.classList.add("disabled");
  resetButton.classList.remove("enabled");
};
