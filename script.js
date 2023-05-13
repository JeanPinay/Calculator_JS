
var displayField = document.getElementById("result");
var calculator = document.getElementById("calculator");
var buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "C", "=", "/"];

for (var i = 0; i < buttons.length; i++) {
    var button = document.createElement("button");
    button.textContent = buttons[i];

    if (buttons[i] === "C") {
        button.classList.add("clear");
        button.addEventListener("click", clearResult);
    } else if (buttons[i] === "=") {
        button.classList.add("equal");
        button.addEventListener("click", calculateResult);
    } else if (isNaN(parseInt(buttons[i]))) {
        button.classList.add("operator");
        button.addEventListener("click", function() {
            display(this.textContent);
        });
    } else {
        button.addEventListener("click", function() {
            display(this.textContent);
        });
    }

    calculator.appendChild(button);
}

function display(value) {
    displayField.value += value;
}

function clearResult() {
    displayField.value = "";
}

function calculateResult() {
    const result = eval(displayField.value);
    displayField.value = result;
}
