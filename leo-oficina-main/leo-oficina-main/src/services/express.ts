import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();

export const init = () => {
  // Configuração das variáveis de ambiente
  dotenv.config();

  // Configuração das Views
  app.set("view engine", "ejs");
  app.set("views", "./src/views");

  // Configuração dos arquivos estáticos
  app.use(express.static("./src/public"));

  // Startando servidor na porta 3000
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log("Servidor rodando na porta " + process.env.PORT);
  });

  return app;
};
