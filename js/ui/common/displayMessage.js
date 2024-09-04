export function displayMessage(container, messageType, message) {
  let parent = document.querySelector(container);
  parent.innerHTML = `<div class="message ${messageType}">${message} </div> `;
}
