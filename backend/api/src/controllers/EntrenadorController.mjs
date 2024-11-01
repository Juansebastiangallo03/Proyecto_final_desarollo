import { EntrenadorService } from "../services/EntrenadorService.mjs";

class EntrenadorController {
  #service;
  constructor() {
    this.#service = new EntrenadorService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createEntrenador = async (req, res) => {
    const { nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad } = req.body;
    if (!nombre || !apellido || !correo || !contrasena || !telefono) {
      return res.status(401).send("datos inválidos");
    }
    const created = await this.#service.createEntrenador(nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad);
    if (!created) res.status(500).send("error");
    else res.status(201).send(created);
  };

  updateEntrenador = async (req, res) => {
    const { entrenadorid } = req.params;
    const { nombre, apellido, correo, telefono, precios, deporte_especifico, ubicacion, about_me, edad } = req.body;
    const updated = await this.#service.updateEntrenador(entrenadorid, nombre, apellido, correo, telefono, precios, deporte_especifico, ubicacion, about_me, edad);
    res.status(200).send(updated);
  };

  deleteEntrenador = async (req, res) => {
    const { entrenadorid } = req.params;
    const deleted = await this.#service.deleteEntrenador(entrenadorid);
    res.status(200).send(deleted);
  };
}

export { EntrenadorController };
