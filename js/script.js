import { displayJackets } from "./handlers/jackets/displayJackets.js";
import { displayJacket } from "./handlers/jackets/displayJacket.js";
import { displayCart } from "./handlers/cart/displayCart.js";

function router() {
  let { pathname } = window.location;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayJackets();
      break;

    case "/details.html":
      displayJacket();
      break;

    case "/cart.html":
      displayCart();
  }
}

router();
