// ProjectController.js
const ProjectModel = require('./projectModel');

class ProjectController {
    constructor() {
        this.projectModel = new ProjectModel();
    }

    createProject(Titulo, Periodo_Academico, cedula_estudiante, nombre_estudiante, apellido_estudiante, linea_de_investigacion, tutor_de_grado, descripcion_breve, objetivo_general, objetivo_especifico) {
        // Aquí puedes agregar la validación de los datos
        if (Titulo && Periodo_Academico && cedula_estudiante && nombre_estudiante && apellido_estudiante && linea_de_investigacion && tutor_de_grado && descripcion_breve && objetivo_general && objetivo_especifico) {
            this.projectModel.createProject(Titulo, Periodo_Academico, cedula_estudiante, nombre_estudiante, apellido_estudiante, linea_de_investigacion, tutor_de_grado, descripcion_breve, objetivo_general, objetivo_especifico);
        } else {
            console.log('Los datos proporcionados no son válidos');
        }
    }
}

module.exports = ProjectController;

