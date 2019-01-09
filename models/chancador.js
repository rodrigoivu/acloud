'use strict'
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var ChancadorSchema = new Schema({
	timestamp: { type: Date, required: false },
	ch1_1: { type: Number, required: false},
	ch2_1: { type: Number, required: false},
	ch1_2: { type: Number, required: false},
	ch2_2: { type: Number, required: false},
	ch1_3: { type: Number, required: false},
	ch2_3: { type: Number, required: false},
	ch1_4: { type: Number, required: false},
	ch2_4: { type: Number, required: false},
	ch1_5: { type: Number, required: false},
	ch2_5: { type: Number, required: false},
	ch1_6: { type: Number, required: false},
	ch2_6: { type: Number, required: false}

},{ collection: 'chancador'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Chancador', ChancadorSchema);