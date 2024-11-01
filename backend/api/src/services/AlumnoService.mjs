import { Db } from "../config/db.mjs";
import { Alumno } from "../models/Alumno.mjs";

class AlumnoService {
  getAll = async () => {
    try {
      const results = await new Db().selectQuery("SELECT * FROM alumnos");
      return results.rows.map((row) => Alumno.fromObject(row));
    } catch (error) {
      console.log("Error al listar alumnos:", error);
    }
  };

  createAlumno = async (nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad) => {
    try {
      const result = await new Db().selectQuery(
        `INSERT INTO alumnos (nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad]
      );
      return result.rows.length > 0 ? Alumno.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al crear alumno:", error);
    }
  };

  updateAlumno = async (alumnoid, nombre, apellido, correo, telefono, deporte_interes, ubicacion, about_me, edad) => {
    try {
      const result = await new Db().selectQuery(
        `UPDATE alumnos SET nombre=$2, apellido=$3, correo=$4, telefono=$5, deporte_interes=$6, ubicacion=$7, about_me=$8, edad=$9 
         WHERE alumnoid=$1 RETURNING *`,
        [alumnoid, nombre, apellido, correo, telefono, deporte_interes, ubicacion, about_me, edad]
      );
      return result.rows.length > 0 ? Alumno.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al actualizar alumno:", error);
    }
  };

  deleteAlumno = async (alumnoid) => {
    try {
      const result = await new Db().selectQuery(
        `DELETE FROM alumnos WHERE alumnoid=$1 RETURNING *`,
        [alumnoid]
      );
      return result.rows.length > 0 ? Alumno.fromObject(result.rows[0]) : null;
    } catch (error) {
      console.log("Error al eliminar alumno:", error);
    }
  };
}

export { AlumnoService };
