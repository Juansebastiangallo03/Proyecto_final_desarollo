import { Router } from "express";
import { AlumnoController } from "../controllers/AlumnoController.mjs";

class AlumnoRoutes {
  constructor() {
    this.router = Router();
    this.controller = new AlumnoController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createAlumno);
    this.router
      .route("/:alumnoid")
      .put(this.controller.updateAlumno)
      .delete(this.controller.deleteAlumno);
  }
}

export { AlumnoRoutes };
