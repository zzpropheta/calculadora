const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = 'Erro';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});