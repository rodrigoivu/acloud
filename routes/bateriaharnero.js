'use strict'

var express = require('express');
var BateriaharneroController = require ('../controllers/bateriaharnero');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
api.get('/bateriaharnero-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], BateriaharneroController.itemUltimo);

module.exports = api;