  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('nameInput').value;

    console.log(`Mensagem enviada por: ${name}`);

    
    alert('Mensagem enviada com sucesso!');

    document.getElementById('contactForm').reset();
  });

