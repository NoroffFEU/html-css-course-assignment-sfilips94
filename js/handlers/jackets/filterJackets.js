import { createJacketsHtml } from "../../ui/jackets/createJacketsHtml.js";

export function filterJackets(jackets) {
  let searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }
  function handleFilter(event) {
    let filterValue = event.target.value.trim().toLowerCase();
    console.log(filterValue);

    let filterJackets = jackets.filter((jacket) => {
      if (jacket.title.toLowerCase().includes(filterValue)) {
        return true;
      }
    });

    console.log(filterJackets);

    createJacketsHtml("#jackets-container", filterJackets);
  }
}
