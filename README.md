🍔 DevBurger - API

Esta é a API do DevBurger, responsável pelo gerenciamento de usuários, produtos, pedidos e autenticação. Construída com Node.js e Express, e conectada ao banco de dados Postgres e MongoDB.

🚀 Funcionalidades

👉 Cadastro e login de usuários com autenticação JWT👉 CRUD de produtos (adicionar, editar e deletar)👉 Gerenciamento de pedidos e alteração de status👉 Integração com Stripe para pagamentos

🛠️ Tecnologias

Node.js

Express

MongoDB

Prisma ORM

JWT (JSON Web Token)

Stripe API

CORS

Bcrypt.js

Dotenv

Multer

📦 Como rodar o projeto

🛢️ Pré-requisitos

Antes de começar, tenha instalado:

Node.js

MongoDB

Git

🛢️ Instalação

Clone o repositório:

git clone https://github.com/MatheusFigueiredo1001/devburger-api.git

Acesse a pasta do projeto:

cd devburger-api

Instale as dependências:

npm install

Configure as variáveis de ambiente no arquivo .env:

PORT=3000 DATABASE_URL=mongodb+srv://seuusuario:suasenha@cluster.mongodb.net/devburger JWT_SECRET=sua-chave-secreta STRIPE_SECRET=sua-chave-stripe

🛢️ Executando o projeto

Para rodar a API localmente, use:

npm start

A API estará rodando em http://localhost:3000 🚀
