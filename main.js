const keypad = document.querySelector('.keypad');
const operatorButtons = document.querySelector('.operators');
console.log(keypad);

const operatorIcons = ['+', '-', 'x', '/', '='];
function operators(operatorIcons) {
    for (const icon of operatorIcons) {
        const button = document.createElement('button');
        button.classList.add(`operator-${icon}`);
        button.textContent = icon;

        operatorButtons.append(button);
    }
}

operators(operatorIcons);


function numbers() {
    for (i = 9; i >= 0; i--) {
        const button = document.createElement('button');
        button.classList.add(`button-${i}`);
        button.textContent = `${i}`;

        keypad.append(button);
        console.log(i);
    }
}

numbers();