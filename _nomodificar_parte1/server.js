const express = require("express");
const sqlite3 = require("sqlite3"); /*importamos la libreria sqlite3*/
const bodyParser = require("body-parser");//nos sive para leer los campos q vienen en el cuerpo de la peticion
const Sequelize = require("sequelize");/*importamos el ORM*/
const app = express();


app.use(bodyParser.urlencoded({extended: true}));//bodyparser ayuda en el analisis de la informacion q viene en el cuerpo del mensaje http//lo importamos como un middleware del servidor web
      //el metodo urlencoded nos ayuda a obtener los datos q se nos envian

/*empezamos po obtener un objeto que mos permita manipular la base de datos,esta operacion ademas  abre ademas la conexion automaticamente*/
/*al crear un objeto de control de la base de datos, la conexion se abre automaticamente*/
/*la instruccion  para abrir la conexion a nuestra base de datos es:*/
///let db = new sqlite3.Database("proyecto-backend");/*el argumento es el nombre de la base de datos*/
                                                /*si le ponemos :memory, al cerrar el proyecto se borra la base de dato*/

//instanciamos un nuevo objeto de la clase sequelize
const sequelize = new Sequelize("proyecto-bacend",null,null,{
  dialect: "sqlite"  //motor de base de datos con q vamos a conectar a sqlite
  storage: "./proyecto-backend"              //cuando usamos sqlite ademas debemos especificar la ruta a la carpeta donde se almacena la base de datos
});/*la clase o constructor Sequelize recibe de 3 a 4 argumentos
            // 3 de estos argumentos son: nombre base de datos,nombre de usuario y la contraseña
            // el 4 es un json de configuracion en q podemos poner opciones mas especificas para la conexion,colocamos un objeto

//db.run("CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))"); /*dentro de algumento del metodo run, vamos a colocar un string que contenga una sentencia en el lenguaje sql*/
/*primero colocamos una instruccion de lo q vamos a hacer, luego el nombre de la tabla y entre los parentesis definimos los campos de nuestra tabla*/
/*id es el identificador de la tabla int es el tipo de dato q en este caso es un entero par definir un nuevo campo se separa con comas, */
/*varchar es texto y hay q indicarle la cantidad de letras que almacena*/
/*AUTO_INCREMENT INDICA Q ESTE CAMPO LO DEBE AUMENTAR LA BASE DE DATOS USANDO EL VALOR ANTERIOR E INCREMENTANDOLO EN UNO,asi todos los regisyros tienen un identificador unico*/

//creamos una ruta POST donde recibir los datos q vayamos a insertar en la tabletaskstasks

app.post("/pendientes",function(req,res){
  //db.run("INSERT INTO tasks(description) VALUES('hola base datos')");
   //ejecutamos una consulta, en el argumento pasamos la consulta
  //insertar dentro de la tabla tasks en el campo description los valores...
//  db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`);
  //paraindicar q vamos a integrar un campo description, insertamos los elementos q vengan de una peticion http

  db.run(`INSERT INTO tasks(description) VALUES('?')`,req.body.description);
  //de esta manera evitamos atques de hackers sql,el argumento interrogacion va tomando los valores de req.body.description de izq a derecha
  //un argumento por cada signo de interrogacion

  res.send("insercion finalizada");
});


//*hay q indicar una instruccion de cierre de la conexion para evitar fugas de memoria q afecten el rendimiento de nuestra computadora*/
//db.close();/*LO PASAMOS A PROCESS PQ LO TENEMOS Q CONFIGURAR PARA Q SE CIERRE EN EL MOMENTO ADECUADO
/*al ejecutar la base de datos se genera un archivo en nuestro proyecto con el nombre q le hemos dado a la base de datos*/
app.listen(3000);

process.on("SIGINT",function(){
  console.log("adios--atte el servidor");/*al presionar control+c se cierra el servidor en el cmd e imprime el mensaje*/
  db.close();/*cerramos la base de datos*/
  process.exit();/*cerramos el servidor de node independientemenete de donde la ejecutes*/
})
