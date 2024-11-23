// api.js
const API_BASE_URL = 'http://localhost:5432'; // Cambia según tu configuración

// ALUMNOS
export const fetchAlumnos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/alumnos`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching alumnos:', error);
    }
};

export const createAlumno = async (alumnoData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/alumnos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alumnoData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating alumno:', error);
    }
};

// ENTRENADORES
export const fetchEntrenadores = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/entrenadores`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching entrenadores:', error);
    }
};

export const createEntrenador = async (entrenadorData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/entrenadores`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entrenadorData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating entrenador:', error);
    }
};

// EVENTOS
export const fetchEventos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/eventos`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching eventos:', error);
    }
};

export const createEvento = async (eventoData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/eventos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventoData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating evento:', error);
    }
};

// ASISTENCIAS
export const fetchAsistencias = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/asistencias`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching asistencias:', error);
    }
};

export const createAsistencia = async (asistenciaData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/asistencias`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(asistenciaData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating asistencia:', error);
    }
};
