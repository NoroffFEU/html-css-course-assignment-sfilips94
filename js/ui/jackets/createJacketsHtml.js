export function createJacketsHtml(container, jackets) {
  container.innerHTML = "";

  console.log("jackets", jackets);

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

    container.append(jacketLink);
  });
}
