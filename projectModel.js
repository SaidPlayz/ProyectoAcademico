// projectModel.js
class ProjectModel {
    constructor() {
        this.projects = [];
    }

    createProject(Titulo, Periodo_Academico, cedula_estudiante, nombre_estudiante, apellido_estudiante, linea_de_investigacion, tutor_de_grado, descripcion_breve, objetivo_general, objetivo_especifico) {
        const proyecto = { Titulo, Periodo_Academico, cedula_estudiante, nombre_estudiante, apellido_estudiante, linea_de_investigacion, tutor_de_grado, descripcion_breve, objetivo_general, objetivo_especifico };
        this.projects.push(proyecto);
        console.log('Proyecto creado:', proyecto);
    }

    getAllProjects(callback) {
        callback(null, this.projects);
    }
}

module.exports = ProjectModel;

