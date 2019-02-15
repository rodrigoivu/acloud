'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdchancadorSchema = new Schema({
		sensor_1: { type: String, required: false},
		sensor_2: { type: String, required: false},
		sensor_3: { type: String, required: false},
		sensor_4: { type: String, required: false},
		sensor_5: { type: String, required: false},
		sensor_6: { type: String, required: false},
	},{ collection: 'idchancador'});

module.exports = mongoose.model('Idchancador', IdchancadorSchema);