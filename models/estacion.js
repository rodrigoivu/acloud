'use strict'
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var EstacionSchema = new Schema({
	timestamp: { type: Date, required: false },
	humedadrelativa: { type: Number, required: false},
	temperatura: { type: Number, required: false},
	radiacion: { type: Number, required: false},
	presion: { type: Number, required: false},
	direccionviento: { type: Number, required: false},
	velocidadviento: { type: Number, required: false}
},{ collection: 'estacion'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Estacion', EstacionSchema);