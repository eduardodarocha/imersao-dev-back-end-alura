import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados MongoDB usando as informações da string de conexão fornecida. 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados "imersao-instabytes".
export default async function getTodosPosts() {
  // Obtém o banco de dados "imersao-instabytes" a partir da conexão.
  const db = conexao.db("imersao-instabytes");
  // Obtém a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");

  // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
  return colecao.find().toArray();
}