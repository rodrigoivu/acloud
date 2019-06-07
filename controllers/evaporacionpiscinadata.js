'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Evaporacionpiscinadata = require('../models/evaporacionpiscinadata');

//================================================
// CREAR UN ITEM
//================================================

function registraItem(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Evaporacionpiscinadata(req.body);
	//OJO CAMBIAR CONDICIONES SEGÚN MODELO

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
// MOSTRAR TODOS LOS ITEMS 
//================================================
function itemsTodos(req,res){

	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Evaporacionpiscinadata.find({}) 
	   .sort([['tm', 1]])
	   //.sort({ _id: 'asc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	   				Evaporacionpiscinadata.countDocuments({}, (err,conteo) =>{
	   					res.status(200).send({
								items: itemsFound,
								total: conteo
						});
	   				});
	   				
	   			}
	   		}
	   	);
}

//================================================
// MOSTRAR RANGO LOS ITEMS 
//================================================
function itemsRangoUltimos(req,res){
	var items = req.query.items || 1000;
	items = Number(items);
	idnode = Number(idnode);
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Evaporacionpiscinadata.find({'idn': idnode})
	   .skip(0)
	   .limit(items)
	   .sort([['tm', -1]])
	   //.sort({ _id: 'desc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				if(!itemsFound){
						res.status(404).send({message: 'Imposible mostrar información'});
					}else{	
		   				Evaporacionpiscinadata.countDocuments({}, (err,conteo) =>{
		   					res.status(200).send({
								items: itemsFound,
								total: conteo
							});
		   				});
		   			}
	   				
	   			}
	   		}
	   	);
}
//================================================
// MOSTRAR RANGO DE FECHAS
//================================================
function itemsRangoFechas(req,res){
	var desde = req.query.desde;
	var hasta = req.query.hasta;
	var idnode = req.query.idnode;
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Evaporacionpiscinadata.find({'idn': idnode, tm : {
					    '$gte': (new Date(desde)).getTime(),
					    '$lte': (new Date(hasta)).getTime()
						}
					})
	   .sort([['tm', 1]])
	   //.sort({ _id: 'asc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				if(!itemsFound){
						res.status(404).send({message: 'Imposible mostrar información'});
					}else{
						//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
		   				Evaporacionpiscinadata.countDocuments({}, (err,conteo) =>{
		   					res.status(200).send({
								items: itemsFound,
								total: conteo
							});
		   				});
		   			}
	   				
	   			}
	   		}
	   	);
}
//================================================
// ELIMINAR ITEM
//================================================

function deleteItem(req,res){
	var itemId = req.params.id; // éste parámetro se pone en el url despues de /
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Evaporacionpiscinadata.findByIdAndRemove(itemId, (err, itemRemoved) => {
		if(err){
			res.status(500).send({message: 'Error al borrar registro'});
		}else{
			if(!itemRemoved){
				res.status(404).send({message: 'No existe registro con ese id'});
			}else{
				res.status(200).send({item: itemRemoved});
			}
		}
	});
}

module.exports = {
	registraItem,
	itemsTodos,
	itemsRangoUltimos,
	deleteItem,
	itemsRangoFechas

};
