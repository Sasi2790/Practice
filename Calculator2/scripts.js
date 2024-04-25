const display = document.getElementById('display');
const operator = document.getElementsByClassName('operator');
function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "undefined" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    }
    else {
        if (input === '.' && display.value === '0') {
            display.value += input;
        }
        else if (!isNaN(input) && display.value === '0'){
            display.value = input;
        }
        else {
            display.value += input;
        }
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (!isNaN(display.value)) {
        return;
    } 
    else {
        try {
            display.value = eval(display.value);
            display.value = parseFloat(display.value).toFixed(8);
            display.value = parseFloat(display.value);
        } catch (error) {
            display.value = "Error"; // Handle any evaluation errors
        }
    }
}

function clear1() {
    if (display.value === "Error" || display.value === "undefined" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    }
    else {
    display.value = display.value.substring(0, display.value.length - 1);
    }
}

