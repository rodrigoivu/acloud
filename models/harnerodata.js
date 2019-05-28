'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var HarnerodataSchema = new Schema({
	tm: { type: Date, required: false },
	idn: { type: Number, required: false},
	ch1: { type: Number, required: false},
	ch2: { type: Number, required: false}

},{ collection: 'harnerodata'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Harnerodata', HarnerodataSchema);