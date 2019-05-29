'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

//OJO CAMBIAR NOMBRE DE SCHEMA SEGUN ARCHIVO
var ConfigesfuerzoSchema = new Schema({
	factorMpa:{ type: Number, required: false },
	ofssetneutroflexharnero:{ type: Number, required: false },
	ofssetnormalflexharnero:{ type: Number, required: false },
	ofssetneutrocorteharnero:{ type: Number, required: false },
	ofssetnormalcorteharnero:{ type: Number, required: false },
	ofssetneutroflexchancador:{ type: Number, required: false },
	ofssetnormalflexchancador:{ type: Number, required: false },
	ofssetneutrocortechancador:{ type: Number, required: false },
	ofssetnormalcortechancador:{ type: Number, required: false },
	
},{ collection: 'configesfuerzo'});

//OJO CAMBIAR NOMBRE DEL ARGUMENTO Y DEL SCHEMA SEGUN ARCHIVO
module.exports = mongoose.model('Configesfuerzo', ConfigesfuerzoSchema);