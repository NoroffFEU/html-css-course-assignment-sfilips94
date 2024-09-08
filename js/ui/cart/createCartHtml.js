import { clearCart, getTotalPrice } from "../../utils/cart.js";
import { displayMessage } from "../common/displayMessage.js";

export function createCartHtml(container, cart) {
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Cart is empty");
  }

  let totalItems = document.createElement("p");
  totalItems.textContent = `Total items: ${cart.length}`;

  let totalPrice = document.createElement("p");
  totalPrice.textContent = `Total price: ${getTotalPrice(cart)}`;

  container.append(totalItems);
  container.append(totalPrice);

  cart.forEach((cartItem) => {
    let { title, price } = cartItem;

    let cartLink = document.createElement("div");
    cartLink.classList.add("cart-item");

    let titleElement = document.createElement("h4");
    titleElement.textContent = title;

    let priceElement = document.createElement("p");
    priceElement.textContent = price;

    cartLink.append(titleElement);
    cartLink.append(priceElement);
    container.append(cartLink);
  });

  let button = confirmationButton();
  container.append(button);
}

function confirmationButton() {
  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Confirm";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "checkout-success.html";
  });

  return button;
}
