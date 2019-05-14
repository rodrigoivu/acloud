'use strict'

var express = require('express');
var EvaporacionpiscinadataController = require ('../controllers/evaporacionpiscinadata');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-evaporacionpiscinadata',[md_auth.ensureAuth, md_auth.ensureAdminUserPiscina], EvaporacionpiscinadataController.registraItem);
 api.get('/evaporacionpiscinadata-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinadataController.itemsTodos);
 api.get('/evaporacionpiscinadata-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinadataController.itemsRangoFechas);
 api.get('/evaporacionpiscinadata-rango-tiempo-real',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinadataController.itemsRangoTiempoReal);
 api.delete('/borra-evaporacionpiscinadata/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinadataController.deleteItem);
module.exports = api;