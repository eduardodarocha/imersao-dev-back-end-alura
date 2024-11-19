import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto de um gatinho dormindo.",
    image: "https://loremflickr.com/300/200/cat"
  },
  {
    id: 2,
    descricao: "Paisagem marítima no pôr do sol.",
    image: "https://loremflickr.com/300/200/cat"
  },
  {
    id: 3,
    descricao: "Montanha coberta de neve.",
    image: "https://loremflickr.com/300/200/cat"
  },
  {
    id: 4,
    descricao: "Comida deliciosa e colorida.",
    image: "https://loremflickr.com/300/200/cat"
  },
  {
    id: 5,
    descricao: "Cachorro fazendo uma careta engraçada.",
    image: "https://loremflickr.com/300/200/cat"
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas-vindas à imersão de back-end - Alura");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  }
  )
};

app.get("/posts/:id", (req, res) => {
  const index = buscarPostById(req.params.id);
  res.status(200).json(posts[index]);
});

