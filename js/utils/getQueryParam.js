export function getQueryParam(param) {
  let queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  return params.get(param);
}
