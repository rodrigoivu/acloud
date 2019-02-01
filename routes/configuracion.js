'use strict'

var express = require('express');
var ConfiguracionController = require ('../controllers/configuracion');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
 api.post('/registra-configuracion',[md_auth.ensureAuth, md_auth.ensureAdminUser], ConfiguracionController.registraItem);
 api.put('/actualiza-configuracion/:id',[md_auth.ensureAuth, md_auth.ensureAdminUser], ConfiguracionController.actualizaItem);
 api.get('/configuracion-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], ConfiguracionController.itemUltimo);

module.exports = api;