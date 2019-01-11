var mqtt = require('mqtt')
var Rotopalauno = require('../models/rotopalauno');
var Rotopalados = require('../models/rotopalados');
var Spreader = require('../models/spreader');
var Estacion = require('../models/estacion');
var Harnero = require('../models/harnero');
var Chancador = require('../models/chancador');

//var client  = mqtt.connect('mqtt://192.168.0.8')
var client  = mqtt.connect('mqtt://165.227.26.150')
client.on('connect', () => {
    client.subscribe('aplik/humedad/rotopalauno');
    client.subscribe('aplik/humedad/rotopalados');
    client.subscribe('aplik/humedad/spreader');
    client.subscribe('aplik/humedad/estacion');
    client.subscribe('aplik/esfuerzo/harnero');
    client.subscribe('aplik/esfuerzo/chancador');
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
	if(topic == 'aplik/humedad/rotopalauno'){
		items.timestamp= new Date(items.timestamp); 
		saveRotopalaUnoHumedad(items);
	}

	if(topic == 'aplik/humedad/rotopalados'){
		items.timestamp= new Date(items.timestamp); 
		saveRotopalaDosHumedad(items);
	}

	if(topic == 'aplik/humedad/spreader'){
		items.timestamp= new Date(items.timestamp); 
		saveSpreaderHumedad(items);
	}

	if(topic == 'aplik/humedad/estacion'){
		items.timestamp= new Date(items.timestamp); 
		saveEstacion(items);
	}

	if(topic == 'aplik/esfuerzo/harnero'){
		items.timestamp= new Date(items.timestamp); 
		saveHarnero(items);
	}
	if(topic == 'aplik/esfuerzo/chancador'){
		items.timestamp= new Date(items.timestamp); 
		saveChancador(items);
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
				//console.log('Imposible registrar item');
			}else{
				//console.log('Item insertado');
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
				//console.log('Imposible registrar item');
			}else{
				//console.log('Item insertado');
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
				//console.log('Imposible registrar item');
			}else{
				//console.log('Item insertado');
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
				//console.log('Imposible registrar item');
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
function saveHarnero(item){
	var harnero = new Harnero(item);
	harnero.save((err, itemStored) => {
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
// SAVE ESFUERZO CHANCADOR
//================================================
function saveChancador(item){
	var chancador = new Chancador(item);
	chancador.save((err, itemStored) => {
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
