import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Cria uma instância do Express.
// const app = express();

const routes = (app) => {
  // Habilita o middleware JSON para que o Express possa analisar corpos de requisições em formato JSON.
  app.use(express.json());
  // Rota para obter todos os posts.
  app.get("/posts", listarPosts);

  // Rota raiz (/) que responde com uma mensagem de boas-vindas.
  // app.route("/").get((req, res) => {
  //   res.status(200).send("Boas-vindas à imersão de back-end - Alura");
  // });
};



export default routes;