export function createJacketsHtml(container, jackets) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (jackets.length === 0) {
    parent.innerHTML = "No products found";
    return;
  }

  parent.innerHTML = "";

  jackets.forEach((jacket) => {
    let { id } = jacket;

    let jacketLink = document.createElement("a");
    jacketLink.classList.add("jacket");
    jacketLink.href = `details.html?id=${id}`;

    let image = document.createElement("img");
    image.src = jacket.image;

    let title = document.createElement("h4");
    title.textContent = jacket.title;

    let description = document.createElement("p");
    description.textContent = jacket.description;

    jacketLink.append(title);
    jacketLink.append(description);
    jacketLink.append(image);

    parent.append(jacketLink);
  });
}
