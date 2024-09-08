import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";

export function handleCartIconClick() {
  let cartIcon = document.querySelector("#cart-icon");

  cartIcon.addEventListener("click", respondToCartIconClick);

  function respondToCartIconClick(event) {
    let cartIcon = event.target;

    let id = cartIcon.dataset.id;
    let title = cartIcon.dataset.title;
    let price = cartIcon.dataset.price;

    if (isIdInCart(id)) {
      removeFromCart(id);
      cartIcon.classList.add("fa-cart-plus");
      cartIcon.classList.remove("fa-cart-shopping", "green");
    } else {
      addToCart(id, title, price);
      cartIcon.classList.remove("fa-cart-plus");
      cartIcon.classList.add("fa-cart-shopping", "green");
    }
  }
}
