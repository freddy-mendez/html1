var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function calcular() {
    let num1 = parseInt(n1.value);
    let num2 = parseInt(n2.value);
    let resultado = 0;
    switch (document.getElementById("operacion").value) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "!":
            resultado = 1;
            for (let i = 1; i <= num1; i++) {
                resultado = resultado * i;
            }
            console.log(i);
            break;
    }
    document.getElementById("resultado").innerHTML=resultado;
}


function separarPalabras(frase) {
    return frase.replace(",","").replace(".","").split(" ");
}