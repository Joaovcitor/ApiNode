import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();

import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/UserRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import alunosRoutes from "./src/routes/alunosRoutes";
import fotosRoutes from "./src/routes/fotosRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunosRoutes);
    this.app.use("/fotos/", fotosRoutes);
  }
}

export default new App().app;