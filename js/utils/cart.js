let CART_KEY = "cart";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(id) {
  let cart = getCart();
  return cart.some((item) => item.id === id);
}

export function addToCart(id, title, price) {
  let newItem = { id, title, price };

  let cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
  //id inside add to cart and newItem??
}

export function removeFromCart(id) {
  let cart = getCart();
  let newCart = cart.filter((item) => item.id !== id);
  saveToCart(newCart);
}
