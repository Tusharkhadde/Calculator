let screen = document.getElementById('screen');
function appendValue(value) {
    if (screen.value === '0' && value !== '.') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}
function clearScreen() {
    screen.value = '0';
}
function removeLastChar() {
    if (screen.value.length === 1) {
        screen.value = '0';
    } else {
        screen.value = screen.value.slice(0, -1);
    }
}
function calculateResult() {
    try {
        let expression = screen.value;
        let answer = eval(expression);        
        if (answer === Infinity || answer === -Infinity) {
            alert('Cannot divide by zero');
            screen.value = '0';
        } else {
            screen.value = answer;
        }
    } catch (error) {
        alert('Invalid expression');
        screen.value = '0';
    }
}