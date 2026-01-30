function jugar(opcion) {
    alert("Has elegido: " + opcion);
    let opt = prompt("Elige: piedra, papel o tijera").toLowerCase();
    let valor = parseInt(Math.random()*3)+1;
    let resultado = "";

    switch(valor) {
        case 1:
            alert("Maquina eligio: Piedra");
            if (opcion === "piedra") {
                resultado = "Empate";
            } else if (opcion === "papel") {
                resultado = "Ganaste";
            } else {
                resultado = "Perdiste";
            }
            break;
        case 2:
            alert("Maquina eligio: Papel");
            if (opcion === "papel") {
                resultado = "Empate";
            } else if (opcion === "tijera") {
                resultado = "Ganaste";
            } else {
                resultado = "Perdiste";
            }
            break;
        case 3:
            alert("Maquina eligio: Tijera");
            if (opcion === "tijera") {
                resultado = "Empate";
            } else if (opcion === "piedra") {
                resultado = "Ganaste";
            } else {
                resultado = "Perdiste";
            }
            break;
    }
    alert("Resultado: " + resultado);
}

function jugarArreglo(opcion) {
    alert("Has elegido: " + opcion);
    let opt = prompt("Elige: piedra, papel o tijera").toLowerCase();
    let valor = parseInt(Math.floor(Math.random()*3));
    let valores = ["piedra", "papel", "tijera"];
    let resultado = "";

    if (valores[valor] === opcion) {
        alert("Maquina eligio: "+opcion);
                resultado = "Empate";
    } else if ((valores[valor] === "Piedra" && opcion === "papel") || (valores[valor] === "Papel" && opcion === "tijera") || (valores[valor] === "Tijera" && opcion === "piedra")) {
        alert("Maquina eligio: "+valores[valor]);
        resultado = "Ganaste";

    } else {
        alert("Maquina eligio: "+valores[valor]);
                resultado = "Perdiste";
    }
    alert("Resultado: " + resultado);
}