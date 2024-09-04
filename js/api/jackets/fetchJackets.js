import { url } from "../../constants/api.js";

export async function fetchJackets() {
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    return json;
  }

  throw new Error("Error fetching jackets");
}
