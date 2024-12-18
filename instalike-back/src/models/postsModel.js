import 'dotenv/config';

import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados MongoDB usando as informações da string de conexão fornecida. 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados "imersao-instabytes".
export async function getTodosPosts() {
  // Obtém o banco de dados "imersao-instabytes" a partir da conexão.
  const db = conexao.db("imersao-instabytes");
  // Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");

  // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
  return colecao.find().toArray();
};

export async function criarPost(post) {
  // Obtém o banco de dados "imersao-instabytes" a partir da conexão.
  const db = conexao.db("imersao-instabytes");
  // Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Insere o novo post na coleção "posts" e retorna o resultado da operação.
  return colecao.insertOne(post);
};

export async function atualizarPost(id, novoPost) {
  // Obtém o banco de dados "imersao-instabytes" a partir da conexão.
  const db = conexao.db("imersao-instabytes");
  // Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");

  // Converte o ID hexadecimal em um objeto ObjectId do MongoDB.
  // O ObjectId é o tipo de dado padrão para IDs de documentos no MongoDB.
  const objID = ObjectId.createFromHexString(id);
  // Insere o novo post na coleção "posts" e retorna o resultado da operação.
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}