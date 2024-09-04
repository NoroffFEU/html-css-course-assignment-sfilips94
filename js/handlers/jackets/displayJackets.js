import { fetchJackets } from "../../api/jackets/fetchJackets.js";
import { createJackets } from "../../ui/jackets/createJackets.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export function displayJackets() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      let jacketsContainer = document.querySelector("#jackets-container");

      let jackets = await fetchJackets();
      createJackets(jacketsContainer, jackets);
    } catch (error) {
      console.error(error);
      displayMessage("#jackets-container", "error", error.message);
    }
  });
}
