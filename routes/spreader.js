'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var SpreaderController = require ('../controllers/spreader');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-spreader',[md_auth.ensureAuth, md_auth.ensureAdminUserHumedad], SpreaderController.registraItem);
 api.get('/spreader-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], SpreaderController.itemsTodos);
 api.get('/spreader-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], SpreaderController.itemUltimo);
 api.get('/spreader-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], SpreaderController.itemsRangoFechas);
 api.get('/spreader-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], SpreaderController.itemsRangoUltimos);
 api.delete('/borra-spreader/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserHumedad], SpreaderController.deleteItem);
module.exports = api;