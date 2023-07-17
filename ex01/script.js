const headerInfo = {
  logoSrc: "/img/Dev +.png",
  logoAlt: "Logo da Farmácia Dev+",
  menuOptions: [
    { label: "Medicamentos", link: "index.html" },
    { label: "Contato", link: "formbootstrap.html" },
    { label: "Sobre", link: "index.html" },
  ],
};

const headerElement = document.getElementById("header");

const logoElement = document.createElement("img");
logoElement.classList.add("m-3");
logoElement.src = headerInfo.logoSrc;
logoElement.alt = headerInfo.logoAlt;

const brandElement = document.createElement("a");
brandElement.classList.add("navbar-brand", "text-white", "d-flex");
brandElement.href = "#";
brandElement.textContent = "Farmácia Dev+";

headerElement.querySelector(".container-fluid").prepend(logoElement, brandElement);

const menuListElement = document.createElement("ul");
menuListElement.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");

headerInfo.menuOptions.forEach((option) => {
  const menuItemElement = document.createElement("li");
  menuItemElement.classList.add("nav-item");

  const menuLinkElement = document.createElement("a");
  menuLinkElement.classList.add("nav-link", "active");
  menuLinkElement.href = option.link;
  menuLinkElement.textContent = option.label;

  menuItemElement.appendChild(menuLinkElement);
  menuListElement.appendChild(menuItemElement);
});

headerElement.querySelector(".navbar-collapse").appendChild(menuListElement);
