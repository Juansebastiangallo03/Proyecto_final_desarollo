import { Router } from "express";
import { AsistenciaController } from "../controllers/AsistenciaController.mjs";

class AsistenciaRoutes {
  constructor() {
    this.router = Router();
    this.controller = new AsistenciaController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createAsistencia);
    this.router
      .route("/:asistenciaid")
      .delete(this.controller.deleteAsistencia);
  }
}

export { AsistenciaRoutes };
