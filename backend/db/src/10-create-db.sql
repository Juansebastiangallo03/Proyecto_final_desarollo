BEGIN;

CREATE TABLE entrenadores (
    entrenadorid SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    correo TEXT NOT NULL,
    contrasena TEXT NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    precios DECIMAL,
    deporte_especifico TEXT,
    ubicacion TEXT,
    about_me TEXT,
    edad INTEGER
);

CREATE TABLE alumnos (
    alumnoid SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    correo TEXT NOT NULL,
    contrasena TEXT NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    deporte_interes TEXT,
    ubicacion TEXT,
    about_me TEXT,
    edad INTEGER
);

CREATE TABLE eventos (
    eventoid SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    ubicacion TEXT NOT NULL,
    precios DECIMAL,
    deporte_especifico TEXT,
    entrenadorid INTEGER REFERENCES entrenadores(entrenadorid)
);

CREATE TABLE asistencias (
    asistenciaid SERIAL PRIMARY KEY,
    alumnoid INTEGER REFERENCES alumnos(alumnoid),
    eventoid INTEGER REFERENCES eventos(eventoid)
);

COMMIT;
