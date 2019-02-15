'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Idchancador = require('../models/idchancador');
var idItem;

//================================================
// CREAR UN ITEM
//================================================
function registraItem(){
	var date= new Date;
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Idchancador({
						sensor_1:'sensor1',
						sensor_2:'sensor2',
						sensor_3:'sensor3',
						sensor_4:'sensor4',
						sensor_5:'sensor5',
						sensor_6:'sensor6'
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
				console.log("idItemChancador: "+idItem);
			}
		}
	});
}

function crearSensores(){
	Idchancador.findOne({}) 
	   .exec((err, itemsFound) => {
   			if (err){
   				console.log("err: "+ err);
   			}else{
   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
				}else{
					idItem=itemsFound._id;
					console.log("si hay datos de idchancador id:"+idItem);
				}
   			}
   		});
}

//================================================
// ACTUALIZAR UN ITEM
//================================================
function actualizaItem(req,res){
	var itemId = req.params.id; 
	var params = req.body;      
 	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Idchancador.findByIdAndUpdate(itemId, params, { new: true }, (err, itemUpdated) => { 
		if(err){
			res.status(500).send({
				error: err,
				message: 'Error al actualizar item'
			});
		}else{
			if(!itemUpdated){
				res.status(404).send({
					message: 'Imposible actualizar item',
			    });
			}else{
				res.status(200).send({
					item: itemUpdated,
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
	Idchancador.findOne({}) 
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

module.exports = {
	crearSensores,
	actualizaItem,
	itemUltimo
};
