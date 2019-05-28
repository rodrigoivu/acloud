'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Bateriaharnero = require('../models/bateriaharnero');
var Idharnero = require('../models/idharnero');
var idItem;

var socketLocal; // se rescata del index.js
var ioLocal; // se rescata del index.js

//================================================
// CREAR UN ITEM
//================================================
function registraItem(){
	var date= new Date;
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Bateriaharnero({
						timestamp:date,
						estado1:0,
						estado2:0,
						estado3:0,
						estado4:0,
						estado5:0,
						estado6:0
					});
	//OJO CAMBIAR CONDICIONES SEGÚN MODELO
	item.save((err, itemStored) => {
		if(err){
			console.log("err: "+ err);
		}else{
			if(!itemStored){
				console.log("sin datos");
			}else{
				idItem=itemStored._id;
				console.log("idItemHarnero: "+idItem);
			}
		}
	});
}

function crearSensores(){
	Bateriaharnero.findOne({}) 
	   .exec((err, itemsFound) => {
	   			if (err){
	   				console.log("err: "+ err);
	   			}else{
	   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
					}else{
						idItem=itemsFound._id;
						console.log("si hay datos de idharnero id:"+idItem);
					}
	   			}
	   		});
}

//================================================
// ACTUALIZAR UN ITEM
//================================================
function actualizaItem(item){
	var itemA;
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
			 			switch (idx) {
			              case 0:
			                itemA={
									timestamp:item.tm,
									estado1:item.flag,
								  }
			                break;
			              case 1:
			                itemA={
									timestamp:item.tm,
									estado2:item.flag,
								  }
			                break;
			              case 2:
			                itemA={
									timestamp:item.tm,
									estado3:item.flag,
								  }
			                break;
			              case 3:
			                itemA={
									timestamp:item.tm,
									estado4:item.flag,
								  }
			                break;
			              case 4:
			                itemA={
									timestamp:item.tm,
									estado5:item.flag,
								  }
			                break;
			              case 5:
			                itemA={
									timestamp:item.tm,
									estado6:item.flag,
								  }
			                break;        
			              default:
			                break;
			            }
			            Bateriaharnero.findByIdAndUpdate(idItem, itemA, { new: true }, (err, itemUpdated) => { 
							if(err){
								console.log("err: "+ err);
							}else{
								if(!itemUpdated){
									console.log("Imposible actualizar");
								}else{
									mensajeBateriaHarnero(itemUpdated);
								}
							}
						});
			 		}
	   			}
	   	});

}
//================================================
// ENCUENTRA EL ULTIMO
//================================================
function itemUltimo(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Bateriaharnero.findOne({}) 
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				res.status(200).send({
						item: itemsFound
					});
	   			}
	   	});
}

function asignarSocket(socket,io){
    socketLocal=socket;
    ioLocal=io;
}

function mensajeBateriaHarnero(data){
	if(socketLocal){
		ioLocal.emit('BateriaHarnero',{data: data});
	}
}
module.exports = {
	crearSensores,
	actualizaItem,
	itemUltimo,
	asignarSocket

};
