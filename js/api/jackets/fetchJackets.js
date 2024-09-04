import { url } from "../../constants/api.js";

export async function fetchJackets() {
  let response = await fetch(url);

  if (response.ok) {
    let jackets = await response.json();
    return jackets;
  }

  throw new Error("Failed to fetch posts");
}
