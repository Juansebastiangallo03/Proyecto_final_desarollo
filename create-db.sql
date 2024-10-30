create table entrenadores (
    ENTRENADORID int primary key auto_increment NOT NULL,
    NOMBRE text NOT NULL,
    APELLIDO text NOT NULL,
    CORREO text NOT NULL,
    CONTRASENA text NOT NULL,
    TELEFONO VARCHAR(10) NOT NULL,
    PRECIOS DECIMAL,
    DEPORTE_ESPECIFICO TEXT,
    UBICACION TEXT,
    ABOUT_ME TEXT
);

create table alumnos (
    ALUMNOID int primary key auto_increment NOT NULL,
    NOMBRE text NOT NULL,
    APELLIDO text NOT NULL,
    CORREO text NOT NULL,
    CONTRASENA text NOT NULL,
    TELEFONO VARCHAR(10) NOT NULL,
    DEPORTE_INTERES TEXT,
    UBICACION TEXT,
    ABOUT_ME TEXT
);

create table eventos (
    EVENTOID int primary key auto_increment NOT NULL,
    NOMBRE text NOT NULL,
    DESCRIPCION text NOT NULL,
    FECHA date NOT NULL,
    HORA time NOT NULL,
    UBICACION text NOT NULL,
    PRECIOS DECIMAL,
    DEPORTE_ESPECIFICO TEXT,
    INSTRUCTORID INTEGER,
    foreign key (ENTRENADORID) references ENTRENADORES(ENTRENADORID)
);

create table asistencias (
    ASISTENCIAID int primary key auto_increment NOT NULL,
    ALUMNOID INTEGER,
    EVENTOID INTEGER,
    foreign key (ALUMNOID) references ALUMNO(ALUMNOID),
    foreign key (EVENTOID) references EVENTOS(EVENTOID)
);



