function renderAboutPage(contentDiv) {
  const page = document.createElement("div");
  page.classList.add("content");

  const title = document.createElement("p");
  title.textContent = "Title for About Page";

  page.appendChild(title);

  contentDiv.appendChild(page);
}

export { renderAboutPage };
