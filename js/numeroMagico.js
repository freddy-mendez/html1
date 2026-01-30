var numeromagico;
var intentosMax=5;

function adivinarNumeroMagico() {
    numeromagico=Math.floor(Math.random()*50)+1;
    console.log(numeromagico);
    let adivinado=false;
    let intentos=0;
    while(!adivinado && intentos<intentosMax){
        let numero=prompt("Adivina el número mágico (entre 1 y 50):");
        if (numero==numeromagico) {
            alert("¡Felicidades! Has adivinado el número mágico.");
            adivinado=true;
        } else {
            intentos++;
            if (intentos<intentosMax) {
                alert("Número incorrecto. Te quedan " + (intentosMax-intentos) + " intentos.");
            } else {
                alert("Lo siento, has agotado tus intentos. El número mágico era " + numeromagico + ".");
            }
            if (numero<numeromagico) {
                alert("El número mágico es mayor.");
            } else {
                alert("El número mágico es menor.");
            }
        }
    }
}