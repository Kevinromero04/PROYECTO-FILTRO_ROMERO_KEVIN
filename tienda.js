/*const url = "./brr.json";
async function contenido_dom() {
    try {
    const contener = document.querySelector(".ropa")
      const response = await fetch(url); 
      const datos = await response.json(); 
      datos.forEach(resultado => {
        console.log(resultado); 
        const creador = document.createAttribute("div")
        creador.className = "submenus"
    
        creador.innerHTML = `

    <article class="camisa1">
    <img
      id="hola"
      src="${resultado.imagen}"
      alt=""
    />
    <p>
    ${resultado.nombre}
    </p>
    <p class="compra">$ ${resultado.precio} <br>Comprar</p>
  </article>`;  
  contener.appendChild(creador)

      });

    } catch (error) {
      console.error(error, "Algo salió mal");
    } finally {
      cargando = false; 
    }
  }
  */
  const url = "./brr.json";

  async function contenido_dom() {
    try {
      const contener = document.querySelector(".contenedor");
    const response = await fetch(url);
      const datos = await response.json();
        datos.forEach(resultado => {
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
            <p class="compra">$ ${resultado.precio} <br>Comprar</p>
          </article>
        `;
        contener.appendChild(creador);
      });
  
    } catch (error) {
      console.error(error, "Algo salió mal");
    } 
  }
  
  contenido_dom();
