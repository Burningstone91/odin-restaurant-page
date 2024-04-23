function renderHomePage(contentDiv) {
  const page = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h1");
  const text = document.createElement("p");

  page.classList.add("home");
  image.src =
    "https://cdn.pixabay.com/photo/2020/06/28/14/09/dough-5349412_1280.jpg";
  title.textContent = "Our Story";
  text.innerHTML =
    "Nestled in the heart of a bustling city, Burni’s Diner is more than just a pizzeria—it’s a slice of culinary heaven crafted by Antonio Burni, a passionate pizza aficionado. Inspired by his grandmother’s kitchen in Naples, Antonio set out to create a place where every bite would transport patrons to Italy’s cobblestone streets. <br><br> With the aroma of freshly baked pizza dough and simmering marinara sauce drawing in hungry customers, Burni’s became a beloved fixture in the community. Families gathered around checkered tablecloths, friends toasted over glasses of Chianti, and couples savored romantic evenings by candlelight. <br><br> But Burni’s Diner isn’t just about delicious food; it’s about giving back. Through fundraisers for local charities and donations to those in need, Antonio and his team spread the spirit of generosity. <br><br>Come join us at Burni’s, where every slice tells a story, and every bite is a taste of amore.";

  page.appendChild(image);
  page.appendChild(title);
  page.appendChild(text);

  contentDiv.appendChild(page);
}

export { renderHomePage };
