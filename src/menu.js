function renderMenuPage(contentDiv) {
  const title = document.createElement("h1");
  title.textContent = "Menu";

  contentDiv.appendChild(title);

  contentDiv.appendChild(
    createMenu(
      "Margherita",
      "Pizzadough, tomato sauce, mozzarella, basile",
      "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg",
    ),
  );

  contentDiv.appendChild(
    createMenu(
      "Pizza Salame",
      "Pizzadough, tomato sauce, mozzarella, salame, basile",
      "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_1280.jpg",
    ),
  );

  contentDiv.appendChild(
    createMenu(
      "Pizza ai Funghi",
      "Pizzadough, tomato sauce, mozzarella, mushrooms, olives, basile",
      "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg",
    ),
  );
}

function createMenu(name, desc, imgLink) {
  const menu = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h1");
  const description = document.createElement("p");

  menu.classList.add("menu");
  img.src = imgLink;
  title.textContent = name;
  description.textContent = desc;

  menu.appendChild(img);
  menu.appendChild(title);
  menu.appendChild(description);

  return menu;
}

export { renderMenuPage };
