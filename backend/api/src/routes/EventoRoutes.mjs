import { Router } from "express";
import { EventoController } from "../controllers/EventoController.mjs";

class EventoRoutes {
  constructor() {
    this.router = Router();
    this.controller = new EventoController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createEvento);
    this.router
      .route("/:eventoid")
      .put(this.controller.updateEvento)
      .delete(this.controller.deleteEvento);
  }
}

export { EventoRoutes };
