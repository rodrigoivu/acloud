'use strict'
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var RotopaladosSchema = new Schema({
	timestamp: { type: Date, required: false },
	humedad: { type: Number, required: false}
},{ collection: 'rotopalados'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Rotopalados', RotopaladosSchema);