'use strict'

var express = require('express');
var StatepiscinaController = require ('../controllers/statepiscina');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/statepiscina-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepiscinaController.itemUltimo);
api.post('/registra-statepiscina',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], StatepiscinaController.registraItem);
api.get('/statepiscina-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepiscinaController.itemsTodos);
api.get('/statepiscina-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepiscinaController.itemsRangoFechas);
api.get('/statepiscina-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepiscinaController.itemsRangoUltimos);
api.delete('/borra-statepiscina/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepiscinaController.deleteItem);

module.exports = api;