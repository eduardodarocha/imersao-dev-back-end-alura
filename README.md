# imersao-dev-back-end-alura
Cinco aulas de desenvolvimento Back-end, criando um projeto com Node.js na prática e desvendando APIs e Servidores com o Google Gemini. O projeto consiste em um blog de fotos

## Aula 01 - Imersão Dev Back-End

1. Introdução ao Projeto
#### O projeto desenvolvido é uma aplicação inspirada na rede social "Instabytes", que inicialmente é uma página estática. O projeto tem servico de back-end e front-end, e a API do back-end deve ser consumida pelo front-end.

2. Preparação do Ambiente
  - Instalação do Node.js 
    - Acesse [nodejs.org](https://nodejs.org/) e baixe a versão LTS do Node.js
    - Verificação da Instalação
       -  Execute o comando no terminal: `node -v`

          Isso deve retornar a versão do Node.js instalada.

3. Criação do diretório do Projeto
  - Crie um novo diretório para o projeto:
      `mkdir instalike-back`

  - Navega para o diretório criado:
      `cd instalike-back`

4. Inicialização do projeto Node.js
   - `npm init es6 -y` ou `npm init -y`
  
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
      res.status(200).send('Boas-vindas à imersão');
    });
      ```
  - Para adicionar a rota, reinicie o servidor com `Ctrl + C` e execute novamente: `node server.js`
  
  - Testando a Aplicação:
    - Acesse a rota criada no navegador:
  [http://localhost:3000/api](http://localhost:3000/api)
      - Agora, a rota `/api` deve responder com a mensagem "Boas-vindas à imersão".
  
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

  