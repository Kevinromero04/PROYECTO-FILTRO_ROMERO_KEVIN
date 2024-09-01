function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contener = document.querySelector(".compras");
  
    if (carrito.length === 0) {
      contener.innerHTML = "<p>El carrito está vacío.</p>";
      return;
    }
  
    contener.innerHTML = carrito.map(producto => `
      <section class="cuadros">
        <article class="cambios">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div class="organiza">
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
          </div>
          <div class="cantidad">
            <p>Cantidad: ${producto.cantidad}</p>
          </div>
        </article>
      </section>
    `).join('');
  }
  
  // Llamada a la función cuando el DOM está completamente cargado
  document.addEventListener('DOMContentLoaded', mostrarCarrito);
  
  function clearCart() {
    try {
      // Eliminar el carrito del localStorage
      localStorage.removeItem('carrito');
      
      // Actualizar la vista del carrito para mostrar que está vacío
      const contener = document.querySelector(".compras");
      contener.innerHTML = "<p>El carrito está vacío</p>";
  
      console.log("Carrito vacío");
    } catch (error) {
      console.error(error, "Algo salió mal al vaciar el carrito");
    }
  }
  
  // Agregar event listener al botón de borrar carrito
  document.addEventListener('DOMContentLoaded', () => {
    const borrarBtn = document.querySelector(".borrar");
    if (borrarBtn) {
      borrarBtn.addEventListener('click', clearCart);
    }
  });
  