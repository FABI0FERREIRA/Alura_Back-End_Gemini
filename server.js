import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});






//console.log(process.env.STRING_CONEXAO)

//const posts = [
//    {
//        id: 1, descricao: "Um foto teste",
//      imagem: "https://placecats.com/millie/300/150"
//    },
//    {
//      id: 2,  descricao: "Segundo post sobre gatos",
//      imagem: "https://placecats.com/millie/300/150"
//    },
//    { 
//        id: 3,
//        "descricao": "Gatos fofinhos dormindo",
//        "imagem": "https://placecats.com/millie/300/150"
//      },
//];

