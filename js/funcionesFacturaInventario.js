var total=0;
var numProductos=0;
var ids = 1;

function addFila() {
    var tabla = document.getElementById("tblFactura").getElementsByTagName('tbody')[0];
    //console.log(tabla);
    var fila = tabla.insertRow(-1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);

    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "-";
    botonEliminar.onclick = function() {
        var row = this.parentNode.parentNode;
        row.remove();
        calcularTotal();

        
        numProductos--;
        var contador = document.getElementById("numProductos");
        contador.innerHTML = "<b>"+numProductos+"</b>";
    }
    celda1.appendChild(botonEliminar);

    var caja1 = addSelect("codigo");
    caja1.onchange = function() {
        const [codigo, nombre, precio] = this.value.split("-");
        let identificacion = this.id.substring(6);
        document.getElementById("nombre"+identificacion).value=nombre.trim();
        document.getElementById("valorUnitario"+identificacion).value=precio.trim();
    }
    celda2.appendChild(caja1);

    var caja2 = addInput("nombre", "text", true);
    celda3.appendChild(caja2);

    var caja3 = addInput("cantidad","number");
    caja3.value=0;
    caja3.onblur = function() {
        var cantidad = document.getElementById(this.id).value;
        var numeroId = this.id.substring(8);
        if (cantidad=="" || isNaN(cantidad)) {
            cantidad = 0;
            document.getElementById(this.id).value=0;
            document.getElementById("subTotal"+numeroId).value=0;
        } else {
            var valorUnitario = document.getElementById("valorUnitario"+numeroId).value;
            if (valorUnitario=="" || isNaN(valorUnitario)) {
                valorUnitario = 0;
                document.getElementById("valorUnitario"+numeroId).value=0;
                document.getElementById("subTotal"+numeroId).value=0;
            } else {
                var subTotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subTotal"+numeroId).value=subTotal;
            }
        }
        calcularTotal();
    };
    celda5.appendChild(caja3);

    var caja4 = addInput("valorUnitario","number",true);
    caja4.value=0;
    caja4.onblur = function() {
        var valorUnitario = document.getElementById(this.id).value;
        var numeroId = this.id.substring(13);
        if (valorUnitario=="" || isNaN(valorUnitario)) {
            valorUnitario = 0;
            document.getElementById(this.id).value=0;
            document.getElementById("subTotal"+numeroId).value=0;
        } else {
            var cantidad = document.getElementById("cantidad"+numeroId).value;
            if (cantidad=="" || isNaN(cantidad)) {
                cantidad = 0;
                document.getElementById("cantidad"+numeroId).value=0;
                document.getElementById("subTotal"+numeroId).value=0;
            } else {
                var subTotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subTotal"+numeroId).value=subTotal;
            }
        }
        calcularTotal();
    };
    celda4.appendChild(caja4);

    var caja5 = addInput("subTotal", "number", true);
    celda6.appendChild(caja5);

    cargarFichas(caja1);

    numProductos++;
    ids++;
    var contador = document.getElementById("numProductos");
    contador.innerHTML = "<b>"+numProductos+"</b>";

}

function addInput(valorId, typeInput, readOnly=false) {
    var caja = document.createElement("input");
    caja.id = valorId+ids;
    caja.name = valorId+ids;
    caja.type = typeInput;
    if (readOnly==true) {
        caja.readOnly = true;
    }
    return caja;
}

function addSelect(valorId) {
    var caja = document.createElement("select");
    caja.id = valorId+ids;
    caja.name = valorId+ids;
    return caja;
}

function calcularTotal() {
    var tabla = document.getElementById("tblFactura").getElementsByTagName("tbody")[0];
    var filas = tabla.getElementsByTagName("tr");
    total = 0;
    for (var i=0; i<filas.length; i++) {
        var caja = filas[i].getElementsByTagName("input")[3].value;
        if (caja=="" || isNaN(caja)) {
            caja = 0;
        }
        total = total + parseInt(caja);
    }
    document.getElementById("totalFactura").innerHTML = total;
}

function cargarFichas(elemento) {
    var carga = new XMLHttpRequest();
    carga.open("GET", "inventario.txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta=this.responseText;
            let productos = respuesta.split("\r\n");
            elemento.innerHTML="<option>Seleccione un Producto</option>";
            for(let i =0; i<productos.length; i++) {
                var option = document.createElement("option");
                let datos = productos[i].split(";");
                option.text=datos[0];
                option.value=datos[0] + " - "+datos[1]+" - "+datos[2];
                elemento.appendChild(option);
            }
            //document.getElementById("fichas").innerHTML = "<option>Seleccione una Ficha</option><br/>" + this.responseText;
        }
    };
    carga.send();
}