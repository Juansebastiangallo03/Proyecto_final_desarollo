import { AsistenciaService } from "../services/AsistenciaService.mjs";

class AsistenciaController {
  #service;
  constructor() {
    this.#service = new AsistenciaService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createAsistencia = async (req, res) => {
    const { alumnoid, eventoid } = req.body;
    if (!alumnoid || !eventoid) {
      return res.status(401).send("datos inválidos");
    }
    const created = await this.#service.createAsistencia(alumnoid, eventoid);
    if (!created) res.status(500).send("error");
    else res.status(201).send(created);
  };

  deleteAsistencia = async (req, res) => {
    const { asistenciaid } = req.params;
    const deleted = await this.#service.deleteAsistencia(asistenciaid);
    res.status(200).send(deleted);
  };
}

export { AsistenciaController };
