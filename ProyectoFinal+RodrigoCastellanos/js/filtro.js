let btnAll = document.querySelector("#btn-todos")
let btn1 = document.querySelector("#btn-shop1")
let btn2 = document.querySelector("#btn-shop2")
let btn3 = document.querySelector("#btn-shop3")

let catalogo1 = document.querySelector("#shop1")
let catalogo2 = document.querySelector("#shop2")
let catalogo3 = document.querySelector("#shop3")

btnAll.addEventListener("click", allProducts);
btn1.addEventListener("click", oneProducts);
btn2.addEventListener("click", twoProducts);
btn3.addEventListener("click", threeProducts);

function allProducts() {
    catalogo1.classList.remove("showProduct")
    catalogo1.classList.remove("hideProduct")
    catalogo2.classList.remove("showProduct")
    catalogo2.classList.remove("hideProduct")
    catalogo3.classList.remove("showProduct")
    catalogo3.classList.remove("hideProduct")

}function oneProducts() {
    catalogo2.classList.add("hideProduct")
    catalogo3.classList.add("hideProduct")
    catalogo2.classList.remove("showProduct")
    catalogo3.classList.remove("showProduct")
    catalogo1.classList.add("showProduct")
}

function twoProducts() {
    catalogo1.classList.add("hideProduct")
    catalogo3.classList.add("hideProduct")
    catalogo1.classList.remove("showProduct")
    catalogo3.classList.remove("showProduct")
    catalogo2.classList.add("showProduct")
}

function threeProducts() {
    catalogo1.classList.add("hideProduct")
    catalogo2.classList.add("hideProduct")
    catalogo1.classList.remove("showProduct")
    catalogo2.classList.remove("showProduct")
    catalogo3.classList.add("showProduct")
}