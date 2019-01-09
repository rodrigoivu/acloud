var mqtt = require('mqtt')
var Harnero = require('../models/harnero');
var Chancador = require('../models/chancador');
var Rotopalauno = require('../models/rotopalauno');
//var client  = mqtt.connect('mqtt://192.168.0.8')
var client  = mqtt.connect('mqtt://165.227.26.150')
client.on('connect', () => {
    client.subscribe('aplik/humedad/rotopalauno');
    client.subscribe('aplik/esfuerzo/harnero');
    client.subscribe('aplik/esfuerzo/chancador');
})
client.on('message', (topic, message) => {

    var items;
   	items = JSON.parse(message);

	if(topic == 'aplik/humedad/rotopalauno'){
		for (var i = 0; i < items.length; i++) {
		items[i].timestamp= new Date(items[i].timestamp); 
		}
		insertaRotopalauno(items);
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
// INSERTAR ROTOPALAUNO
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
