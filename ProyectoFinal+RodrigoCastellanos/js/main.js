function iniciarProductos() {
  fetch("/productos.json")
    .then((resInicial) => resInicial.json())
    .then((res) => {
      const productos = res
      let divCatalogo  = document.querySelector('#shop1')

      let h2 = document.createElement('h2');
      h2.classList.add('section-title')      
      h2.textContent = 'CATÁLOGO'

      let divShop = document.createElement('div')
      divShop.classList.add('shop-content')

      divCatalogo.appendChild(h2)

      productos.forEach(producto => {

        let divProducto = document.createElement('div')
        divProducto.setAttribute("id", producto.id);
        divProducto.classList.add('product-box')
        divProducto.innerHTML = `
                    <h2 class="product-title" id="title1">${producto.nombre}</h2>
                    <img src="/imges/${producto.imagen}" alt="" class="product-img">
                    <span class="price">$ ${producto.precio}</span>
                    <hr>
                    <p class = "text-warning">Descripción : 
                    <br>
                    <span class = "text-black-50">${producto.descripcion}</span></p>
                    <i class="fa-solid fa-cart-plus add-cart"></i>`


        divShop.appendChild(divProducto)
        divCatalogo.appendChild(divShop)

      });

    })
}
iniciarProductos()

function iniciarProductos2() {
  fetch("/productos2.json")
    .then((resInicial) => resInicial.json())
    .then((res) => {
      const productos = res
      let divCatalogo = document.querySelector('#shop2')

      let h2 = document.createElement('h2');
      h2.classList.add('section-title')
      h2.textContent = 'CATÁLOGO 2'

      let divShop = document.createElement('div')
      divShop.classList.add('shop-content')

      divCatalogo.appendChild(h2)

      productos.forEach(producto => {

        let divProducto = document.createElement('div')
        divProducto.setAttribute("id", producto.id);
        divProducto.classList.add('product-box')
        divProducto.innerHTML = `
                    <h2 class="product-title" id="title2">${producto.nombre}</h2>
                    <img src="/imges/${producto.imagen}" alt="" class="product-img">
                    <span class="price">$ ${producto.precio}</span>
                    <hr>
                    <p class = "text-warning">Descripción : 
                    <br>
                    <span class = "text-black-50">${producto.descripcion}</span></p>
                    <i class="fa-solid fa-cart-plus add-cart"></i>`


        divShop.appendChild(divProducto)
        divCatalogo.appendChild(divShop)

      });

    })
}
iniciarProductos2()

function iniciarProductos3() {
  fetch("/productos3.json")
    .then((resInicial) => resInicial.json())
    .then((res) => {
      const productos = res
      let divCatalogo = document.querySelector('#shop3')

      let h2 = document.createElement('h2');
      h2.classList.add('section-title')
      h2.textContent = 'CATÁLOGO 3'

      let divShop = document.createElement('div')
      divShop.classList.add('shop-content')

      divCatalogo.appendChild(h2)

      productos.forEach(producto => {

        let divProducto = document.createElement('div')
        divProducto.setAttribute("id", producto.id);
        divProducto.classList.add('product-box')
        divProducto.innerHTML = `
                    <h2 class="product-title" id="title3">${producto.nombre}</h2>
                    <img src="/imges/${producto.imagen}" alt="" class="product-img">
                    <span class="price">$ ${producto.precio}</span>
                    <hr>
                    <p class = "text-warning">Descripción : 
                    <br>
                    <span class = "text-black-50">${producto.descripcion}</span></p>
                    <i class="fa-solid fa-cart-plus add-cart"></i>`


        divShop.appendChild(divProducto)
        divCatalogo.appendChild(divShop)

      });

    })
}
iniciarProductos3()