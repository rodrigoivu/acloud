'use strict'

var express = require('express');
var ConfigesfuerzoController = require ('../controllers/configesfuerzo');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
 api.post('/registra-configesfuerzo',[md_auth.ensureAuth, md_auth.ensureAdminUser], ConfigesfuerzoController.registraItem);
 api.put('/actualiza-configesfuerzo/:id',[md_auth.ensureAuth, md_auth.ensureAdminUser], ConfigesfuerzoController.actualizaItem);
 api.get('/configesfuerzo-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], ConfigesfuerzoController.itemUltimo);

module.exports = api;