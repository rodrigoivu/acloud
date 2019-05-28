'use strict'
var fs = require('fs');
var path = require('path');
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Configpiscina = require('../models/configpiscina');
var idItem;
//================================================
// CREAR UN ITEM
//================================================
function registraItem(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Configpiscina({
						image:''
					});
	item.save((err, itemStored) => {
		if(err){
			console.log("err: "+ err);
		}else{
			if(!itemStored){
				console.log("sin datos");
			}else{
				idItem=itemStored._id;
				console.log("idItemConfigpiscina: "+idItem);
			}
		}
	});
}
function crearItem(){
	Configpiscina.findOne({}) 
	   .exec((err, itemsFound) => {
   			if (err){
   				console.log("err: "+ err);
   			}else{
   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
				}else{
					idItem=itemsFound._id;
					console.log("si hay datos de configpiscina id:"+idItem);
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
	Configpiscina.findByIdAndUpdate(itemId, params, { new: true }, (err, itemUpdated) => { 
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
	Configpiscina.findOne({}) 
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
//================================================
// CARGAR IMAGEN
//================================================
function uploadImage(req,res){
	var configId =req.params.id;
	if(req.files){
		var file_path = req.files.image.path;
		var file_ext = path.extname(file_path);
		var extensionesValidas = ['.jpg'];
		if( extensionesValidas.indexOf(file_ext) >= 0 ){
			//personalizar Nombre
			var nombreArchivo = `piscina.jpg`;
			var path_destino = `./uploads/imgpiscina/${nombreArchivo}`;
			//Mover archivo
			fs.rename( file_path,path_destino, function(err){
				if (err){
					res.status(500).send({message: 'Error al mover archivo'});
				}else{
					//Actualizar nombre en base de datos
					Configpiscina.findByIdAndUpdate(configId, {image: nombreArchivo}, (err, itemUpdated) => {
						if(!itemUpdated){
							res.status(404).send({message: 'No se ha podido actualizar el usuario'});
					    }else{
					    	//NO SE NECESITA ELIMINAR YA QUE ES EL MISMO NOMBRE SE REESCRIBE
					    	//Elimina imagen anterior
					    	// var pathViejo = './uploads/planta/' + itemUpdated.image;
					    	// if( fs.existsSync(pathViejo)){
		    		  //           fs.unlink( pathViejo , err =>{
		    			 //          if(err) return console.log(err);
          //                         console.log('file deleted successfully');
		    		  //           });
		    	   //          }
        				    res.status(200).send({ item: itemUpdated, archivo: nombreArchivo });
					    }
					});
				}
			});
		}else{
			res.status(400).send({message: 'Extención del archivo no válida'});
		}
		
	}else{
		res.status(400).send({message: 'No has subido ninguna imagen...'});
	}
}


//================================================
// OBTENER IMAGEN
//================================================
function getImageFile(req,res){
	var imageFile = req.params.imageFile;
	var path_file = path.resolve(__dirname, `../uploads/imgpiscina/${ imageFile }`);
	if( fs.existsSync( path_file ) ){
		res.sendFile(path_file);
	}else{
		var pathNoImage = path.resolve( __dirname, '../assets/no-img.jpg');
		res.sendFile(pathNoImage);
	}
}

module.exports = {
	crearItem,
	registraItem,
	actualizaItem,
	itemUltimo,
	uploadImage,
	getImageFile
};