'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var HarneroController = require ('../controllers/harnero');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-harnero',[md_auth.ensureAuth, md_auth.ensureAdminUserEsfuerzo], HarneroController.registraItem);
 api.get('/harnero-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarneroController.itemsTodos);
 api.get('/harnero-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarneroController.itemUltimo);
 api.get('/harnero-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarneroController.itemsRangoFechas);
 api.get('/harnero-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarneroController.itemsRangoUltimos);
 api.delete('/borra-harnero/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarneroController.deleteItem);
module.exports = api;