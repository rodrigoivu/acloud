'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConfigpilasSchema = new Schema({
	image: { type: String, required: false }
},{ collection: 'configpilas'});

module.exports = mongoose.model('Configpilas', ConfigpilasSchema);