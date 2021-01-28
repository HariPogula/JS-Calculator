var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");

var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var clearBtn = document.getElementById("clearBtn");

var operation = document.getElementById("operation");
var output = document.getElementById("output");

disableButtons();
number1.addEventListener("input", disableButtons);
number2.addEventListener("input", disableButtons);

addBtn.addEventListener("click", () => {
  arithmaticOpeartion("addBtn");
});
subtractBtn.addEventListener("click", () => {
  arithmaticOpeartion("subtractBtn");
});

multiplyBtn.addEventListener("click", () => {
  arithmaticOpeartion("multiplyBtn");
});

divideBtn.addEventListener("click", () => {
  arithmaticOpeartion("divideBtn");
});

clearBtn.addEventListener("click", () => {
  arithmaticOpeartion("clearBtn");
});

function arithmaticOpeartion(op) {
  switch (op) {
    case "addBtn": {
      const result = parseInt(number1.value) + parseInt(number2.value);
      console.log("Add " + parseInt(number1.value) + parseInt(number2.value) + " and " + result);
      operation.innerHTML = `Operation: ${number1.value} + ${number2.value}`;
      output.innerHTML = `Result: ${result}`;
      break;
    }
    case "subtractBtn": {
      const result = parseInt(number1.value) - parseInt(number2.value);
      operation.innerHTML = `Operation: ${number1.value} - ${number2.value}`;
      output.innerHTML = `Result: ${result}`;
      break;
    }
    case "multiplyBtn": {
      const result = parseInt(number1.value) * parseInt(number2.value);
      operation.innerHTML = `Operation: ${number1.value} * ${number2.value}`;
      output.innerHTML = `Result: ${result}`;
      break;
    }
    case "divideBtn": {
      const result = parseInt(number1.value) / parseInt(number2.value);
      operation.innerHTML = `Operation: ${number1.value} / ${number2.value}`;
      output.innerHTML = `Result: ${result}`;
      break;
    }

    case "clearBtn": {
      number1.value = "";
      number2.value = "";
      operation.innerHTML = `Operation:`;
      output.innerHTML = `Result: `;
      disableButtons();
      break;
    }
  }
}

function disableButtons() {
  if (number1.value === "" || number2.value === "") {
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;

    addBtn.classList.remove("addBtn");
    subtractBtn.classList.remove("subtractBtn");
    multiplyBtn.classList.remove("multiplyBtn");
    divideBtn.classList.remove("divideBtn");
  } else {
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;

    addBtn.classList.add("addBtn");
    subtractBtn.classList.add("subtractBtn");
    multiplyBtn.classList.add("multiplyBtn");
    divideBtn.classList.add("divideBtn");
  }
}
