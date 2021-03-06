'use strict'
//Usar las siguientes directivas para https
// var https = require('https');
// var fs = require('fs');

//Certificados para https;
// var credentials = {
// 	ca: fs.readFileSync("/etc/nginx/certs/centropiecmds.cl/ca.pem"), //la certification authority o CA
// 	key: fs.readFileSync("/etc/nginx/certs/centropiecmds.cl/key.pem"), //la clave SSL, que es el primer archivo que generamos ;)
// 	cert: fs.readFileSync("/etc/nginx/certs/centropiecmds.cl/fullchain.pem") //el certificado
// 	//cert: fs.readFileSync("/etc/nginx/certs/centropiecmds.cl/fullchain.pem", 'utf8')
// };


//app: archivo contiene funcionalidades de Express,para el armado de la infraestructura de la API
var app = require('./app');
var socket = require('socket.io');
//Puerto para servir la API
var port = process.env.PORT || 3782;

//broker: es el servidor para mqtt
var broker = require('./broker');

//Funciones para Publicar y Subscribir mediante mqtt

//var publisher = require('./publisher');
var subscriber = require('./controllers/subscriber');
var bateriaharnero = require('./controllers/bateriaharnero');
var bateriachancador = require('./controllers/bateriachancador');
var idchancador = require('./controllers/idchancador');
var idharnero = require('./controllers/idharnero');
var configpilas = require('./controllers/configpilas');
var configpiscina = require('./controllers/configpiscina');
var configesfuerzo = require('./controllers/configesfuerzo');
// var PublisherController = require('./controllers/publisher');
//var Publisher = require('./publisher');

//mongoose: comandos para manejo de mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Conectar a la base de datos mongodb
mongoose.connect('mongodb://localhost:27017/aplikcloud',{ useCreateIndex: true, useNewUrlParser: true },(err,res) => {  //useNewUrlParser agregado por el error de depreciacion
if (err) {
	throw err;
}else{
	console.log("La conexión a la base de datos está funcionando correctamente...");
  
    //Conectar el Servidor de Api's mediante https  
    //    https.createServer(credentials, app).listen(port, function(){
    //    console.log("Servidor de adminpie escuchando en http://localhost:" + port);
	// });
	//Conectar el Servidor de Api's mediante http
	const server = app.listen(port, function(){
	    console.log("Servidor de Api's de desimat cloud escuchando en http://localhost:" + port);
	    //Consultar o crear estados de bateria
	    bateriaharnero.crearSensores();
	    bateriachancador.crearSensores();
	    idharnero.crearSensores();
	    idchancador.crearSensores();
	    configpilas.crearItem();
	    configpiscina.crearItem();
	    configesfuerzo.crearItem();
	});

	const io = socket.listen(server,{
					path: '/evento/socket.io'
				});
	
	io.sockets.on('connection', (socket) => { 
		subscriber.asignarSocket(socket,io);
		bateriaharnero.asignarSocket(socket,io);
		bateriachancador.asignarSocket(socket,io);
	});
}
});
