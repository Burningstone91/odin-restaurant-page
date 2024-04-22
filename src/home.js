function renderHomePage(contentDiv) {
  const page = document.createElement("div");
  page.classList.add("content");

  const title = document.createElement("p");
  title.textContent = "Title for Home Page";

  page.appendChild(title);

  contentDiv.appendChild(page);
}

export { renderHomePage };
