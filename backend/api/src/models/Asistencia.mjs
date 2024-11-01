class Asistencia {
    constructor(asistenciaid, alumnoid, eventoid) {
      this.asistenciaid = asistenciaid;
      this.alumnoid = alumnoid;
      this.eventoid = eventoid;
    }
  
    // Método para registrar asistencia a un evento
    registrarAsistencia(alumnoid, eventoid) {
      this.alumnoid = alumnoid;
      this.eventoid = eventoid;
    }
  }
  
  export { Asistencia };
  