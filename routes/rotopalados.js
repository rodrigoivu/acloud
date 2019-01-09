'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var RotopaladosController = require ('../controllers/rotopalados');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-rotopalados',[md_auth.ensureAuth, md_auth.ensureAdminUser], RotopaladosController.registraItem);
 api.get('/rotopalados-todos',[md_auth.ensureAuth,md_auth.ensureAdminUser], RotopaladosController.itemsTodos);
 api.get('/rotopalados-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], RotopaladosController.itemUltimo);
 api.get('/rotopalados-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUser], RotopaladosController.itemsRangoFechas);
 api.get('/rotopalados-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUser], RotopaladosController.itemsRangoUltimos);
 api.delete('/borra-rotopalados/:id',[md_auth.ensureAuth,md_auth.ensureAdminUser], RotopaladosController.deleteItem);
module.exports = api;