'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdharneroSchema = new Schema({
		sensor_1: { type: String, required: false},
		sensor_2: { type: String, required: false},
		sensor_3: { type: String, required: false},
		sensor_4: { type: String, required: false},
		sensor_5: { type: String, required: false},
		sensor_6: { type: String, required: false},
	},{ collection: 'idharnero'});

module.exports = mongoose.model('Idharnero', IdharneroSchema);