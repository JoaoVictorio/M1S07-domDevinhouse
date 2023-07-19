const medicamentos = [
  {
    titulo: "Concentril",
    imagem: "/img/remedio.png",
    valor: "99,99"
  },
  {
    titulo: "Medicamento 2",
    imagem: "/img/remedio.png",
    valor: "49,99"
  },
  {
    titulo: "Medicamento 3",
    imagem: "/img/remedio.png",
    valor: "79,99"
  },
];

function criarCardMedicamento(medicamento) {
  const card = document.createElement("div");
  card.classList.add("col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "d-flex", "justify-content-around");

  const cardContent = `
    <div class="card text-center bg-light p-4">
      <a href="" class="position-absolute right-0 p-2 text-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </a>
      <img class="m-auto p-2 card-img" src="${medicamento.imagem}" style="width: 5rem;" alt="...">
      <div class="card-body m-auto">
        <h5 class="card-title">${medicamento.titulo}</h5>
        <p class="card-value">${medicamento.valor}</p>
        <div class="d-flex">
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;

  return card;
}

const container = document.querySelector(".row");

medicamentos.forEach(medicamento => {
  const cardMedicamento = criarCardMedicamento(medicamento);
  container.appendChild(cardMedicamento);
});
