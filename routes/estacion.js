'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var EstacionController = require ('../controllers/estacion');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-estacion',[md_auth.ensureAuth, md_auth.ensureAdminUserHumedad], EstacionController.registraItem);
 api.get('/estacion-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], EstacionController.itemsTodos);
 api.get('/estacion-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], EstacionController.itemUltimo);
 api.get('/estacion-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], EstacionController.itemsRangoFechas);
 api.get('/estacion-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], EstacionController.itemsRangoUltimos);
 api.delete('/borra-estacion/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], EstacionController.deleteItem);
module.exports = api;