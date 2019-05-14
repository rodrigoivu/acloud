'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var EvaporacionpiscinadataSchema = new Schema({

	timestamp: { type: Date, required: false },
	regleta: { type: Number, required: false},  
	vi1: { type: Number, required: false},
	vi2: { type: Number, required: false},
	vi3: { type: Number, required: false},
	vi4: { type: Number, required: false},
	vi5: { type: Number, required: false},
	vi6: { type: Number, required: false},
	vi7: { type: Number, required: false},
	vi8: { type: Number, required: false},
	vi9: { type: Number, required: false},
	vi10: { type: Number, required: false},
	vi11: { type: Number, required: false},
	vi12: { type: Number, required: false},
	vi13: { type: Number, required: false},
	vi14: { type: Number, required: false},
	vi15: { type: Number, required: false},
	vi16: { type: Number, required: false}

},{ collection: 'evaporacionpiscinadata'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Evaporacionpiscinadata', EvaporacionpiscinadataSchema);