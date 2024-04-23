function renderContactPage(contentDiv) {
  const image = document.createElement("img");
  const title = document.createElement("h1");
  const phone = document.createElement("p");
  const address = document.createElement("p");

  image.src =
    "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png";
  title.textContent = "Contact Us";
  phone.textContent = "📱 +423 888 88 88";
  address.textContent = "Tomatostreet 12, 8055 Mozzarellahausen, Pizzaland";

  contentDiv.appendChild(image);
  contentDiv.appendChild(title);
  contentDiv.appendChild(phone);
  contentDiv.appendChild(address);
}

export { renderContactPage };
