import { type Express } from "express";
import { HomeController } from "../controllers/HomeController";

export const publicRoutes = (app: Express) => {
  // Página Inicial
  const Home = () => {
    app.get("/", (req, res) => {
      new HomeController(req, res).Index();
    });
  };

  return { Home };
};
