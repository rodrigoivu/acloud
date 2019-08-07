'use strict'

var express = require('express');
var StatepilasController = require ('../controllers/statepilas');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/statepilas-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepilasController.itemUltimo);
api.post('/registra-statepilas',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], StatepilasController.registraItem);
api.get('/statepilas-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepilasController.itemsTodos);
api.get('/statepilas-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepilasController.itemsRangoFechas);
api.get('/statepilas-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepilasController.itemsRangoUltimos);
api.delete('/borra-statepilas/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], StatepilasController.deleteItem);

module.exports = api;