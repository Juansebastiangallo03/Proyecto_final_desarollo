import { Db } from "../config/db.mjs";
import { Evento } from "../models/Evento.mjs";

class EventoService {
  getAll = async () => {
    try {
      const results = await new Db().selectQuery("SELECT * FROM eventos");
      return results.rows.map((row) => Evento.fromObject(row));
    } catch (error) {
      console.log("Error al listar eventos:", error);
    }
  };

  createEvento = async (nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid) => {
    try {
      const result = await new Db().selectQuery(
        `INSERT INTO eventos (nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid]
      );
      return result.rows.length > 0 ? Evento.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al crear evento:", error);
    }
  };

  updateEvento = async (eventoid, nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid) => {
    try {
      const result = await new Db().selectQuery(
        `UPDATE eventos SET nombre=$2, descripcion=$3, fecha=$4, hora=$5, ubicacion=$6, precios=$7, deporte_especifico=$8, entrenadorid=$9 
         WHERE eventoid=$1 RETURNING *`,
        [eventoid, nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid]
      );
      return result.rows.length > 0 ? Evento.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al actualizar evento:", error);
    }
  };

  deleteEvento = async (eventoid) => {
    try {
      const result = await new Db().selectQuery(
        `DELETE FROM eventos WHERE eventoid=$1 RETURNING *`,
        [eventoid]
      );
      return result.rows.length > 0 ? Evento.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al eliminar evento:", error);
    }
  };
}

export { EventoService };
