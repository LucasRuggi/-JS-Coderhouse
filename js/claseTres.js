
const iva = 1.21;
const cuotaValida = cuotaFinal => cuotaFinal % 3 == 0 && cuotaFinal % 9 != 0 && cuotaFinal < 13 && cuotaFinal >= 0;

function pedirValidarPrecio() {
    let precio = 0;
    while (isNaN(precio) || precio <= 0) {
        precio = parseInt(prompt("Ingresa el precio sin IVA: "));
    }
    return precio;
}

function pedirValidarCuota() {
    let cuota = 0;
    while (!cuotaValida(cuota)) {
        cuota = parseInt(prompt("Ingresa la cantidad de cuotas (3, 6 o 12): "))
    }
    return cuota;
}

const precioConIva = (pedirValidarPrecio() * iva);
const cuotaFinal = pedirValidarCuota();
const precioConIvaYCuota = precioConIva / cuotaFinal;

console.log("El precio final con IVA es: " + precioConIva + " la cantidad de cuentas son: " + cuotaFinal + " el precio por cada cuota va a ser: " +precioConIvaYCuota);




