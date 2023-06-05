let productosSeleccionados = []

let precioTotal = 0
let descuento = 0
let precioFinal = 0

const productoA = 70
const productoB = 60
const productoC = 100
const productoD = 20

let opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1)Agregar Productos \n 2)Agregar codigo descuento \n 3)Facturar \n 4)Salir"))

const calcularPorcentaje = (precioTotal, porcentaje) => {
    descuento = (precioTotal * porcentaje)
    return descuento
}

const agregarProductos = () => {
    let opcion = parseInt(prompt("Seleccione los productos deseados: \n 1)Producto A \n 2)Producto B \n 3)Producto C \n 4)Producto D \n 5)Ver productos seleccionados \n 6)Atras"))

    while (opcion != 6) {
        switch (opcion) {
            case 1:
                productosSeleccionados.push("Producto A");
                precioTotal += productoA
                break;
            case 2:
                productosSeleccionados.push("Producto B");
                precioTotal += productoB
                break;
            case 3:
                productosSeleccionados.push("Producto C");
                precioTotal += productoC
                break;
            case 4:
                productosSeleccionados.push("Producto D");
                precioTotal += productoD
                break;
            case 5:
                alert("Prudctos seleccionados:\n" + productosSeleccionados + "\nTotal: $" + precioTotal)   
                break;               
        }
        
        opcion = parseInt(prompt("Seleccione los productos deseados: \n 1)Producto A \n 2)Producto B \n 3)Producto C \n 4)Producto D \n 5)Ver productos seleccionados \n 6)Atras"))
    }
}

const agregarCodigoDescuento = () => {
    let codigoDescuento = prompt("Ingrese codigo de descuento o ingrese 4 para volver:")

    while (codigoDescuento != 4) {
        switch (codigoDescuento) {
            case "aaa":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.10));
                alert ("Precio Final: $" + precioFinal)
                return;
            case "bbb":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.20));
                alert ("Precio Final: $" + precioFinal)
                return;
            case "ccc":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.30));
                alert ("Precio Final: $" + precioFinal)
                return;
            default:
                alert("Codigo no valido");
                codigoDescuento = prompt("Ingrese codigo de descuento o ingrese 4 para volver:")
                break;
        }
        
    }
}

while (opcion != 4) {
    switch (opcion) {
        case 1:
            agregarProductos();
            break;
        case 2:
            agregarCodigoDescuento();
            break;
        case 3:
            alert("Sub-total: $" + precioTotal + "\n" + "Descuento: $" + descuento + "\n" + "Total a pagar: $" + precioFinal);
            break;
        default:
            alert ("Opcion no valida");
            break;
}

    opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1)Agregar Productos \n 2)Agregar codigo descuento \n 3)Facturar \n 4)Salir"))

}


