'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Spreader = require('../models/spreader');

//================================================
// CREAR UN ITEM
//================================================
function registraItem(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Spreader(req.body);
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
	Spreader.find({}) 
	   .sort([['timestamp', 1]])
	   //.sort({ _id: 'asc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	   				Spreader.countDocuments({}, (err,conteo) =>{
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
// MOSTRAR RANGO LOS ULTIMOS ITEMS 
//================================================
function itemsRangoUltimos(req,res){
	var items = req.query.items || 1000;
	items = Number(items);
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Spreader.find({})
	   .skip(0)
	   .limit(items)
	   .sort([['timestamp', -1]])
	   //.sort({ _id: 'desc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				if(!itemsFound){
						res.status(404).send({message: 'Imposible mostrar información'});
					}else{	
		   				Spreader.countDocuments({}, (err,conteo) =>{
		   					var itemsFilter=itemsFound.map( item => {
                                    var hr= item.timestamp.getHours();
                                    if(hr >=  8 & hr < 20 ){
                                            item.humedad=0;
                                    }
                                    return item;
                            });
		   					res.status(200).send({
								items: itemsFilter,
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
	// console.log(new Date(desde));
	// console.log(new Date(hasta));
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Spreader.find({timestamp : {
					    '$gte': (new Date(desde)).getTime(),
					    '$lte': (new Date(hasta)).getTime()
						}
					})
	   .sort([['timestamp', 1]])
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
		   				Spreader.countDocuments({}, (err,conteo) =>{
		   					var itemsFilter=itemsFound.map( item => {
                                    var hr= item.timestamp.getHours();
                                    if(hr >=  8 & hr < 20 ){
                                            item.humedad=0;
                                    }
                                    return item;
                            });
		   					res.status(200).send({
								items: itemsFilter,
								total: conteo
							});
		   				});
		   			}
	   				
	   			}
	   		}
	   	);
}

//================================================
// ENCUENTRA EL ULTIMO
//================================================
function itemUltimo(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Spreader.findOne({}) 
	   .sort([['timestamp', -1]])
	   //.sort({ timestamp: -1 })
	   //.sort({ _id: 'desc' })
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				res.status(200).send({
						items: itemsFound
					});
	   			}
	   		});
}
//================================================
// ELIMINAR ITEM
//================================================
function deleteItem(req,res){
	var itemId = req.params.id; // éste parámetro se pone en el url despues de /
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Spreader.findByIdAndRemove(itemId, (err, itemRemoved) => {
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
	itemsRangoFechas,
	itemsRangoUltimos,
	itemUltimo,
	deleteItem
};
