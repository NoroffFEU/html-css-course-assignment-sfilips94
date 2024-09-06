import { createJacketsHtml } from "../../ui/jackets/createJacketsHtml.js";

export function handleCategoryChange(jackets) {
  let categorySelect = document.querySelector("#category");

  if (categorySelect) {
    categorySelect.addEventListener("change", respondToCategoryChange);
  }

  function respondToCategoryChange(event) {
    console.log(event.target.value);

    let selectedCategory = event.target.value;

    let filteredJackets = jackets.filter((jacket) => {
      if (jacket.category === selectedCategory) {
        return true;
      }
    });

    createJacketsHtml("#jackets-container", filteredJackets);
  }
}
