const keypad = document.querySelector('.keypad');
const operatorButtons = document.querySelector('.operators');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

let numA;
let operator;
let numB;

function add(a, b) {
    numb = a + b;
    return Math.round((numb + Number.EPSILON) * 100) / 100;
}

function sub(a, b) {
    numb = b - a;
    return Math.round((numb + Number.EPSILON) * 100) / 100;
}

function div(a, b) {
    numb = b / a;
    return Math.round((numb + Number.EPSILON) * 100) / 100;;
}

function mult(a, b) {
    numb = b * a;
    return Math.round((numb + Number.EPSILON) * 100) / 100;
}

function operate(a, b, oper) {
    numA = parseInt(a);
    numB = parseInt(b);
    switch (oper) {
        case '+':
            numA = add(numA, numB);
            numB = null;
            display.textContent = numA;
            break;
        case '-':
            numA = sub(numA, numB);
            numB = null;
            display.textContent = numA;
            break;
        case '/':
            numA = div(numA, numB);
            numB = null;
            display.textContent = numA;
            break;
        case 'x':
            numA = mult(numA, numB);
            numB = null;
            display.textContent = numA;
            break;
    }
}

const operatorIcons = ['+', '-', 'x', '/', '='];
function operators(operatorIcons) {
    for (const icon of operatorIcons) {
        const button = document.createElement('button');
        button.classList.add(`operator`);
        button.textContent = icon;
        button.addEventListener('click', e => {
            if (numA != null) {

                if (e.target.textContent == '=') {
                    if (numB != null && numA != null && operator != null) {
                        operate(numA, numB, operator);
                    }
                }
                else if (numB == null) {
                    numB = numA;
                    numA = null;
                    operator = e.target.textContent;
                    display.textContent = ` ${e.target.textContent}`;
                }


            }

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
            if (numA == null) {
                numA = e.target.textContent;
            } else {
                numA += e.target.textContent;
            }
            display.textContent = numA;
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





