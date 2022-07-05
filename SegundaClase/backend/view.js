/*
100s: Códigos informativos que indican que la solicitud iniciada por el navegador continúa.

200s: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.

300s: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.

400s: Códigos de error del cliente que indican que hubo un problema con la solicitud.

500s: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.
*/

// !{Protocolo}  {          URL base }{Parametros                                     }{Query String}
// * https:    //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures?sk=challenges&challengeId=5d5f9c8b9f9d4400009f9f8f


const http = require('http');
const controller = require('./controller')

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      controller.getAllTask(req, res);
      break;
    case "DELETE":
      controller.deleteTask(req, res);
      break;
    case "PATCH":
      controller.updateTask(req, res);
      break;
    case "POST":
      controller.createTask(req, res);
      break;

    default:
      controller.NotFound(req, res)
      break;
  }
})
server.listen(3000);
console.log("server listen on localhost:" + 3000);


