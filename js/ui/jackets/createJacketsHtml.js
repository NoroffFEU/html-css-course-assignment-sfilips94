export function createJacketsHtml(container, jackets) {
  container.innerHTML = "";

  console.log("jackets", jackets);

  jackets.forEach((jacket) => {
    let div = document.createElement("div");
    div.classList.add("jacket");

    let img = document.createElement("img");
    img.src = jacket.image;

    let title = document.createElement("h4");
    title.textContent = jacket.title;

    let body = document.createElement("p");
    body.textContent = jacket.description;

    div.append(title);
    div.append(body);
    div.append(img);

    container.append(div);
  });
}
