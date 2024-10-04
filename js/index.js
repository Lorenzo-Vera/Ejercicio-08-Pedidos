//CARRITO 

const carrito = document.getElementById("#carrito");
const listaProductos = document.querySelector(".contenedorProducto");
const contenedorProductos = document.querySelector(".buy-card .listaDeProductos");
const botonCarrito = document.querySelector(".botonCarrito");
const botones = document.querySelectorAll(".agregarCarrito");
let productosCarrito = []
const cuentaCarrito = document.querySelector("#cuentaCarrito");


botones.forEach(clickeaProducto => {
    clickeaProducto.addEventListener("click", ProductoClickeado);
    
});


function ProductoClickeado(event) {

    const buton = event.target;
    const contenedor = buton.closest(".contenedorProducto");
    
    const productoSeleccionado = event.target.parentElement;
    
    LeerInfo(productoSeleccionado)
    

};


function LeerInfo (producto) {
        const infoProductos = {
            nombre: producto.querySelector(".nombreProducto").textContent,
            precio: producto.querySelector(".precio").textContent,
            id: producto.querySelector(".agregarCarrito").getAttribute("data-id"),
            cantidad: 1
        }
    
    //Actualizar cantidad
    const productoAgregado = productosCarrito.some(producto => producto.id === infoProductos.id)
    if (productoAgregado) {
        const prod = productosCarrito.map(producto =>{
            if (producto.id === infoProductos.id) {
                producto.cantidad++;
                return producto;
            } else{
                return producto;
            } 
        });
        
        [...productosCarrito,infoProductos]
    } else {
        productosCarrito = [...productosCarrito,infoProductos]
    };

    
    agregarCarrito()
    
};

function agregarCarrito() {
    borrarDuplicado()
    productosCarrito.forEach(producto =>{
        const item = document.createElement("div");
        item.innerHTML= ` <p> ${producto.nombre} </p>
        <p> ${producto.precio} </p>
        <p> ${producto.cantidad} </p>
        
        `
        contenedorProductos.appendChild(item);
        
    })
};

function borrarDuplicado() {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild)
    }
};





