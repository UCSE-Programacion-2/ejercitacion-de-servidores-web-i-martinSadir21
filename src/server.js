/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
    /* Aquí la lógica del enrutador */
    const rutas = {
      '/': 'Bienvenid@s! Gracias por tu visita.',
      '/nosotros': 'Bienvenid@s a saber + de nosotros :)',
      '/cursos': 'Te interesan nuestros cursos. Vení a conocer la oferta!',
      '/contacto': 'Si querés contactarnos, hacelo a este Email: :)',
    };

    const mensaje = rutas[req.url];

    if (mensaje !== undefined) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(mensaje);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No se ha encontrado la ruta ingresada.');
    }
  });

  return server;
}

module.exports = createServer;
