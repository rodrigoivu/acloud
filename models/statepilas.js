'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatepilasSchema = new Schema({
	tm: { type: Date, required: false },
	real_cov: { type: Number, required: false},
	real_theta: { type: Number, required: false},
	rls_theta_0: { type: Number, required: false},
	rls_theta_1: { type: Number, required: false},
	rls_theta_2: { type: Number, required: false},
	rls_cov_1_1: { type: Number, required: false},
	rls_cov_1_2: { type: Number, required: false},
	rls_cov_1_3: { type: Number, required: false},
	rls_cov_2_1: { type: Number, required: false},
	rls_cov_2_2: { type: Number, required: false},
	rls_cov_2_3: { type: Number, required: false},
	rls_cov_3_1: { type: Number, required: false},
	rls_cov_3_2: { type: Number, required: false},
	rls_cov_3_3: { type: Number, required: false},
	k_theta_0: { type: Number, required: false},
	k_theta_1: { type: Number, required: false},
	k_theta_2: { type: Number, required: false},
	k_cov_1_1: { type: Number, required: false},
	k_cov_1_2: { type: Number, required: false},
	k_cov_1_3: { type: Number, required: false},
	k_cov_2_1: { type: Number, required: false},
	k_cov_2_2: { type: Number, required: false},
	k_cov_2_3: { type: Number, required: false},
	k_cov_3_1: { type: Number, required: false},
	k_cov_3_2: { type: Number, required: false},
	k_cov_3_3: { type: Number, required: false},

},{ collection: 'statepilas'});

module.exports = mongoose.model('Statepilas', StatepilasSchema);