
const url = "./brr.json";

var hom = document.querySelector("#hombre");
hom.addEventListener("click", contenido_dom);



async function contenido_dom() {
  try {
    const contener = document.querySelector(".contenedor");
    contener.innerHTML = ""
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
            alt="${resultado.nombre}" 
          />
          <p class="nom_product">${resultado.nombre}</p>
          
          <button><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
        </article>
      `;
      contener.appendChild(creador);
    };

  } catch (error) {
    console.error(error, "Algo salió mal");
  } 
}
contenido_dom()

var muj = document.querySelector("#mujer");
muj.addEventListener("click", women_dom);
const url_women = "./women.json";

async function women_dom() {
try {
  const contener = document.querySelector(".contenedor");
  contener.innerHTML = ""
const response = await fetch(url_women);
  const datos = await response.json();
  for (const key in datos) {
    const resultado = datos[key];
    const creador = document.createElement("section"); 
    creador.className = "ropa"; 
    creador.innerHTML = `

      <article class="camisa1">
        <img
          id="hola"
          src="${resultado.imagen}"
          alt="${resultado.nombre}" // Asegúrate de que el alt tenga un valor significativo
        />
        <p class="nom_product">${resultado.nombre}</p>
        <button><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
      </article>
    `;
    contener.appendChild(creador);
  };

} catch (error) {
  console.error(error, "Algo salió mal");
} 
}


women_dom()

var disc = document.querySelector("#disco");
disc.addEventListener("click", discos_dom);
const url_discos = "./discos.json";

async function discos_dom() {
try {
  const contener = document.querySelector(".contenedor");
  contener.innerHTML = ""
const response = await fetch(url_discos);
  const datos = await response.json();
  for (const key in datos) {
    const resultado = datos[key];
    const creador = document.createElement("section"); 
    creador.className = "ropa"; 
    creador.innerHTML = `

      <article class="camisa1">
        <img
          id="discos"
          src="${resultado.imagen}"
          alt="${resultado.nombre}" // Asegúrate de que el alt tenga un valor significativo
        />
        <p class="nom_product">${resultado.nombre}</p>
        <button id="boton_disc"><p class="compra">$ ${resultado.precio} <br>Comprar</p></button>
      </article>
    `;
    contener.appendChild(creador);
  }
;

} catch (error) {
  console.error(error, "Algo salió mal");
} 
}
discos_dom()


var carrito = document.querySelector("#logo_carro");
carrito.addEventListener("click", fun_carrito);

async function fun_carrito(){
  const todo = document.querySelector(".todo")
  todo.innerHTML = ""
  todo.innerHTML = `
  <nav class="carro">
  <div class="navbarp">
    <a href="./tienda.html"><img id="logo" src="https://www.anuelaa.com/cdn/shop/files/redanuel_1294x.png?v=1630547554" alt="logo de anuel"></a>
  </div>
</nav>

  <style>
    .todo{
      background: white;
    }
  </style>
`;
}


const url_loco = "./loco.json";

async function tata() {
try {
  const contener = document.querySelector(".contenedor");
  contener.innerHTML = ""
const response = await fetch(url_loco);
  const datos = await response.json();
  console.log(datos)
  for (const key in datos) {
    const resultado = datos[key];
    console.log(resultado.nombre)
  }
} catch (error) {
  console.error(error, "Algo salió mal");
} 
}
tata()