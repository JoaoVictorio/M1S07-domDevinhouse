function adicionarOpcao(selectElement, optionText) {
  const option = document.createElement("option");
  option.text = optionText;
  selectElement.add(option);
}

document.addEventListener("DOMContentLoaded", function () {
  const novosAssuntos = ["Sugestões", "Problemas Técnicos", "Outros"];

const assuntosSelect = document.getElementById("assuntosSelect");

novosAssuntos.forEach((assunto) => {
adicionarOpcao(assuntosSelect, assunto);
});
});