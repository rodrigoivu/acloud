'use strict'

var express = require('express');
var EvaporacionpilasdataController = require ('../controllers/evaporacionpilasdata');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-evaporacionpilasdata',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], EvaporacionpilasdataController.registraItem);
 api.get('/evaporacionpilasdata-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasdataController.itemsTodos);
 api.get('/evaporacionpilasdata-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasdataController.itemsRangoFechas);
 api.get('/evaporacionpilasdata-rango-tiempo-real',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasdataController.itemsRangoTiempoReal);
 api.delete('/borra-evaporacionpilasdata/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasdataController.deleteItem);
module.exports = api;