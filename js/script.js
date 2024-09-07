import { displayJackets } from "./handlers/jackets/displayJackets.js";
import { displayJacket } from "./handlers/jackets/displayJacket.js";

let { pathname } = window.location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayJackets();
    break;

  case "/details.html":
    displayJacket();
    break;
}
