
document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.querySelector('#lista-productos');
    const total = document.querySelector('#total');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const comprarBtn = document.querySelector('#comprar');
    const listaProductosDisponibles = document.querySelector('#lista-productos-disponibles');
    let carrito = [];

    // Función para agregar un producto al carrito
    function agregarProducto(e) {
        if (e.target.classList.contains('agregar-carrito')) {
            const item = e.target.parentElement;
            const productoSeleccionado = {
                id: item.getAttribute('data-id'),
                nombre: item.textContent.trim().slice(0, -13),
                precio: parseFloat(item.getAttribute('data-precio'))
            };
            carrito.push(productoSeleccionado);
            mostrarCarrito();
        }
    }

    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        listaProductos.innerHTML = '';
        carrito.forEach((producto, index) => {
            const { nombre, precio } = producto;
            const item = document.createElement('li');
            item.textContent = `${nombre} - $${precio}`;
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.classList.add('eliminar-producto');
            eliminarBtn.onclick = () => eliminarProducto(index);
            item.appendChild(eliminarBtn);
            listaProductos.appendChild(item);
        });

        // Calcular y mostrar total
        const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
        total.textContent = precioTotal.toFixed(2);

        // Habilitar botón de compra si hay productos en el carrito
        comprarBtn.disabled = carrito.length === 0;
    }

    // Función para eliminar un producto del carrito
    function eliminarProducto(index) {
        carrito.splice(index, 1);
        mostrarCarrito();
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito = [];
        mostrarCarrito();
    }

    // Función para realizar la compra
    function comprar() {
        alert('Compra realizada con éxito');
        vaciarCarrito();
    }

    // Eventos
    listaProductosDisponibles.addEventListener('click', agregarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    comprarBtn.addEventListener('click', comprar);
});
