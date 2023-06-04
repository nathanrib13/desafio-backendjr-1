# Projeto Backend Junior

Este é um projeto desenvolvido em Node.js com Express.js e Prisma. O projeto possui funcionalidades para criar e ler informações de clientes, além de autenticação com Google OAuth.

## Configuração

Antes de executar o projeto, é necessário realizar algumas configurações.

### 1. Instalação das dependências

Execute o seguinte comando para instalar as dependências do projeto:

```shell
npm start
```

### 2. Configuração do banco de dados

Certifique-se de ter configurado corretamente o banco de dados MySQL. Crie um arquivo `.env` na raiz do projeto e defina a URL de conexão do banco de dados da seguinte forma:

```shell
DATABASE_URL=mysql://username:password@host:port/database

```

### 3. Configuração do OAuth do Google

Para usar a autenticação com Google OAuth, é necessário obter as credenciais do OAuth no [Google Cloud Console](https://console.cloud.google.com/). Siga as etapas abaixo:

1. Crie um projeto no Google Cloud Console.
2. No painel de controle do projeto, acesse "APIs e serviços" -> "Credenciais".
3. Clique em "Criar credenciais" e selecione "ID do cliente OAuth".
4. Configure as informações necessárias, como nome do cliente e URIs de redirecionamento autorizadas.
5. Após a criação, copie o ID do cliente e o segredo do cliente.
6. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```shell
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

Certifique-se de substituir `seu_client_id` e `seu_client_secret` pelas suas próprias credenciais.

## Uso

Após a configuração, você pode iniciar o servidor com o seguinte comando:

```shell
npm run dev
```

O servidor será executado na porta 3000. Você pode acessar as seguintes rotas:

- `POST /clients`: Cria um novo cliente. Envie um arquivo CSV contendo as informações dos clientes.
- `GET /read/clients`: Retorna todos os clientes cadastrados.

Para poder acessar as rotas de leitura de clientes é necessário realizar autenticação com o Google OAuth:

- `GET /auth/google`: Inicia o processo de autenticação com o Google.

## Documentação

Para poder acessar a documentação completa da aplicação, acesse o endpoint:

- `GET /docs/`: Retorna a documentação da API

---
