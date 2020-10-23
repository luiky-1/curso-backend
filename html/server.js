//-------------- vamos a enviar un documento html como respuesta a una peticion web
//const express = require("express");/*importamos la libreria de express*/
//const app = express();/*ejecutamos la funcion para obtenerel objetos app q es a traves del cual definimos rutas*/

/*ruta inicial para q responda con un documento html*/
//app.get("/",function(req,res){
//    res.sendFile("index.html",{/*como argumento enviamos la ruta de la carpeta del proyecto*/
//      root: __dirname   /*asi sendFile sabra donde buscar el archivo index.html*/
//    }); /*usamos el metodo sendfile q tiene el objeto de la respuesta*/
                                  /*sendfile recibe como argumento el nombre del archivo q queremos enviar*/
    //res.send(__dirname);
//});
/* node.js provee de una variable llamada __dirname para especificar de forma absoluta la ruta hacia la carpeta del proyecto
lo q indica q aunque cambiemos la carpeta de lugar la encontrará de forma activa*/

//app.listen(3000);/*ponemos a escuchar nuestro servidor*/


//un archivo estatico envia los documentos q no son modificables comp ejemplo archivos css o javascript
//ahora veremos como enviar este tipo de archivos para acompañar al documento html
//nombres comunes para la acrpeta de archivos estaticos son assets, public o static

const express = require("express");/*la libreria express q importamos contiene un metodo estatic q define un servidor de archivos estaticos para una carpeta*/
const app = express();

app.set("view engine","ejs");/*para indicar el uso de un motor de vistas usamos el metodo set del objeto app*/
/*como primer argumento pasamos view engine,para q sepa q es un motor de busqueda,el segundo es el motor de vista q vamos a usar*/
//como argumento de este metodo static debemos pasar el nombre de la carpeta q contiene los archivos
app.use("/assets",express.static("assets"));/*usamos el metodo use para insertar el servidor de archivos staticos con nuestro servidor web*/
/*""/assets" especificamos la ruta para el link de la hoja html, el "assets" indica la carpeta en donde esta*/
//si no queremos q se use la estrategia de ETag para el caché,debemos incluirlo como segundo argumento de static y colocarlo entrs llaves (assets,{etag:false})
//MaxAge se usaría igual q ETag con un string valido o un valor de tiempo q indica durante cuantas horas es valida la copia (assets,{MaxAge: ""})
app.get("/",function(req,res){
  res.render("index");/*para indicar al servidor web q debe responder con esta vista a la peticion get*/
  /*render es el metodo q sirve para enviar una vista despues de haber configurado un motor*/
  /*como argumento una cadena con el nombre de la vista a mostrarse*/
    //res.sendFile("index.html",{/*esto en caso de archivos estaticos
    //  root: __dirname
      //});
});
app.listen(3000);

//If-None.Match: W/"50-175091c0648"   el ETag se genera como identificador del archivo(en cmd con curl) a partir del contenido del archivo
  //cuando el ETag es el mismo,la respuesta del servidor es mas rapida pq ya tiene los datos en caché, si el ETag se modifica es pq el archivo ha sido modificado y hay q enviar una respuesta diferente
  //para ver el ETag o el max-age C:\Users\luiss>curl http://localhost:3000/assets/style.css -v


  //maxage es otra estrategia para el cache tiene la ventaja de indicar por cuanto tiempo es valida la copia sin importar si ha cambiado el archivo o no.
