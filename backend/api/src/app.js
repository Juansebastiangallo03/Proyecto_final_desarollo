import express from "express";
import { setContentType } from "./middlewares/middleware.mjs";
import { EntrenadorRoutes } from "./routes/EntrenadorRoutes.mjs";
import { AlumnoRoutes } from "./routes/AlumnoRoutes.mjs";
import { EventoRoutes } from "./routes/EventoRoutes.mjs";
import { AsistenciaRoutes } from "./routes/AsistenciaRoutes.mjs";

const app = express();
app.use(express.json());
app.use(setContentType);

// Inicialización de las rutas
const entrenadorRoutes = new EntrenadorRoutes();
const alumnoRoutes = new AlumnoRoutes();
const eventoRoutes = new EventoRoutes();
const asistenciaRoutes = new AsistenciaRoutes();

// Uso de las rutas
app.use("/entrenadores", entrenadorRoutes.router);
app.use("/alumnos", alumnoRoutes.router);
app.use("/eventos", eventoRoutes.router);
app.use("/asistencias", asistenciaRoutes.router);
app.get("/", (req, res) => res.send("Bienvenido a la API"));

// Manejo de rutas no encontradas
app.all("*", (req, res) => {
  res.status(404).send(JSON.stringify({ message: "NO existe esa ruta" }));
});

// Iniciar el servidor
app.listen(5432, () => {
  console.log("Servidor escuchando en el puerto 5432");
});
