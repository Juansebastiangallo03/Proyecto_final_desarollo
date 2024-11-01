class Evento {
    constructor(eventoid, nombre, descripcion, fecha, hora, ubicacion, precios, deporte_especifico, entrenadorid) {
      this.eventoid = eventoid;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.hora = hora;
      this.ubicacion = ubicacion;
      this.precios = precios;
      this.deporte_especifico = deporte_especifico;
      this.entrenadorid = entrenadorid;
    }
  
    // Método para mostrar detalles de un evento
    detallesEvento() {
      return `${this.nombre} - ${this.deporte_especifico} en ${this.ubicacion} el ${this.fecha} a las ${this.hora}`;
    }
  }
  
  export { Evento };
  