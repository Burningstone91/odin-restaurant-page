import "./styles.css";

import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";
import { renderAboutPage } from "./about";

const navButtons = document.querySelectorAll("nav > button");
const content = document.querySelector("#content");

for (let button of Array.from(navButtons)) {
  button.addEventListener("click", (e) => {
    const activeTab = e.target.textContent;

    /* Clear content divider, will delete all child elements */
    content.textContent = "";

    switch (activeTab) {
      case "Home":
        renderHomePage(content);
        break;
      case "Menu":
        renderMenuPage(content);
        break;
      case "Contact":
        renderContactPage(content);
        break;
      case "About":
        renderAboutPage(content);
        break;
      default:
        break;
    }
  });
}

renderHomePage(content);
