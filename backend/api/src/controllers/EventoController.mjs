import { EventoService } from "../services/EventoService.mjs";

class EventoController {
  #service;
  constructor() {
    this.#service = new EventoService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createEvento = async (req, res) => {
    const { nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid } = req.body;
    if (!nombre || !descripcion || !fecha || !hora || !ubicacion) {
      return res.status(401).send("datos inválidos");
    }
    const created = await this.#service.createEvento(nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid);
    if (!created) res.status(500).send("error");
    else res.status(201).send(created);
  };

  updateEvento = async (req, res) => {
    const { eventoid } = req.params;
    const { nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid } = req.body;
    const updated = await this.#service.updateEvento(eventoid, nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid);
    res.status(200).send(updated);
  };

  deleteEvento = async (req, res) => {
    const { eventoid } = req.params;
    const deleted = await this.#service.deleteEvento(eventoid);
    res.status(200).send(deleted);
  };
}

export { EventoController };
