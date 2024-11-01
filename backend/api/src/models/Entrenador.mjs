class Entrenador {
    constructor(entrenadorid, nombre, apellido, correo, contrasena, telefono, precios, deporte_especifico, ubicacion, about_me, edad) {
      this.entrenadorid = entrenadorid;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.contrasena = contrasena;
      this.telefono = telefono;
      this.precios = precios;
      this.deporte_especifico = deporte_especifico;
      this.ubicacion = ubicacion;
      this.about_me = about_me;
      this.edad = edad;
    }
  
    // Método para mostrar información básica del entrenador
    infoBasica() {
      return `${this.nombre} ${this.apellido}, especializado en ${this.deporte_especifico}`;
    }
  
    // Método para actualizar la disponibilidad horaria o precios
    actualizarDisponibilidad(precios, ubicacion) {
      this.precios = precios;
      this.ubicacion = ubicacion;
    }
  }
  
  export { Entrenador };
  