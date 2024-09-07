import { fetchJacketById } from "../../api/jackets/fetchJacketById.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createJacketHtml } from "../../ui/jackets/createJacketHtml.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import { handleCartIconClick } from "./cart/handleCartIconClick.js";

export async function displayJacket() {
  let id = getQueryParam("id");

  console.log("id", id);

  if (!id) {
    window.location.href = "/";
  }

  let container = document.querySelector("#details-container");

  try {
    let jacket = await fetchJacketById(id);
    createJacketHtml(container, jacket);
    handleCartIconClick();
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }

  //let id = getQueryParam("id");
  //console.log("id", id);
}
