const keypad = document.querySelector('.keypad');
const operatorButtons = document.querySelector('.operators');
const display = document.querySelector('.display');
console.log(keypad);

const operatorIcons = ['+', '-', 'x', '/', '='];
function operators(operatorIcons) {
    for (const icon of operatorIcons) {
        const button = document.createElement('button');
        button.classList.add(`operator`);
        button.textContent = icon;
        button.addEventListener('click', e => {
            display.textContent += ` ${e.target.textContent} `;
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
            display.textContent += e.target.textContent;
        })




        keypad.append(button);
        console.log(i);
    }


}

numbers();





