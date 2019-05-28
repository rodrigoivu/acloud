'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var HarnerodataController = require ('../controllers/harnerodata');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-harnerodata',[md_auth.ensureAuth, md_auth.ensureAdminUserEsfuerzo], HarnerodataController.registraItem);
 api.get('/harnerodata-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarnerodataController.itemsTodos);
 api.get('/harnerodata-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarnerodataController.itemUltimo);
 api.get('/harnerodata-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarnerodataController.itemsRangoFechas);
 api.get('/harnerodata-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarnerodataController.itemsRangoUltimos);
 api.delete('/borra-harnerodata/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserEsfuerzo], HarnerodataController.deleteItem);
module.exports = api;