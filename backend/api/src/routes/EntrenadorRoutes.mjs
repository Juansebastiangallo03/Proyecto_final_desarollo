import { Router } from "express";
import { EntrenadorController } from "../controllers/EntrenadorController.mjs";

class EntrenadorRoutes {
  constructor() {
    this.router = Router();
    this.controller = new EntrenadorController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createEntrenador);
    this.router
      .route("/:entrenadorid")
      .put(this.controller.updateEntrenador)
      .delete(this.controller.deleteEntrenador);
  }
}

export { EntrenadorRoutes };
