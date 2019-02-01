'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Bateriachancador = require('../models/bateriachancador');
var idItem;

//================================================
// CREAR UN ITEM
//================================================
function registraItem(){
	var date= new Date;
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Bateriachancador({
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
				console.log("idItemChancador: "+idItem);
			}
		}
	});
}

function crearSensores(){
	Bateriachancador.findOne({}) 
	   .exec((err, itemsFound) => {
   			if (err){
   				console.log("err: "+ err);
   			}else{
   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
				}else{
					idItem=itemsFound._id;
					console.log("si hay datos de bateriachancador id:"+idItem);
				}
   			}
   		});
}

//================================================
// ACTUALIZAR UN ITEM
//================================================
function actualizaItem(item){
	var date = new Date;
	//var date = new Date(item.timestamp); //ver si se asigna el tiempo aqui o desde el dato recibido
	var itemA={
			timestamp:date,
			estado1:item.estado1,
			estado2:item.estado2,
			estado3:item.estado3,
			estado4:item.estado4,
			estado5:item.estado5,
			estado6:item.estado6
		  }
 	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Bateriachancador.findByIdAndUpdate(idItem, itemA, { new: true }, (err, itemUpdated) => { 
		if(err){
			console.log("err: "+ err);
		}else{
			if(!itemUpdated){
				console.log("Imposible actualizar");
			}else{
			}
		}
	});
}
//================================================
// ENCUENTRA EL ULTIMO
//================================================
function itemUltimo(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Bateriachancador.findOne({}) 
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
