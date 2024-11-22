import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

const upload = multer({ dest: "./uploads", storage })

const routes = (app) => {
  // Habilita o middleware JSON para que o Express possa analisar corpos de requisições em formato JSON.
  app.use(express.json());
  // Rota para obter todos os posts.
  app.get("/posts", listarPosts);

  // Rota raiz (/) que responde com uma mensagem de boas-vindas.
  // app.route("/").get((req, res) => {
  //   res.status(200).send("Boas-vindas à imersão de back-end - Alura");
  // });

  app.post("/posts", postarNovoPost)

  app.post("/upload", upload.single("imagem"), uploadImagem)
};



export default routes;