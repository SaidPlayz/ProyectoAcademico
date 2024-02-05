// app.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const ProjectController = require('./projectController');
const ejs = require('ejs');

const projectController = new ProjectController();

http.createServer((req, res) => {
    const requestUrl = url.parse(req.url, true);
    const pathName = requestUrl.pathname;

    if (req.method === 'GET' && pathName === '/proyectos') {
        projectController.projectModel.getAllProjects((err, projects) => {
            if (err) {
                res.writeHead(500);
                res.end('Error al cargar los proyectos');
            } else {
                fs.readFile('./projectView.ejs', 'utf-8', (err, content) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error al cargar la vista');
                    } else {
                        const html = ejs.render(content, { projects: projects });
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(html);
                    }
                });
            }
        });
    } else if (req.method === 'POST' && pathName === '/proyectos') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = new URLSearchParams(body);
            projectController.createProject(
                data.get('Titulo'),
                data.get('Periodo_Academico'),
                data.get('cedula_estudiante'),
                data.get('nombre_estudiante'),
                data.get('apellido_estudiante'),
                data.get('linea_de_investigacion'),
                data.get('tutor_de_grado'),
                data.get('descripcion_breve'),
                data.get('objetivo_general'),
                data.get('objetivo_especifico')
            );
            res.writeHead(302, {'Location': '/proyectos'});
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('Página no encontrada');
    }
}).listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
