class Producto {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
const bolsaDeCompras = [];

const rosquilla = new Producto("Rosquilla", 1, 2);
const duff = new Producto("Cerveza Duff", 1, 5);
const malteada = new Producto("Malteada", 1, 3.5);
const krustyOs = new Producto("Krusty Os", 1, 3);
const salchicha = new Producto("Salchicha", 1, 2.5);
const m320 = new Producto("M-320", 1, 7.5);

let dinero = 0;


const elementoDinero = document.querySelector("#dinero");
elementoDinero.innerText = dinero;
const elementoBolsa = document.querySelector("#bolsa");

function comprar(producto){
    if (bolsaDeCompras.length + producto.cantidad > 7) {
        alert("Demasiados productos, ¡NOS ENTRAN EN LAS BOLSAS!.");
        alert("Gracias, vuelvas prontos.");
    }else{
        bolsaDeCompras.push(producto);
        dinero = dinero + producto.precio;
        bolsaProductos();
    }
}

function bolsaProductos(){
    elementoBolsa.innerHTML = "";
    for(const producto of bolsaDeCompras){
        let indiceProducto = bolsaDeCompras.indexOf(producto);
        let elementoProducto = `<div class="cursor prodCompradosBg" onclick="devolver(${indiceProducto})"><img src="img/${producto.nombre}.png" alt="" class="mt-2"><h3>${producto.nombre}</h3>
        </div>`;
        elementoBolsa.innerHTML += elementoProducto;
    }
    elementoDinero.innerText = dinero;
    console.log(bolsaDeCompras);
}


function devolver(indice){
    const producto = bolsaDeCompras[indice];
    dinero = dinero - producto.precio;
    bolsaDeCompras.splice(indice, 1);
    bolsaProductos();
}