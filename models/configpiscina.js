'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConfigpiscinaSchema = new Schema({
	image: { type: String, required: false }
},{ collection: 'configpiscina'});

module.exports = mongoose.model('Configpiscina', ConfigpiscinaSchema);