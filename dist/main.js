/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-dark: rgba(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-image: url("https://cdn.pixabay.com/photo/2023/10/16/15/23/pizza-8319463_960_720.jpg");
  background-size: auto;
  background-repeat: no-repeat;
}

header {
  background: var(--background-dark);
}

header > h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 60px;
}

nav {
  display: flex;
  justify-content: center;
  height: 50px;
}

nav > button {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: none;
  background: none;
  width: 90px;
  cursor: pointer;
}

nav > button:hover {
  transform: translateY(-10%);
}

.home,
.contact,
.menu-page {
  padding: 16px;
  margin: 16px;
  background: var(--background-dark);
}

.home >img,
.contact > img {
  width: 100%;
  height: auto;
}

.contact > h1,
.menu > h1 {
  color: white;
}

.home > h1 {
  margin-top: 16px;
  color: white;
}

.home > p,
.contact > p,
.menu > p {
  margin-top: 16px;
  color: white;
}

.menu-page > h1 {
  color: white;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 32px;
}

.menus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
}

.menu {
  padding: 16px;
  background: rgba(0, 0, 0, 0.8);
}

.menu > img {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iGAAiG;EACjG,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;EAGE,aAAa;EACb,YAAY;EACZ,kCAAkC;AACpC;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;;;EAGE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":[":root {\n  --background-dark: rgba(0, 0, 0, 0.5);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  background-image: url(\"https://cdn.pixabay.com/photo/2023/10/16/15/23/pizza-8319463_960_720.jpg\");\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\nheader {\n  background: var(--background-dark);\n}\n\nheader > h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  height: 60px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  height: 50px;\n}\n\nnav > button {\n  font-size: 1rem;\n  font-weight: bold;\n  color: white;\n  border: none;\n  background: none;\n  width: 90px;\n  cursor: pointer;\n}\n\nnav > button:hover {\n  transform: translateY(-10%);\n}\n\n.home,\n.contact,\n.menu-page {\n  padding: 16px;\n  margin: 16px;\n  background: var(--background-dark);\n}\n\n.home >img,\n.contact > img {\n  width: 100%;\n  height: auto;\n}\n\n.contact > h1,\n.menu > h1 {\n  color: white;\n}\n\n.home > h1 {\n  margin-top: 16px;\n  color: white;\n}\n\n.home > p,\n.contact > p,\n.menu > p {\n  margin-top: 16px;\n  color: white;\n}\n\n.menu-page > h1 {\n  color: white;\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.menus {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 16px;\n}\n\n.menu {\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.menu > img {\n  width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(365);
;// CONCATENATED MODULE: ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/about.js
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



;// CONCATENATED MODULE: ./src/menu.js
function renderMenuPage(contentDiv) {
  const page = document.createElement("div");
  const title = document.createElement("h1");
  const menus = document.createElement("div");

  page.classList.add("menu-page");

  title.textContent = "Menu";
  page.appendChild(title);

  menus.classList.add("menus");

  menus.appendChild(
    createMenu(
      "Margherita",
      "Pizzadough, tomato sauce, mozzarella, basile",
      "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg",
    ),
  );

  menus.appendChild(
    createMenu(
      "Pizza Salame",
      "Pizzadough, tomato sauce, mozzarella, salame, basile",
      "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_1280.jpg",
    ),
  );

  menus.appendChild(
    createMenu(
      "Pizza ai Funghi",
      "Pizzadough, tomato sauce, mozzarella, mushrooms, olives, basile",
      "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg",
    ),
  );

  page.appendChild(menus);

  contentDiv.appendChild(page);
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



;// CONCATENATED MODULE: ./src/contact.js
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



;// CONCATENATED MODULE: ./src/index.js






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
      default:
        break;
    }
  });
}

renderHomePage(content);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map