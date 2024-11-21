import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Cria uma instância do aplicativo Express.
const app = express();

routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// const posts = [
//   {
//     id: 1,
//     descricao: "Uma foto de um gatinho dormindo.",
//     image: "https://loremflickr.com/300/200/cat"
//   },
//   {
//     id: 2,
//     descricao: "Paisagem marítima no pôr do sol.",
//     image: "https://loremflickr.com/300/200/cat"
//   },
//   {
//     id: 3,
//     descricao: "Montanha coberta de neve.",
//     image: "https://loremflickr.com/300/200/cat"
//   },
//   {
//     id: 4,
//     descricao: "Comida deliciosa e colorida.",
//     image: "https://loremflickr.com/300/200/cat"
//   },
//   {
//     id: 5,
//     descricao: "Cachorro fazendo uma careta engraçada.",
//     image: "https://loremflickr.com/300/200/cat"
//   }
// ];

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.


// Rota raiz (/) que responde com uma mensagem de boas-vindas.
// app.get("/", (req, res) => {
//   res.status(200).send("Boas-vindas à imersão de back-end - Alura");
// });


// function buscarPostById(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// };

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostById(req.params.id);
//   res.status(200).json(posts[index]);
// });

