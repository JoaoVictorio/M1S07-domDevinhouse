function mostrarInformacoesMedicamento(nomeMedicamento, listaMedicamentos) {
  console.log(`Medicamento adicionado: ${nomeMedicamento}`);
  console.log(`Lista de medicamentos: ${listaMedicamentos}`);
}

function adicionarMedicamentoAoCarrinho(event) {
  event.preventDefault(); 

  
  const nomeMedicamento = event.target.parentElement.querySelector('.card-title').textContent;
  
  const listaMedicamentos = ['Concentril', 'Outro Medicamento', 'Mais um Medicamento'];

  mostrarInformacoesMedicamento(nomeMedicamento, listaMedicamentos);
  alert(`${nomeMedicamento} foi adicionado ao carrinho.`);
}

const botoesAdicionarMedicamento = document.querySelectorAll('.btn-primary');

botoesAdicionarMedicamento.forEach((botao) => {
  botao.addEventListener('click', adicionarMedicamentoAoCarrinho);
});