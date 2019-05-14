'use strict'

var express = require ('express');
var bodyParser = require ('body-parser');
var path = require('path');
var app = express();


// cargar rutas
//var subsignal_routes = require('./routes/subsignal');
var user_routes = require('./routes/user');
var sendmail_routes = require('./routes/sendmail');
var chancador_routes = require('./routes/chancador');
var estacion_routes = require('./routes/estacion');
var harnero_routes = require('./routes/harnero');
var rotopalados_routes = require('./routes/rotopalados');
var rotopalauno_routes = require('./routes/rotopalauno');
var spreader_routes = require('./routes/spreader');
var configuracion_routes = require('./routes/configuracion');
var bateriaharnero_routes = require('./routes/bateriaharnero');
var bateriachancador_routes = require('./routes/bateriachancador');
var idharnero_routes = require('./routes/idharnero');
var idchancador_routes = require('./routes/idchancador');
var evaporacionpiscinadata_routes = require('./routes/evaporacionpiscinadata');
var evaporacionpiscinaobjeto_routes = require('./routes/evaporacionpiscinaobjeto');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended:false}));
// create application/json parser
app.use(bodyParser.json());

// CORS configurar cabeceras http
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*'); //permite el acceso a todos los dominios, a las apis
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Whith, Content-Type, Accept,Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use('/',express.static('client', { redirect: false }));
//app.use('/api', subsignal_routes);
app.use('/api', user_routes);
app.use('/api', sendmail_routes);
app.use('/api', chancador_routes);
app.use('/api', estacion_routes);
app.use('/api', harnero_routes);
app.use('/api', rotopalados_routes);
app.use('/api', rotopalauno_routes);
app.use('/api', spreader_routes);
app.use('/api', configuracion_routes);
app.use('/api', bateriaharnero_routes);
app.use('/api', bateriachancador_routes);
app.use('/api', idharnero_routes);
app.use('/api', idchancador_routes);
app.use('/api', evaporacionpiscinadata_routes);
app.use('/api', evaporacionpiscinaobjeto_routes);

app.get('*', function(req,res,next){
	res.sendFile(path.resolve('./client/index.html'));
});

module.exports = app;