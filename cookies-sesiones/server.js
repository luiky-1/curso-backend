//------------para manejar las cookies

const express = require("express");/*la libreria express q importamos contiene un metodo estatic q define un servidor de archivos estaticos para una carpeta*/
const cookieSession = require("cookie-session");/*importamos la libreria cookis-session*/
const app = express();

//para pedirle a express q use cookiesession tenemos q pasar el resultado de ejecutar la libreria
//importamos con el metodo use al objeto app
app.use(cookieSession({//enviamos un objeto json
  name: "session",/*pasamos un nombre*/
  keys: ["jgshjghjdgs","hkjhjkhjk"]   /*pasamos un arreglo con claves para poder guardar y verificar los valores q se pasaron en la cookie*/
  //ponemos lo que queramos, es la firma de las cookies
}));
/*el objeto  session q esta disponible a traves de request, nos permite almacenar las cookies,tomamos la propiedad visits del objeto Session y le asignamos un valor:"1" y esto se guarda en la cookie*/
app.get("/",function(req,res){
//  req.session.visits= 1;/*le damos un valor determinado*/
  req.session.visits = req.session.visits || 0;/*asignamos un valor inicial a la cookie,si no, daria error en la primera visita al sitio, si hay nada guardado en su valor q empiece por cero*/
            //en la primera visita el valor de req...seria falso y pasaria al operador or y le asigna el valor cero q guarda, si fuese verdadero, q tenga un valor,ya no pasaria a la segunda parte del operador
  req.session.visits = req.session.visits + 1;/*el valor varia segun la cantidad de visitas debemos asignarle un valor inicial*/



  res.send(`${req.session.visits} visita(s)`) ;       /*el valor de la cookie,visits, lo enviamos como respuesta e la peticion*/
        /*obtenemos el valor de visits en la interpolacion y luego muestra el valor de visits*/
});


app.listen(3000);
