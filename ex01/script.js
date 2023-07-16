// Selecionar o elemento do header
// Objeto com as informações da logo e lista de opções de menu
const headerInfo = {
  logoSrc: "/img/Dev +.png",
  logoAlt: "Logo da Farmácia Dev+",
  opcoesMenu: [
    { label: "Medicamentos", link: "index.html" },
    { label: "Contato", link: "formbootstrap.html" },
    { label: "Sobre", link: "index.html" },
  ],
};

// Selecionar o elemento do header
const headerElemento = document.getElementById("header");

// Criar o elemento da logo
const logoElemento = document.createElement("img");
logoElemento.classList.add("m-3");
logoElemento.src = headerInfo.logoSrc;
logoElemento.alt = headerInfo.logoAlt;

// Criar o elemento da navbar brand
const brandElemento = document.createElement("a");
brandElemento.classList.add("navbar-brand", "text-white", "d-flex");
brandElemento.href = "#";
brandElemento.textContent = "Farmácia Dev+";

// Adicionar a logo e a navbar brand ao container do header
headerElemento.querySelector(".container-fluid").prepend(logoElemento, brandElemento);

// Criar a lista de opções de menu
const menuListElemento = document.createElement("ul");
menuListElemento.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");

// Adicionar as opções de menu à lista
headerInfo.opcoesMenu.forEach((opcoes) => {
  const menuItemElemento = document.createElement("li");
  menuItemElemento.classList.add("nav-item");

  const menuLinkElemento = document.createElement("a");
  menuLinkElemento.classList.add("nav-link", "active");
  menuLinkElemento.href = opcoes.link;
  menuLinkElemento.textContent = opcoes.label;

  menuItemElemento.appendChild(menuLinkElemento);
  menuListElemento.appendChild(menuItemElemento);
});

// Adicionar a lista de opções de menu ao header
headerElement.querySelector(".navbar-collapse").appendChild(menuListElemento);
