import { Db } from "../config/db.mjs";
import { Asistencia } from "../models/Asistencia.mjs";

class AsistenciaService {
  getAll = async () => {
    try {
      const results = await new Db().selectQuery("SELECT * FROM asistencias");
      return results.rows.map((row) => Asistencia.fromObject(row));
    } catch (error) {
      console.log("Error al listar asistencias:", error);
    }
  };

  createAsistencia = async (alumnoid, eventoid) => {
    try {
      const result = await new Db().selectQuery(
        `INSERT INTO asistencias (alumnoid, eventoid) VALUES ($1, $2) RETURNING *`,
        [alumnoid, eventoid]
      );
      return result.rows.length > 0 ? Asistencia.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al crear asistencia:", error);
    }
  };

  deleteAsistencia = async (asistenciaid) => {
    try {
      const result = await new Db().selectQuery(
        `DELETE FROM asistencias WHERE asistenciaid=$1 RETURNING *`,
        [asistenciaid]
      );
     
    } catch (error) {
      console.log("Error al borrar asistencia:", error);
    }

  };

}

export { AsistenciaService };