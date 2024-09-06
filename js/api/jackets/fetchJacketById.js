import { jacketUrl } from "../../constants/api.js";

export async function fetchJacketById(id) {
  let url = `${jacketUrl}/${id}`;

  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    return json;
  }

  throw new Error("Error fetching jacket");
}
