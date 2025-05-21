const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
let valorAtual = '';
let num1 = 0;
let num2 = 0;
let sinal = '';


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            display.value = ''
            valorAtual = '';
            num1 = 0;
            num2 = 0;
            sinal = '';
        } else if (value === '=') {
            try {
                if (sinal === '+') {
                    display.value = num1 + num2;
                    num1 = display.value;
                }
                if (sinal === '-') {
                    display.value = num1 - num2;
                    num1 = display.value;
                }
                if (sinal === '*') {
                    display.value = num1 * num2;
                    num1 = display.value;
                }
                if (sinal === '/') {
                    display.value = num1 / num2;
                    num1 = display.value;
                }

            } catch {
                display.value = 'Erro';
                valorAtual = '';
            }
        } else if (value >= 0 && value <= 9) {
            display.value += value;
            valorAtual += value;
        } else if (value === "+") {
            if (num1 != 0 && sinal != "") {
                num2 = parseFloat(valorAtual);
                valorAtual = '';
                sinal = "+"
                display.value = num1 + num2;
                num1 = parseFloat(display.value);
                display.value += sinal

                num2 = 0;



                console.log("-------------");
                console.log(num1);
                console.log(num2);
                console.log(display.value);
                console.log(valorAtual);
            } else {
                num1 = parseFloat(valorAtual);
                valorAtual = "";
                display.value += value;
                sinal = value;
            }


        } else if (value === "-") {
            if (num1) {
                num2 = valorAtual;
                display.value = num1 - num2;
                num1 = display.value;
            }



        } else if (value === "X") {



        } else if (value === "÷") {




        } else {
            valorAtual += value;
            display.value = valorAtual;
        }
    });
});