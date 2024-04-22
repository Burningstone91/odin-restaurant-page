function renderContactPage(contentDiv) {
  const page = document.createElement("div");
  page.classList.add("content");

  const title = document.createElement("p");
  title.textContent = "Title for Contact Page";

  page.appendChild(title);

  contentDiv.appendChild(page);
}

export { renderContactPage };
