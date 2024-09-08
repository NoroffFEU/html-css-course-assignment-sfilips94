import { isIdInCart } from "../../utils/cart.js";

export function createJacketHtml(container, jacket) {
  container.innerHTML = "";

  let { id } = jacket;

  let jacketLink = document.createElement("div");
  jacketLink.classList.add("jacket-detail");

  let image = document.createElement("img");
  image.src = jacket.image;
  image.classList.add("image-size-details");

  let title = document.createElement("h4");
  title.textContent = jacket.title;

  let description = document.createElement("p");
  description.textContent = jacket.description;

  let gender = document.createElement("p");
  gender.textContent = jacket.gender;

  let sizes = document.createElement("p");
  sizes.textContent = jacket.sizes;

  let baseColor = document.createElement("p");
  baseColor.textContent = jacket.baseColor;

  let price = document.createElement("p");
  price.textContent = jacket.price;

  let cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid");
  cartIcon.id = "cart-icon";
  cartIcon.dataset.id = jacket.id;
  cartIcon.dataset.title = jacket.title;
  cartIcon.dataset.price = jacket.price;

  if (isIdInCart(id)) {
    cartIcon.classList.add("fa-cart-shopping", "green");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }

  jacketLink.append(title);
  jacketLink.append(description);
  jacketLink.append(image);
  jacketLink.append(gender);
  jacketLink.append(sizes);
  jacketLink.append(price);
  jacketLink.append(baseColor);
  jacketLink.append(cartIcon);

  container.append(jacketLink);
}
