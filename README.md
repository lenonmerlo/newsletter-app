# Newsletter App

Uma aplicação simples para cadastro e visualização de e-mails de uma newsletter fictícia, desenvolvida com Node.js, Express e EJS.

## Funcionalidades

- Página inicial para cadastro na newsletter.
- Página de sucesso com mensagem de confirmação.
- Página para visualizar todos os e-mails cadastrados.
- Funcionalidade para excluir um e-mail da lista.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **EJS**: Template engine para renderizar páginas HTML dinâmicas.
- **Body-parser**: Middleware para processar dados de formulários.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/lenonmerlo/newsletter-app.git

2. Acesse o diretório do projeto:
    ```bash
    cd newsletter-app

3. Instale as dependências:
    ```bash
    npm install

4. Inicie o servidor:
    ```bash
    node app.js

5. Acesse a aplicação no navegador:
    arduino
    http://localhost:3000


## Estrutura do Projeto
    plaintext
    newsletter/
    ├── views/               # Páginas EJS
    │   ├── index.ejs        # Página inicial
    │   ├── success.ejs      # Página de sucesso
    │   └── emails.ejs       # Página de visualização de e-mails
    ├── public/              # Arquivos estáticos
    │   └── styles.css       # Estilos da aplicação
    ├── app.js               # Código principal do servidor
    ├── package.json         # Configuração do projeto
    └── package-lock.json    # Detalhes das dependências

## Rotas
    GET /: Página inicial com formulário para cadastro de e-mails.
    POST /signup: Salva o e-mail cadastrado e redireciona para a página de sucesso.
    GET /success: Exibe a mensagem de confirmação do cadastro.
    GET /emails: Exibe a lista de todos os e-mails cadastrados com opção para excluir.
    POST /delete: Remove um e-mail da lista.