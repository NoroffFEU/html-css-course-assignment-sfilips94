import { createCartHtml } from "../../ui/cart/createCartHtml.js";
import { getCart } from "../../utils/cart.js";

export function displayCart() {
  let cart = getCart();
  let container = document.querySelector("#cart-container");

  createCartHtml(container, cart);
}
