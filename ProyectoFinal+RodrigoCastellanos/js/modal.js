let burgerIcon = document.querySelector("#burger-icon");
let burgerMenu = document.querySelector("#burger-menu");
let crossIcon = document.querySelector("#cross-icon");

//  Open Menu
burgerIcon.onclick = () => {
  burgerMenu.classList.add("active");
  burgerIcon.classList.add("hide");
  crossIcon.classList.add("active");
};
//  Close Menu 
crossIcon.onclick = () => {
  burgerMenu.classList.remove("active");
  crossIcon.classList.remove("active");
  burgerIcon.classList.remove("hide");
};

/* Cart */
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

/* Open Cart*/
cartIcon.onclick = () => {
  cart.classList.add("active");
};
/* Close Cart */
closeCart.onclick = () => {
  cart.classList.remove("active");
};