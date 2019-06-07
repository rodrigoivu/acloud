var mqtt = require('mqtt')
var Rotopalauno = require('../models/rotopalauno');
var Rotopalados = require('../models/rotopalados');
var Spreader = require('../models/spreader');
var Estacion = require('../models/estacion');
var Harnero = require('../models/harnero');
var Harnerodata = require('../models/harnerodata');
var Idharnero = require('../models/idharnero');
var Idchancador = require('../models/idchancador');
var Chancador = require('../models/chancador');
var Chancadordata = require('../models/chancadordata');
var Evaporacionpiscinadata = require('../models/evaporacionpiscinadata');
var Evaporacionpilasdata = require('../models/evaporacionpilasdata');
var Controllerbateriaharnero = require('../controllers/bateriaharnero');
var Controllerbateriachancador = require('../controllers/bateriachancador');

var socketLocal; // se rescata del index.js
var ioLocal; // se rescata del index.js
//var client  = mqtt.connect('mqtt://192.168.0.8')
var client  = mqtt.connect('mqtt://165.227.26.150') //esta conectado al mqtt de desimat
client.on('connect', () => {
    client.subscribe('aplik/humedad/rotopalauno');
    client.subscribe('aplik/humedad/rotopalados');
    client.subscribe('aplik/humedad/spreader');
    client.subscribe('aplik/humedad/estacion');
    // client.subscribe('aplik/esfuerzo/harnero');
    client.subscribe('aplik/esfuerzo/harnerodata');
    client.subscribe('aplik/esfuerzo/chancadordata');
    // client.subscribe('aplik/esfuerzo/chancador');
    client.subscribe('aplik/esfuerzo/bateriaharnero');
    //client.subscribe('aplik/esfuerzo/bateriaharnero1');
    client.subscribe('aplik/esfuerzo/bateriachancador');
    client.subscribe('aplik/evapiscina/data');
    client.subscribe('aplik/evapilas/data');
})
client.on('message', (topic, message) => {

    var items;
   	items = JSON.parse(message);
 	

	// if(topic == 'aplik/humedad/rotopalauno'){
	// 	for (var i = 0; i < items.length; i++) {
	// 	items[i].timestamp= new Date(items[i].timestamp); 
	// 	}
	// 	insertaRotopalauno(items);
	// }
	var date = new Date;//MODIFICAR CON EL TIME STAMP LOCAL
	if(topic == 'aplik/humedad/rotopalauno'){
		//items.timestamp= new Date(items.timestamp);
		items.timestamp= new Date(date); 
		saveRotopalaUnoHumedad(items);
	}

	if(topic == 'aplik/humedad/rotopalados'){
		//items.timestamp= new Date(items.timestamp);
		items.timestamp= new Date(date); 
		saveRotopalaDosHumedad(items);
	}
	
	if(topic == 'aplik/humedad/spreader'){
		//items.timestamp= new Date(items.timestamp);
		items.timestamp= new Date(date); 
		saveSpreaderHumedad(items);
	}

	if(topic == 'aplik/humedad/estacion'){
		//items.timestamp= new Date(items.timestamp);
		items.timestamp= new Date(date); 
		saveEstacion(items);
	}

	// if(topic == 'aplik/esfuerzo/harnero'){
	// 	//items.timestamp= new Date(items.timestamp);
	// 	items.timestamp= new Date(date); 
	// 	saveHarnero(items);
	// }
	if(topic == 'aplik/esfuerzo/harnerodata'){
		//items.timestamp= new Date(items.timestamp);
		//items.timestamp= new Date(date); 
		let tm=new Date(items.tm);
		//tm.setHours(tm.getHours()-8);
		items.tm = tm;
		saveHarnerodata(items);
	}
	if(topic == 'aplik/esfuerzo/chancador'){
		//items.timestamp= new Date(items.timestamp);
		items.timestamp= new Date(date); 
		saveChancador(items);
	}
	if(topic == 'aplik/esfuerzo/chancadordata'){
		//items.timestamp= new Date(items.timestamp);
		//items.timestamp= new Date(date); 
		let tm=new Date(items.tm);
		//tm.setHours(tm.getHours()-8);
		items.tm = tm;
		saveChancadordata(items);
	}
	if(topic == 'aplik/esfuerzo/bateriaharnero'){
		//items.timestamp= new Date(items.timestamp);
		let tm=new Date(items.tm);
		//tm.setHours(tm.getHours()-8);
		items.tm = tm;
		saveBateriaHarnero(items);
	}
	if(topic == 'aplik/esfuerzo/bateriachancador'){
		//items.timestamp= new Date(items.timestamp);
		let tm=new Date(items.tm);
		//tm.setHours(tm.getHours()-8);
		items.tm = tm;
		saveBateriaChancador(items);
	}

	// EVAPORACION PISCINA
	if(topic == 'aplik/evapiscina/data'){
		//console.log(items);
		let tm=new Date(items.tm);
		items.tm = tm;
		saveEvapiscina(items);
	}

	// EVAPORACION PILAS
	if(topic == 'aplik/evapilas/data'){
		let tm=new Date(items.tm);
		items.tm = tm;
		saveEvapilas(items);
	}
	
	
})
//================================================
// SAVE HUMEDAD ROTOPALA UNO
//================================================
// {"timestamp":"08/02/18 14:04:10.000000000","humedad":123}
function saveRotopalaUnoHumedad(item){
	var rotopalauno = new Rotopalauno(item);
	rotopalauno.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				// console.log('Imposible registrar item');
			}else{
				// console.log('Item insertado');
			}
		}
	});
}
//================================================
// SAVE HUMEDAD ROTOPALA DOS
//================================================
// {"timestamp":"08/02/18 14:04:10.000000000","humedad":123}
function saveRotopalaDosHumedad(item){
	var rotopalados = new Rotopalados(item);
	rotopalados.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				// console.log('Imposible registrar item');
			}else{
				// console.log('Item insertado');
			}
		}
	});
}
//================================================
// SAVE HUMEDAD SPREADER
//================================================
// {"timestamp":"08/02/18 14:04:10.000000000","humedad":123}
function saveSpreaderHumedad(item){
	var spreader = new Spreader(item);
	spreader.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				// console.log('Imposible registrar item');
			}else{
				// console.log('Item insertado');
			}
		}
	});
}
//================================================
// SAVE ESTACION
//================================================
// {
// "timestamp":"08/02/18 14:04:10.000000000",
//  "humedadrelativa":123,
//  "radiacion":10,
//  "presion":10,
//  "direccionviento":10,
//  "velocidadviento":10
// }
function saveEstacion(item){
	var estacion = new Estacion(item);
	estacion.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				// console.log('Imposible registrar item');
			}else{
				 //console.log('Item insertado');
			}
		}
	});
}

//================================================
// SAVE HUMEDAD ROTOPALA UNO
//================================================
// {"timestamp":"08/02/18 14:04:10.000000000","humedad":123}
function saveRotopalaUnoHumedad(item){
	var rotopalauno = new Rotopalauno(item);
	rotopalauno.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				//console.log('Imposible registrar item');
			}else{
				//console.log('Item insertado');
			}
		}
	});
}

//================================================
// SAVE ESFUERZO HARNERO
//================================================
// function saveHarnero(item){
	// var harnero = new Harnero(item);
	// harnero.save((err, itemStored) => {
	// 	if(err){
	// 		return console.error(err);
	// 	}else{
	// 		if(!itemStored){
	// 			//console.log('Imposible registrar item');
	// 		}else{
	// 			mensajeEsfuerzoHarnero(harnero);
	// 		}
	// 	}
	// });
// }
//================================================
// SAVE ESFUERZO HARNERO
//================================================
function saveHarnerodata(item){
	var harnerodata = new Harnerodata(item);
	Idharnero.findOne({}) 
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				console.log(err);
	   			}else{
	   				let itemIdh = itemsFound;
	   				let sensores = [ parseInt(itemIdh.sensor_1),parseInt(itemIdh.sensor_2),
	   								 parseInt(itemIdh.sensor_3),parseInt(itemIdh.sensor_4),
	   								 parseInt(itemIdh.sensor_5),parseInt(itemIdh.sensor_6)];
			 		var idx = sensores.indexOf(item.idn);  
			 		if(idx > -1){
			 			harnerodata.idn=idx
			 			harnerodata.save((err, itemStored) => {
							if(err){
								return console.error(err);
							}else{
								if(!itemStored){
									//console.log('Imposible registrar item');
								}else{
									mensajeEsfuerzoHarnerodata(harnerodata);
								}
							}
						});
			 		}
	   			}
	   	});
}
//================================================
// SAVE ESFUERZO CHANCADOR
//================================================
// function saveChancador(item){
// 	var chancador = new Chancador(item);
// 	chancador.save((err, itemStored) => {
// 		if(err){
// 			return console.error(err);
// 		}else{
// 			if(!itemStored){
// 				//console.log('Imposible registrar item');
// 			}else{
// 				mensajeEsfuerzoChancador(chancador);
// 			}
// 		}
// 	});
// }

//================================================
// SAVE ESFUERZO CHANCADOR
//================================================
function saveChancadordata(item){
    var chancadordata = new Chancadordata(item);
	Idchancador.findOne({}) 
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				console.log(err);
	   			}else{
	   				let itemIdh = itemsFound;
	   				let sensores = [ parseInt(itemIdh.sensor_1),parseInt(itemIdh.sensor_2),
	   								 parseInt(itemIdh.sensor_3),parseInt(itemIdh.sensor_4),
	   								 parseInt(itemIdh.sensor_5),parseInt(itemIdh.sensor_6)];
			 		var idx = sensores.indexOf(item.idn);  
			 		if(idx > -1){
			 			chancadordata.idn=idx
			 			chancadordata.save((err, itemStored) => {
							if(err){
								return console.error(err);
							}else{
								if(!itemStored){
									//console.log('Imposible registrar item');
								}else{
									mensajeEsfuerzoChancadordata(chancadordata);
								}
							}
						});
			 		}
	   			}
	   	});
}

//================================================
// SAVE BATERIA HARNERO
//================================================
function saveBateriaHarnero(item){
  //0:bien 1:baja 2: critica 3:inactiva
	Controllerbateriaharnero.actualizaItem(item);
}

//================================================
// SAVE BATERIA CHANCADOR
//================================================
function saveBateriaChancador(item){
	Controllerbateriachancador.actualizaItem(item);
}

//================================================
// SAVE DATOS PISCINA
//================================================
function saveEvapiscina (item){
var evaporacionpiscinadata = new Evaporacionpiscinadata(item);
	evaporacionpiscinadata.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				//console.log('Imposible registrar item');
			}else{
				mensajeEvapiscinadata(evaporacionpiscinadata);
			}
		}
	});
}

//================================================
// SAVE DATOS PILAS
//================================================
function saveEvapilas (item){
var evaporacionpilasdata = new Evaporacionpilasdata(item);
	evaporacionpilasdata.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				//console.log('Imposible registrar item');
			}else{
				mensajeEvapilasdata(evaporacionpilasdata);
			}
		}
	});
}
//================================================
// INSERTAR ROTOPALAUNO VARIOS
//================================================
function insertaRotopalauno(items){

	Rotopalauno.collection.insertMany(items,(err, docs) => {
		if(err){
			return console.error(err);
		}else{
			console.log('Items insertados');
		}
	});

}

function asignarSocket(socket,io){
    socketLocal=socket;
    ioLocal=io;
}

function mensajeEsfuerzoHarnero(data){
	if(socketLocal){
		ioLocal.emit('EsfuerzoHarnero',{data: data});
	}
}
function mensajeEsfuerzoHarnerodata(data){
	if(socketLocal){
		ioLocal.emit('EsfuerzoHarnerodata',{data: data});
	}
}

function mensajeEvapiscinadata(data){
	if(socketLocal){
		ioLocal.emit('Evapiscinadata',{data: data});
	}
}
function mensajeEvapilasdata(data){
	if(socketLocal){
		ioLocal.emit('Evapilasdata',{data: data});
	}
}

// function mensajeEsfuerzoChancador(data){
// 	if(socketLocal){
// 		ioLocal.emit('EsfuerzoChancador',{data: data});
// 	}
// }
function mensajeEsfuerzoChancadordata(data){
	if(socketLocal){
		ioLocal.emit('EsfuerzoChancadordata',{data: data});
	}
}

module.exports = {
	asignarSocket
};
