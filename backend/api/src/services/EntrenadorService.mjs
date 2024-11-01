import { Db } from "../config/db.mjs";
import { Entrenador } from "../models/Entrenador.mjs";

class EntrenadorService {
  getAll = async () => {
    try {
      const results = await new Db().selectQuery("SELECT * FROM entrenadores");
      return results.rows.map((row) => Entrenador.fromObject(row));
    } catch (error) {
      console.log("Error al listar entrenadores:", error);
    }
  };

  createEntrenador = async (nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad) => {
    try {
      const result = await new Db().selectQuery(
        `INSERT INTO entrenadores (nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad]
      );
      return result.rows.length > 0 ? Entrenador.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al crear entrenador:", error);
    }
  };

  updateEntrenador = async (entrenadorid, nombre, apellido, correo, telefono, precios, deporte_especifico, ubicacion, about_me, edad) => {
    try {
      const result = await new Db().selectQuery(
        `UPDATE entrenadores SET nombre=$2, apellido=$3, correo=$4, telefono=$5, precios=$6, deporte_especifico=$7, ubicacion=$8, about_me=$9, edad=$10 
         WHERE entrenadorid=$1 RETURNING *`,
        [entrenadorid, nombre, apellido, correo, telefono, precios, deporte_especifico, ubicacion, about_me, edad]
      );
      return result.rows.length > 0 ? Entrenador.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al actualizar entrenador:", error);
    }
  };

  deleteEntrenador = async (entrenadorid) => {
    try {
      const result = await new Db().selectQuery(
        `DELETE FROM entrenadores WHERE entrenadorid=$1 RETURNING *`,
        [entrenadorid]
      );
      return result.rows.length > 0 ? Entrenador.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al eliminar entrenador:", error);
    }
  };
}

export { EntrenadorService };
