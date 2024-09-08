import { createJacketsHtml } from "../../ui/jackets/createJacketsHtml.js";

export function handleCategoryChange(jackets) {
  let categorySelect = document.querySelector("#category");

  if (categorySelect) {
    categorySelect.addEventListener("change", respondToCategoryChange);
  }

  function respondToCategoryChange(event) {
    let selectedCategory = event.target.value;

    let filteredJackets = jackets.filter((jacket) => {
      if (jacket.gender.toLowerCase() === selectedCategory.toLowerCase()) {
        return true;
      }
    });

    createJacketsHtml("#jackets-container", filteredJackets);
  }
}
