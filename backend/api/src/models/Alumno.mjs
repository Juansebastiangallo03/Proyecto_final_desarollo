class Alumno {
    constructor(alumnoid, nombre, apellido, correo, contrasena, telefono, deporte_interes, ubicacion, about_me, edad) {
      this.alumnoid = alumnoid;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.contrasena = contrasena;
      this.telefono = telefono;
      this.deporte_interes = deporte_interes;
      this.ubicacion = ubicacion;
      this.about_me = about_me;
      this.edad = edad;
    }
  
    // Método para mostrar la información de interés de un alumno
    infoInteres() {
      return `${this.nombre} ${this.apellido} practica ${this.deporte_interes} en la zona ${this.ubicacion}`;
    }
  }
  
  export { Alumno };
  