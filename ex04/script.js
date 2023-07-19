window.addEventListener('DOMContentLoaded', () => {
  // Selecionar todos os botões de favoritar (os ícones <svg> com a classe "btn-favoritar")
  const btnFavoritarList = document.querySelectorAll('.btn-favoritar');
  
  btnFavoritarList.forEach(btnFavoritar => {
    btnFavoritar.addEventListener('click', (event) => {
      event.preventDefault();
      
  const nomeMedicamento = btnFavoritar.parentNode.querySelector('.card-title').textContent;
  
  console.log(`Medicamento adicionado: ${nomeMedicamento}`);
  
  const medicamentosFavoritados = [];
  
  console.log('Lista de medicamentos favoritados:', medicamentosFavoritados);
  
  alert(`Medicamento "${nomeMedicamento}" adicionado aos favoritos!`);
    });
  });
});
      
      

