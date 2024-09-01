const url_women = "./women.json";
var hom = document.querySelector("#hombre");
hom.addEventListener("click", hombre);

var mujer = document.querySelector("#mujer");
mujer.addEventListener("click", women_dom);



let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

async function women_dom() {
  try {
    const contener = document.querySelector(".contenedor");
    contener.innerHTML = "";
    const response = await fetch(url_women);
    const datos = await response.json();

    for (const key_mujer in datos) {
      const resultado = datos[key_mujer];
      const creador = document.createElement("section"); 
      creador.className = "ropa"; 
      creador.innerHTML = `
        <article class="camisa1">
          <img
            id="hola"
            src="${resultado.imagen}"
            alt="${key_mujer}"
          />
          <p class="nom_product">${key_mujer}</p>
          <button class="women" data-key="${key_mujer}"><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
        </article>
      `;
      contener.appendChild(creador);
    }

    document.querySelectorAll('.women').forEach(button => {
      button.addEventListener('click', (event) => {
        const key_mujer = event.target.closest('button').getAttribute('data-key');
        addToCart2(key_mujer);
      });
    });

  } catch (error) {
    console.error(error, "Algo salió mal");
  } 
}

const url = "./brr.json";

async function hombre() {
    try {
      const contener = document.querySelector(".contenedor");
      contener.innerHTML = "";
      const response = await fetch(url);
      const datos = await response.json();
  
      for (const key in datos) {
        const resultado = datos[key];
        const creador = document.createElement("section"); 
        creador.className = "ropa"; 
        creador.innerHTML = `
          <article class="camisa1">
          <img
            class="hola"
            src="${resultado.imagen}"
            alt="${key}" 
          />
          <p class="nom_product">${key}</p>
          
          <button class="men" data-key="${key}" ><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
        </article>
      `;
        contener.appendChild(creador);
      }
  
      // Agregar event listeners a los botones después de que se hayan creado
      document.querySelectorAll('.men').forEach(button => {
        button.addEventListener('click', (event) => {
          const key = event.target.closest('button').getAttribute('data-key');
          addToCart(key);
        });
      });
  
    } catch (error) {
      console.error(error, "Algo salió mal");
    } 
  }

hombre()




async function addToCart(key) {
    try {
      const response = await fetch(url);
      const datos = await response.json();
      const producto = datos[key];
  

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  

      const productoEnCarrito = carrito.find(item => item.key === key);
  
      if (productoEnCarrito) {

        productoEnCarrito.cantidad += 1;
      } else {

        carrito.push({
          key: key,
          nombre: key,
          imagen: producto.imagen,
          precio: producto.precio,
          cantidad: 1
        });
      }
  

      localStorage.setItem('carrito', JSON.stringify(carrito));

      alert(`${key} ha sido añadido al carrito`);
    } catch (error) {
      console.error(error, "Algo salió mal");
    }
  }
  async function addToCart2(key_mujer) {
    try {
        const response = await fetch(url_women);
        const datos = await response.json();
        const producto = datos[key_mujer];
    
  
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
  
        const productoEnCarrito = carrito.find(item => item.key === key_mujer);
    
        if (productoEnCarrito) {
  
          productoEnCarrito.cantidad += 1;
        } else {
  
          carrito.push({
            key: key_mujer,
            nombre: key_mujer,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
          });
        }
    
  
        localStorage.setItem('carrito', JSON.stringify(carrito));
  
        alert(`${key_mujer} ha sido añadido al carrito`);
      } catch (error) {
        console.error(error, "Algo salió mal");
      }
  
  }

women_dom();

var disc = document.querySelector("#disco");
disc.addEventListener("click", discos_dom);
const url_discos = "./discos.json";

async function discos_dom() {
try {
  const contener = document.querySelector(".contenedor");
  contener.innerHTML = ""
const response = await fetch(url_discos);
  const datos = await response.json();
  for (const key_disco in datos) {
    const resultado = datos[key_disco];
    const creador = document.createElement("section"); 
    creador.className = "ropa"; 
    creador.innerHTML = `

      <article class="camisa1">
        <img
          id="discos"
          src="${resultado.imagen}"
          alt="${key_disco}" // Asegúrate de que el alt tenga un valor significativo
        />
        <p class="nom_product">${key_disco}</p>
        <button class="boton_disc" data-key="${key_disco}"><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
      </article>
    `;
    contener.appendChild(creador);
  }
;
document.querySelectorAll('.boton_disc').forEach(button => {
    button.addEventListener('click', (event) => {
      const key_disco = event.target.closest('button').getAttribute('data-key');
      addToCart3(key_disco);
    });
  });
} catch (error) {
  console.error(error, "Algo salió mal");
} 
}
discos_dom()

async function addToCart3(key_disco) {
    try {
        const response = await fetch(url_discos);
        const datos = await response.json();
        const producto = datos[key_disco];
    
  
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
  
        const productoEnCarrito = carrito.find(item => item.key === key_disco);
    
        if (productoEnCarrito) {
  
          productoEnCarrito.cantidad += 1;
        } else {
  
          carrito.push({
            key: key_disco,
            nombre: key_disco,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
          });
        }
    
  
        localStorage.setItem('carrito', JSON.stringify(carrito));
  
        alert(`${key_disco} ha sido añadido al carrito`);
      } catch (error) {
        console.error(error, "Algo salió mal");
      }
  
  }
