// Adiciona uma classe "responsive" à navbar ao clicar no ícone do menu
document.querySelector('.nav-links').addEventListener('click', function () {
  this.classList.toggle('responsive');
});


// Envio de dados pelo E-mail
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var form = event.target;
  var formData = new FormData(form);

  fetch("https://formspree.io/luisfelipejmachadopruch@gmail.com", {
      method: "POST",
      headers: {
          "Accept": "application/json"
      },
      body: formData
  })
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      // Lida com a resposta do servidor
      if (data.success) {
          alert("Formulário enviado com sucesso!");
          form.reset(); // Limpa o formulário após o envio
      } else {
          alert("Ocorreu um erro ao enviar o formulário.");
      }
  })
  .catch(function(error) {
      console.log("Erro:", error);
  });
});

