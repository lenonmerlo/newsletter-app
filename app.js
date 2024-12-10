const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do EJS e do middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Lista em memória para armazenar os e-mails
const emailList = [];

// Rota inicial para cadastro
app.get('/', (req, res) => {
  res.render('index');
});

// Rota de sucesso
app.get('/success', (req, res) => {
  res.render('success', { message: 'Seu e-mail foi cadastrado com sucesso!' });
});

// Rota para exibir lista de e-mails
app.get('/emails', (req, res) => {
  res.render('emails', { emails: emailList });
});

// Rota para processar formulário de cadastro
app.post('/signup', (req, res) => {
  const email = req.body.email;
  if (email) {
    emailList.push(email);
    res.redirect('/success');
  } else {
    res.send('Por favor, insira um e-mail válido.');
  }
});

// Rota para excluir um e-mail da lista
app.post('/delete', (req, res) => {
  const emailToDelete = req.body.email;
  const index = emailList.indexOf(emailToDelete);
  if (index > -1) {
    emailList.splice(index, 1);
  }
  res.redirect('/emails');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
