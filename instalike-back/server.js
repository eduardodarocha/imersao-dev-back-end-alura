import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api", (req, res) => {
  res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});