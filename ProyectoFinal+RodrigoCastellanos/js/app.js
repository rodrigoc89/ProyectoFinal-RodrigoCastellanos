fetch("/productos.json")
    .then((resInicial) => resInicial.json())
    .then((res) => {

        document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready();

        function ready() {
            /* remover item */
            if (JSON.parse(localStorage.getItem("counter")) == null) {
                localStorage.setItem("counter", "0");
            }
            contador.textContent = JSON.parse(localStorage.getItem("counter"));

            let DOMTotal = document.getElementsByClassName("total-price")[0];
            DOMTotal.innerText = "$" + JSON.parse(localStorage.getItem("total"));
            if (JSON.parse(localStorage.getItem("total")) == null) {
                DOMTotal.innerText = "$0";
            }

            const productos1 = JSON.parse(localStorage.getItem("carrito") || "[]");
            for (const product of productos1) {
                addProductToCart(product.title, product.price, product.productImg, product.id);
            }

            let removeCartButtons = document.getElementsByClassName("cart-remove");
            for (let i = 0; i < removeCartButtons.length; i++) {
                let button = removeCartButtons[i];
                button.addEventListener("click", removeCartItem);
            }

            let quantityInput = document.getElementsByClassName("cart-quantity");
            for (let i = 0; i < quantityInput.length; i++) {
                let input = quantityInput[i];
                input.addEventListener("change", quantityChanged);
            }
            /* agregar al carrito */
            let addCart = document.getElementsByClassName("add-cart");
            for (let i = 0; i < addCart.length; i++) {
                let button = addCart[i];
                button.addEventListener("click", addCartClicked);
            }

            document
                .getElementsByClassName("btn-buy")[0]
                .addEventListener("click", buyButtonClicked);

        }


        /*Boton Comprar */
        function buyButtonClicked() {
            const productos1 = JSON.parse(localStorage.getItem('carrito') || '[]');
            if (productos1.length == 0) {
                alertVacio()
            } else {
                alertComprar()
                for (let i = productos1.length; i > 0; i--) {
                    productos1.pop();
                }

                let cartContent = document.getElementsByClassName('cart-content')[0];
                while (cartContent.hasChildNodes()) {
                    cartContent.removeChild(cartContent.firstChild);
                }
                localStorage.setItem('carrito', JSON.stringify(productos1));
                localStorage.setItem('counter', '0');
                contador.textContent = JSON.parse(localStorage.getItem('counter'));
                updateTotal();
            }

            cart.classList.remove('active');
        }


        /* remover itel del carrito*/
        function removeCartItem(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            alertProductoFueraCarrito()
            const id = buttonClicked.parentElement.id;
            const productos1 = JSON.parse(localStorage.getItem("carrito") || "[]");
            const nuevosProductos = productos1.filter(producto => producto.id !== id);
            localStorage.setItem("carrito", JSON.stringify(nuevosProductos));

            updateTotal();
        }


        /* cambiar cantidad */
        function quantityChanged(event) {
            let input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updateTotal();
        }

        /* agregar al carro */
        function addCartClicked(event) {
            let button = event.target;
            let shopProducts = button.parentElement;

            let id = shopProducts.id;
            let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
            let price = shopProducts.getElementsByClassName("price")[0].innerText;
            let productImg = shopProducts.getElementsByClassName("product-img")[0].src;

            const productos1 = JSON.parse(localStorage.getItem("carrito") || "[]");

            const existeProducto = productos1.find(producto => producto.id == id);
            if (!existeProducto) {
                localStorage.setItem("carrito", JSON.stringify([...productos1, { id, title, price, productImg }]));
                alertProductoCarrito()
            }

            addProductToCart(title, price, productImg, id);
            updateTotal();
        }


        function addProductToCart(title, price, productImg, id) {
            let cartShopBox = document.createElement("div");
            cartShopBox.setAttribute("id", id);

            cartShopBox.classList.add("cart-box");
            let cartItems = document.getElementsByClassName("cart-content")[0];
            let cartItemsNames = document.getElementsByClassName("cart-product-title");
            for (let i = 0; i < cartItemsNames.length; i++) {
                if (cartItemsNames[i].innerText == title) {
                    alertRepetido()
                    return;
                }
            }

            let cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>   
                                <input type="number" value="1" class="cart-quantity"> 
                            </div>
                            <i class='bx bxs-trash-alt cart-remove'></i>
    `;
            cartShopBox.innerHTML = cartBoxContent;
            cartItems.append(cartShopBox);
            cartShopBox
                .getElementsByClassName("cart-remove")[0]
                .addEventListener("click", removeCartItem);
            cartShopBox
                .getElementsByClassName("cart-quantity")[0]
                .addEventListener("change", quantityChanged);

        }


        //Actualizacion
        function updateTotal() {
            let cartContent = document.getElementsByClassName('cart-content')[0];
            let cartBoxes = document.getElementsByClassName('cart-box');
            let total = 0;
            let counter = 0;

            for (let i = 0; i < cartBoxes.length; i++) {
                let cartBox = cartBoxes[i];
                let priceElement = cartBox.getElementsByClassName('cart-price')[0];
                let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
                let price = parseFloat(priceElement.innerText.replace('$', ''));
                let quantity = quantityElement.value;

                total += price * quantity;

                let contador = document.getElementById('contador');
                counter += parseInt(quantity);
                localStorage.setItem('counter', counter);
                contador.textContent = JSON.parse(localStorage.getItem('counter'));
            }

            if (cartBoxes.length == 0) {
                document.getElementById('contador').textContent = counter;
                localStorage.setItem('counter', counter);
            }

            total = Math.round(total * 100) / 100;
            localStorage.setItem('total', JSON.stringify(total));
            document.getElementsByClassName('total-price')[0].innerText = '$' + JSON.parse(localStorage.getItem('total'));
        }
    })


