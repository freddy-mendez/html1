function calcularDivisoresSinArreglos() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    let resultado1 = document.getElementById("resultadoDivisores1");
    let resultado2 = document.getElementById("resultadoDivisores2");
    
    let divisores1 = "Los divisores de " + numero1 + " son: <br><ul>";
    for (let i = 1; i <= numero1; i++) {
        if (numero1 % i == 0) {
            divisores1 +=  "<li>"+ i + "</li> ";
        }
    }
    divisores1 += "</ul>";
    resultado1.innerHTML = divisores1;

    let divisores2 = "Los divisores de " + numero2 + " son: <br><ol>";
    for (let i = 1; i <= numero2; i++) {
        if (numero2 % i == 0) {
            divisores2 += "<li>"+ i + "</li>";
        }
    }
    divisores2 += "</ol>";
    resultado2.innerHTML = divisores2;
}



function calcularDivisores() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    let divisores = [];
    for (let i = 1; i <= numero1; i++) {
        if (numero1 % i === 0) {
            divisores.push(i);
        }
    }
    mostrarDivisores(divisores, 1, numero1);
    divisores = [];
    for (let i = 1; i <= numero2; i++) {
        if (numero2 % i === 0) {
            divisores.push(i);
        }
    }
    mostrarDivisores(divisores, 2, numero2);
}

function mostrarDivisores(divisores, num, numero) {
    let resultado1 = document.getElementById("resultadoDivisores"+num);
    resultado1.innerHTML = "Los divisores de " + numero + " son: <br>" + divisores.join(",<br> ");
}



