'use strict'

var express = require('express');
var IdchancadorController = require ('../controllers/idchancador');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
api.get('/idchancador-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], IdchancadorController.itemUltimo);
api.put('/actualiza-idchancador/:id',[md_auth.ensureAuth, md_auth.ensureAdminUser], IdchancadorController.actualizaItem);

module.exports = api;