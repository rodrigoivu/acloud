'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var EvaporacionpilasdataSchema = new Schema({

	tm: { type: Date, required: false },
	idn: { type: Number, required: false},  
	ch1: { type: Number, required: false},
	ch2: { type: Number, required: false},
	ch3: { type: Number, required: false},
	ch4: { type: Number, required: false},
	ch5: { type: Number, required: false},
	ch6: { type: Number, required: false},
},{ collection: 'evaporacionpilasdata'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Evaporacionpilasdata', EvaporacionpilasdataSchema);