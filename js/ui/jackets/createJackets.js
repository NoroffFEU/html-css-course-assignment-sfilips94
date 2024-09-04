export function createJackets(container, jackets) {
  container.innerHTML = "";

  for (let i = 0; i < jackets.length; i++) {
    let jacket = jackets[i];

    let div = document.createElement("div");
    div.classList.add("jacket");

    let img = document.createElement("img");
    img.src = jacket.image;

    let h2 = document.createElement("h2");
    h2.textContent = jacket.title;

    let p = document.createElement("p");
    p.textContent = jacket.description;

    div.append(h2);
    div.append(p);
    div.append(img);
    container.append(div);
  }
}
