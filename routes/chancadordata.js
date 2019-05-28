'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var ChancadordataController = require ('../controllers/chancadordata');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-chancadordata',[md_auth.ensureAuth, md_auth.ensureAdminUserEsfuerzo], ChancadordataController.registraItem);
 api.get('/chancadordata-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], ChancadordataController.itemsTodos);
 api.get('/chancadordata-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], ChancadordataController.itemUltimo);
 api.get('/chancadordata-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], ChancadordataController.itemsRangoFechas);
 api.get('/chancadordata-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], ChancadordataController.itemsRangoUltimos);
 api.delete('/borra-chancadordata/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], ChancadordataController.deleteItem);
module.exports = api;