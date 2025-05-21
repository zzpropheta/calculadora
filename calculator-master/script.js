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
                num2 = parseFloat(valorAtual)
                sinais(num1, num2, sinal, valorAtual)
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
                sinais(num1, num2, sinal, valorAtual);
                valorAtual = '';
                sinal = "+"
                num1 = parseFloat(display.value);
                display.value += sinal
                num2 = 0;


            } else {
                num1 = parseFloat(valorAtual);
                valorAtual = "";
                display.value += value;
                sinal = value;
            }


        } else if (value === "-") {
            if (num1 != 0 && sinal != "") {
                num2 = parseFloat(valorAtual);
                sinais(num1, num2, sinal, valorAtual);
                valorAtual = '';
                sinal = "-"
                num1 = parseFloat(display.value);
                display.value += sinal
                num2 = 0;


            } else {
                num1 = parseFloat(valorAtual);
                valorAtual = "";
                display.value += value;
                sinal = value;
            }



        } else if (value === "X") {
            if (num1 != 0 && sinal != "") {
                num2 = parseFloat(valorAtual);
                sinais(num1, num2, sinal, valorAtual);
                valorAtual = '';
                sinal = "*"
                num1 = parseFloat(display.value);
                display.value += value
                num2 = 0;


            } else {
                num1 = parseFloat(valorAtual);
                valorAtual = "";
                display.value += value;
                sinal = "*";
            }


        } else if (value === "÷") {
            if (num1 != 0 && sinal != "") {
                num2 = parseFloat(valorAtual);
                sinais(num1, num2, sinal, valorAtual);
                valorAtual = '';
                sinal = "/"
                num1 = parseFloat(display.value);
                display.value += value
                num2 = 0;


            } else {
                num1 = parseFloat(valorAtual);
                valorAtual = "";
                display.value += value;
                sinal = "/";
            }



        } else {
            valorAtual += value;
            display.value = valorAtual;
        }
    });
});

function sinais(num1, num2, sinal, valorAtual) {
    var n1 = parseFloat(num1)
    var n2 = parseFloat(num2)



    if (n1 && sinal) {
        if (sinal === '+') {
            num2 = parseFloat(valorAtual);
            display.value = n1 + n2;
            num1 = display.value;
        }
        if (sinal === '-') {
            num2 = parseFloat(valorAtual);
            display.value = n1 - n2;
            num1 = display.value;
        }
        if (sinal === '*') {
            num2 = parseFloat(valorAtual);
            display.value = n1 * n2;
            num1 = display.value;
        }
        if (sinal === '/') {
            num2 = parseFloat(valorAtual);
            display.value = n1 / n2;
            num1 = display.value;
        }
    } else {
        display.value = num1;
        sinal = "";
        num2 = 0;
    }
}