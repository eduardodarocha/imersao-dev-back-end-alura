# Imersão Dev Back-End - Alura
Cinco aulas de desenvolvimento Back-end, criando um projeto com Node.js na prática e desvendando APIs e Servidores com o Google Gemini. O projeto consiste em um blog de fotos chamado Instalike.

## Aula 01 - Desvendando APIs e Servidores

1. Introdução ao Projeto
  #### O projeto desenvolvido é uma aplicação inspirada na rede social "Instabytes", que inicialmente é uma página estática. O projeto tem servico de back-end e front-end, e a API do back-end deve ser consumida pelo front-end.

2. Preparação do Ambiente
   - Instalação do Node.js:
     - Acesse [nodejs.org](https://nodejs.org/) e baixe a versão LTS do Node.js
     - Verificação da Instalação
         Execute o comando no terminal: `node -v`

          Isso deve retornar a versão do Node.js instalada.

3. Criação do diretório do Projeto
   - Crie um novo diretório para o projeto:
      `mkdir instalike-back`

   - Navega para o diretório criado:
      `cd instalike-back`

4. Inicialização do projeto Node.js
   - Execute o comando no terminal: `npm init es6 -y` ou `npm init -y`
  
     Isso cria um arquivo package.json que contém informações sobre o projeto.

5. Instalação do Express
   
   O Express é um framework para Node.js que facilita a criação de servidores.
   - Para instalar o Express, execute: `npm install express` ou `npm i express`

6. Criação do Servidor
   - Crie um arquivo server.js e adicione o seguinte código:
  
    ```
    import express from "express";
    const app = express();
    app.listen(3000, () => {
      console.log('Servidor escutando na porta 3000');
    });
      ```
      
   - Para executar o servidor, use o comando: `node server.js`

7. Criação de Rotas
   - Adicione uma rota básica que responde a requisições:
  
    ```
    app.get('/api', (req, res) => {
      res.status(200).send('Boas-vindas à imersão de back-end - Alura');
    });
      ```

   - Para adicionar a rota, reinicie o servidor com `Ctrl + C` e execute novamente: `node server.js`
  
   - Testando a Aplicação:
    - Acesse a rota criada no navegador:
  [http://localhost:3000/api](http://localhost:3000/api)
      - Agora, a rota `/api` deve responder com a mensagem "Boas-vindas à imersão de back-end - Alura".
  
8. Integração com Gemini
   - Acesse o Google Gemini aqui: [https://alura.tv/google-gemini](https://alura.tv/google-gemini)
   - Gere a sua API Key no Google AI Studio: [https://alura.tv/google-gemini-api](https://alura.tv/google-gemini-api)
  
9. Criação do arquivo ".gitignore":
   - Crie um arquivo `.gitignore` e adicione as seguintes linhas:
  
  ```
  node_modules/

  chave-api-gemini.txt

  npm-debug.log*  

  build/**

  .npm

  .env
  .env.development.local
  .env.test.local
  .env.production.local
  .env.local
  .env.development

  ```

***
***

## Aula 02 - Criando e Estruturando sua Primeira API com GET e Banco de Dados

10. Criar um array de posts
    - Crie um array no server.js, chamado `posts` e adicione posts que contém objetos representando posts, cada um com uma descrição e um link de imagem.

    ```json
 const posts = [
    { description: 'Gato fazendo ioga', image: 'https://placecats.com/millie/300/150' },
    { description: 'Gato fazendo panqueca', image: 'https://placecats.com/millie/300/150' }
];
    ```
    
11.  Configurando o Express para JSON
     - Adicionamos middleware ao server.js para que o Express possa entender e retornar dados no formato JSON:
       - `app.use(express.json());`

12. Criando rota para pegar todos os posts
    - Crie um endpoint para obter todos os posts, usando o GET:
      ```
      app.get('/posts', (req, res) => {
          res.status(200).json(posts);
        });
        ```

13. Criando rota para pegar 1 post pelo id
    - Utilizando o Gemini, introduza um id para cada post:
  
    ```
      const posts = [
        { id: 1, description: 'Gato fazendo ioga', image: 'https://placecats.com/millie/300/150' },
        { id: 2, description: 'Gato fazendo panqueca', image: 'https://placecats.com/millie/300/150' }
      ];
            
    ```

    - Crie uma função que recebe o id do post e retorna o index correspondente:
      ```
      function buscarPostById(id) {
        return posts.findIndex((post) => {
          return post.id === Number(id);
        });
      };
      ```

    - Crie um endpoint para obter 1 post pelo id(index), usando o GET:
      ```
      app.get('/posts/:id', (req, res) => {
        const index = buscarPostById(req.params.id);
        res.status(200).json(posts[index]);
      });
      ```

14. Servidor escutando na porta 3000
    - Para executar o servidor, e não precisar restartar, use o comando:
    
       `node --watch server.js` 

15. Preparação para Banco de Dados
    - Crie um conta ou faça login no [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
    - Dê uma nome para seu banco de dados/projeto
    - Guarde o nome de usuário e a senha do seu banco de dados
    - Crie um cluster e faça o deploy.

***
***

## Aula 03 - Conectando sua API ao MongoDB: Estrutura, Conexão e Refatoração

16. Instalar pacote do Driver para se comunicar com o MongoDB

`npm install mongodb`

17. Criar banco de dados e collections no Mongodb Atlas
    - Acesse o [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
    - Crie um banco de dados chamado imersao-instabytes
    - Crie uma collection chamada posts
    - Adicione dois ou mais posts / documentos.
       - Estrutura dos Documentos:
         - id: Identificador único do post.
         - descricao: Uma descrição do post.
         - imgUrl: URL da imagem associada ao post.
         - alt: Texto alternativo para a imagem, importante para 

18.  Criar arquivo de variáveis de ambiente
    - Crie um arquivo .env e adicione a seguinte variável de ambiente no arquivo:
      - `STRING_CONEXAO = mongodb+srv://<username>:<db_password>@cluster0.0oapm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      - Adicionando ao .gitignore o arquivo .env

19. Modificar script no package.json
     - Adicione o seguinte script ao package.json:
       - `"dev": "node --watch --env-file =.env server.js"`,
       - Agora para startar o servidor, use o seguinte comando:
         - `npm run dev`

20.  Reorganização do código
     - A estrutura do projeto foi organizada em várias pastas para separar responsabilidades:
       - src: Contém o código fonte da aplicação e outras pastas,
       - src/config: Armazena configurações, como a conexão com o banco de dados,
       - src/routes: Define as rotas da aplicação, onde as requisições são recebidas,
       - src/controllers: Gerencia a lógica de requisições e respostas,
       - src/models: Interage com o banco de dados, realizando operações como buscar e inserir dados.

21.  Conexão com o Banco de Dados    
     - Criar uma função chamada conectarAoBanco no arquivo src/config/dbconfig.js para estabelecer a conexão com o MongoDB usando a string de conexão armazenada na variável de ambiente.
 
  ```
  import { MongoClient } from 'mongodb';

  export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    return mongoClient;
    } catch (erro) {
      console.error('Falha na conexão com o banco!', erro);
      process.exit();
      }
  }
  ``` 

22.  Rotas
    - As rotas foram movidas para src/routes/postsRoutes.js
   ```
   import express from "express";
   import { listarPosts } from "../controllers/postsController.js";

   const routes = (app) => {
   app.use(express.json());

   app.get("/posts", listarPosts);

  };
  ``` 

23.  Controllers
    - Os controllers foram movidos para src/controllers/postsController.js
  
   ```
   export async function listarPosts(req, res) { 
  const posts = await getTodosPosts();
  res.status(200).json(posts);  
   }
   ```

24.  Models
    - Os models foram movidos para src/models/postsModel.js
  
   ```
  import conectarAoBanco from "../config/dbConfig.js";

  const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

  export default async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
  }
   ```