'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BateriaharneroSchema = new Schema({
	timestamp: { type: Date, required: false},
	estado1: { type: Number, required: false},
	estado2: { type: Number, required: false},
	estado3: { type: Number, required: false},
	estado4: { type: Number, required: false},
	estado5: { type: Number, required: false},
	estado6: { type: Number, required: false}
},{ collection: 'bateriaharnero'});

module.exports = mongoose.model('Bateriaharnero', BateriaharneroSchema);