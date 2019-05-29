'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Configesfuerzo = require('../models/configesfuerzo');
var idItem;
//================================================
// CREAR UN ITEM
//================================================
function registraItem(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Configesfuerzo(req.body);
	item.save((err, itemStored) => {
		if(err){
			res.status(500).send({
				error: err,
				message: 'Puede que el Item ya exista'
			});
		}else{
			if(!itemStored){
				res.status(404).send({
					message: 'Imposible registrar item'
				});
			}else{
				res.status(200).send({
					item: itemStored,
				});
			}
		}
	});
}
//================================================
// CREAR UN ITEM
//================================================
function registraItem(){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Configesfuerzo({
						factorMpa:1,
						ofssetneutroflexharnero:10,
						ofssetnormalflexharnero:40,
						ofssetneutrocorteharnero:10,
						ofssetnormalcorteharnero:40,
						ofssetneutroflexchancador:10,
						ofssetnormalflexchancador:40,
						ofssetneutrocortechancador:10,
						ofssetnormalcortechancador:40,
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
				console.log("idConfigesfuerzo: "+idItem);
			}
		}
	});
}
//================================================
// CREAR UN ITEM
//================================================
function crearItem(){
	Configesfuerzo.findOne({}) 
	   .exec((err, itemsFound) => {
   			if (err){
   				console.log("err: "+ err);
   			}else{
   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
				}else{
					idItem=itemsFound._id;
					console.log("si hay datos de configesfuerzo id:"+idItem);
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
	Configesfuerzo.findByIdAndUpdate(itemId, params, { new: true }, (err, itemUpdated) => { 
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
	Configesfuerzo.findOne({}) 
	   //.sort([['timestamp', -1]])
	   .sort({ timestamp: -1 })
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
	registraItem,
	actualizaItem,
	itemUltimo,
	crearItem
};