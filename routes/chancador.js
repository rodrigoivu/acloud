'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var ChancadorController = require ('../controllers/chancador');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-chancador',[md_auth.ensureAuth, md_auth.ensureAdminUser], ChancadorController.registraItem);
 api.get('/chancador-todos',[md_auth.ensureAuth,md_auth.ensureAdminUser], ChancadorController.itemsTodos);
 api.get('/chancador-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], ChancadorController.itemUltimo);
 api.get('/chancador-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUser], ChancadorController.itemsRangoFechas);
 api.get('/chancador-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUser], ChancadorController.itemsRangoUltimos);
 api.delete('/borra-chancador/:id',[md_auth.ensureAuth,md_auth.ensureAdminUser], ChancadorController.deleteItem);
module.exports = api;