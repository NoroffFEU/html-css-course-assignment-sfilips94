export function createJacketHtml(container, jacket) {
  container.innerHTML = "";

  console.log("jacket", jacket);

  let jacketLink = document.createElement("div");
  jacketLink.classList.add("jacket-detail");

  let image = document.createElement("img");
  image.src = jacket.image;

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

  jacketLink.append(title);
  jacketLink.append(description);
  jacketLink.append(image);
  jacketLink.append(gender);
  jacketLink.append(sizes);
  jacketLink.append(price);
  jacketLink.append(baseColor);

  container.append(jacketLink);
}
