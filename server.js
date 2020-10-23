///const http = require("http");/*nodejs provee de una libreria llamada http que nos permite comunicarnos por medio del protocolo http con otras aplicacione*/
/*en const lo q hacemos es importar la libreria http*/
//function responderPeticion(request,response){/*request es la informacion de la peticion y response con la funcionalidad para enviar respuestas*/
  //response.end("hola mundo"); /*de esta manera se anula la respuesta y envia el mensaje q escribimos*/
//}
//let server = http.createServer(responderPeticion);/*creamos nuestro servidor con este metodo*/
/*hay q pasarle una funcion para q responda cada vez q reciba una peticion del cliente linea 3*/
/*La funcion q se envia a createserver,tienne q recibir 2 argumentos q son insertados por el metodo create server
cuando manda a llamar a la funcion responderPeticion, lo q hace create server es guardarla y cada vez q hay una peticion se itera este sistema*/

//server.listen(3000);/*ejecutamos el metodp listen del objeto server,para poner a la escucha al servidor  traves del puerto 3000*/
//--------------------------------------------------------------------
/*esto q viene ahora es otra menra de crear un servidor pero incluyendo el entorno de trabajo express q ademas nos baja un monton de librerias*/

//const express = require("express");/*traemos la libreria q acabamos de instalar*/
/*esto retorna una funcion,express(), q al ejecutarse nos entrega un objeto con el q podemos configurar nuestra aplicacion*/

//const app = express();
/*el objeto app puede ahora especificar rutas a las q va a responder y q respuesta enviara*/
//app.get("/",function(req,res){/*de la ruta "/" vamos a pasar una funcion que va a responder a las peticiones q vengan precisamente a esta ruta*/
//  res.send("hola mundo2");                       /*req informacion relevante de la peticion y de la respuesta*/
//});

//app.listen(3000);/*ejecutamos el metodo listen del objeto app*/


//----------------------------------------- empezamos la practica con postman el metodo get
//const express = require("express");
//const app = express();
//app.get("/saludo",function(req,res){
  //  res.send(`hola ${req.query.name}`); /*se usa este simbolo pq soporta interpolacion (${})*/
//});/*query es un objeto dentro de request q recibe una propiedad por cada peticion*//*name es un objeto dentro de query que guarda el valor del saludo a devolver*/
    /*name es el identificador, el emisor del mensaje debera usar este mismo identificador para q la respuesta sea la apropiada*/
//app.listen(3000);

//---------------- vamos a probar los metodos post y get
//Query son los parámetros que se envían como parte de la URL, en muchas páginas los puedes identificar porque aparecen después de un ? y separados por &.
//El body, son argumentos que van en el cuerpo de la petición y no en la URL, estos tienen la ventaja de ser encriptados cuando la petición viaja por HTTPs, entre otras cosas. No aparecen en la URL y usualmente son enviados al enviar un formulario
const express = require("express");
const bodyParser = require("body-parser"); /*importamos la libreria q hemos instalado*/
const app = express();
app.use(bodyParser.urlencoded({extended: true}) );/*estamos pidiendo a express q como parte del proceso de dar respuesta a una peticion use
el analizador bodyparser para leer el cuerpo de datos de una peticion q venga con el formato urlencoded. la opcion extended es necesaria para
q se puedan mandar datos anidados(asi podemos enviar un objeto con propiedade en la peticion)*/

app.get("/saludo",function(req,res){
    res.send(`hola ${req.query.name}`);/*los datos obtenidos del cuerpo de la peticion se exponen en el objeto req*/
});
app.post("/",function(req,res){
  res.send(`hola ${req.body.name}`);/*obtiene el nombre del cuerpo y no de los parametros de consulta*/
  //req.body/*a diferencia de los parametros de consulta esta informacion viene en el objeto body y no query como sucede con el otro tipo de dato q podemos recibir*/
});
app.listen(3000);
