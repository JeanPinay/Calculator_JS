const calculator = document.getElementById("calculator");
const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "C", "=", "/"];

for (let i = 0; i < buttons.length; i++) {
    const button = document.createElement("button");
    button.textContent = buttons[i];


}