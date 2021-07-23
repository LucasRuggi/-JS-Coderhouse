let productos = [];


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarProducto() {
        console.log("Nombre:", this.nombre, "Precio:", this.precio);

    }
}


function cargarProducto() {

    let nombre;
    let precio;
    let nuevoProducto;

    nombre = prompt("Ingrese el nombre del producto: ");
    precio = parseInt(prompt("Ingrese el precio del producto: "));

    nuevoProducto = new Producto(nombre, precio);
    nuevoProducto.mostrarProducto();

    productos.push(nuevoProducto);
}


function mostrarListadoProductos() {
    productos.forEach(x => console.log(x));
}

function eliminarProducto() {

    let nombreProducto = prompt("Ingresa el nombre del producto que queres eliminar: ");
    productos = productos.filter(x => nombreProducto != x.nombre);
    
}

