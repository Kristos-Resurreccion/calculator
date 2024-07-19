const keypad = document.querySelector('.keypad');
const operatorButtons = document.querySelector('.operators');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

let numberA;
let operator;
let numberB;
let result;

function addNumber(num) {
    if (numberA == null) {
        numberA = num;
    } else {
        numberA += num;
    }

    display.textContent += num;
};

function operate(operation) {
    if (numberB == null) {
        numberB = numberA;
        numberA = null;
        operator = operation;
        display.textContent = numberA;
        display.textContent += `${operation} `;
    } else {
        numberA = parseInt(numberA);
        numberB = parseInt(numberB);
        console.log(operation);
        console.log('a', numberA);
        console.log('b', numberB);
        switch (operator) {
            case '+':
                result = numberA + numberB;
                break;
            case '-':
                result = numberB - numberA;
                break;
            case 'x':
                result = numberA * numberB;
                break;
            case '/':
                result = numberB / numberA;
                break;
        }
        display.textContent = result;
        console.log(result);
        numberA = result;
        numberB = null;
    }
}

const operatorIcons = ['+', '-', 'x', '/', '='];
function operators(operatorIcons) {
    for (const icon of operatorIcons) {
        const button = document.createElement('button');
        button.classList.add(`operator`);
        button.textContent = icon;
        button.addEventListener('click', e => {
            display.textContent += ` ${e.target.textContent} `;
            operate(e.target.textContent);
        })
        operatorButtons.append(button);
    }
}

operators(operatorIcons);

function numbers() {
    for (i = 9; i >= 0; i--) {
        const button = document.createElement('button');
        button.classList.add(`button`);
        button.textContent = `${i}`;
        button.addEventListener('click', e => {
            addNumber(e.target.textContent);
        })

        keypad.append(button);
    }


}

numbers();

function clearCalc() {
    const button = document.createElement('button');
    button.classList.add(`button`);
    button.textContent = 'Clear';
    button.addEventListener('click', e => {
        numberA = null;
        numberB = null;
        result = null;
        operator = null;
        display.textContent = '';
    })
    clear.appendChild(button);
}

clearCalc();





