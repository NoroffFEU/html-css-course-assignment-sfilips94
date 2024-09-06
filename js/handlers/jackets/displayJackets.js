import { fetchJackets } from "../../api/jackets/fetchJackets.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createJacketsHtml } from "../../ui/jackets/createJacketsHtml.js";
import { filterJackets } from "./filterJackets.js";
import { handleCategoryChange } from "./handleCategoryChange.js";

export function displayJackets() {
  document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM content loaded");

    let container = document.querySelector("#jackets-container");

    try {
      let jackets = await fetchJackets();
      createJacketsHtml(container, jackets);
      filterJackets(jackets);
      handleCategoryChange(jackets);
    } catch (error) {
      console.error(error);
      displayMessage(container, "error", error.message);
    }
  });
}
