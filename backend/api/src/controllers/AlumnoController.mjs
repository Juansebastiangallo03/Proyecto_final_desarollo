import { AlumnoService } from "../services/AlumnoService.mjs";

class AlumnoController {
  #service;
  constructor() {
    this.#service = new AlumnoService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createAlumno = async (req, res) => {
    const { nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad } = req.body;
    if (!nombre || !apellido || !correo || !contrasena || !telefono) {
      return res.status(401).send("datos inválidos");
    }
    const created = await this.#service.createAlumno(nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad);
    if (!created) res.status(500).send("error");
    else res.status(201).send(created);
  };

  updateAlumno = async (req, res) => {
    const { alumnoid } = req.params;
    const { nombre, apellido, correo, telefono, deporte_interes, ubicacion, about_me, edad } = req.body;
    const updated = await this.#service.updateAlumno(alumnoid, nombre, apellido, correo, telefono, deporte_interes, ubicacion, about_me, edad);
    res.status(200).send(updated);
  };

  deleteAlumno = async (req, res) => {
    const { alumnoid } = req.params;
    const deleted = await this.#service.deleteAlumno(alumnoid);
    res.status(200).send(deleted);
  };
}

export { AlumnoController };
