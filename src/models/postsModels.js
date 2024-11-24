import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("Imersao-instabytespost")
    const colecao = db.collection("PostsF")
    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conexao.db("Imersao-instabytespost")
    const colecao = db.collection("PostsF")
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersao-instabytespost")
    const colecao = db.collection("PostsF")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}

