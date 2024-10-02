
const botones = document.querySelectorAll("button");

botones.forEach(clickeaProducto => {
    clickeaProducto.addEventListener("click", agregarProductoClickeado);
})

const items = document.querySelector("#items");


function agregarProductoClickeado(event) {
    const buton = event.target;
    const contenedor = buton.closest(".contenedorProducto");
    

    const nombre = contenedor.querySelector(".nombreProducto").textContent;
    const precio = contenedor.querySelector(".precio").textContent;
    
    
    agregarAlCarrito(nombre);   
};

function agregarAlCarrito(nombre) {
/*     const list = document.createElement("li");
    const productosListados = "nombre"  + "precio";
    list.innerText = productosListados

    items.appendChild(list)

    console.log(productosListados);
     */
    
    const localHost = localStorage.getItem("producto") ;
    console.log(localHost);
    
        const nuevoProducto = nombre;
        nuevoProducto.cantidad = 1;
        
        localStorage.setItem("producto",nuevoProducto);
        cuentaCarrito();
}

const contadorCarrito = document.getElementById("#cuentaCarrito")
function cuentaCarrito() {
    const localHost = localStorage.getItem("producto") ;
    const cuenta = localHost.reduce((acum, current) => acum+current.cantidad,0)
    contadorCarrito.innerText = cuenta;
}
