function renderContactPage(contentDiv) {
  const contact = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h1");
  const phone = document.createElement("p");
  const address = document.createElement("p");

  contact.classList.add("contact");
  image.src =
    "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png";
  title.textContent = "Contact Us";
  phone.textContent = "📱 +423 888 88 88";
  address.textContent = "Tomatostreet 12, 8055 Mozzarellahausen, Pizzaland";

  contact.appendChild(image);
  contact.appendChild(title);
  contact.appendChild(phone);
  contact.appendChild(address);

  contentDiv.appendChild(contact);
}

export { renderContactPage };
