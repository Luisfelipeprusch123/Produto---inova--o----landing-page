// Adiciona uma classe "responsive" à navbar ao clicar no ícone do menu
//document.querySelector('.nav-links').addEventListener('click', function () {
  //this.classList.toggle('responsive');
//});


// Envio de dados pelo E-mail
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Configurar o transporte de e-mail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'luisfelipejmachadopruch@gmail.com', // Substitua pelo seu e-mail
      pass: 'Luisfelipe8465' // Substitua pela sua senha
    }
  });

  // Configurar as opções de e-mail
  const mailOptions = {
    from: 'luisfelipejmachadopruch@gmail.com', // Substitua pelo seu e-mail
    to: 'luisfelipejmachadopruch@gmail.com', // Substitua pelo e-mail do destinatário
    subject: 'Novo formulário de contato',
    text: `
      Nome: ${name}
      E-mail: ${email}
      Mensagem: ${message}
    `
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar o e-mail:', error);
      res.status(500).json({ success: false });
    } else {
      console.log('E-mail enviado:', info.response);
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


