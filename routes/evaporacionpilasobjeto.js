'use strict'

var express = require('express');
var EvaporacionpilasobjetoController = require ('../controllers/evaporacionpilasobjeto');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-evaporacionpilasobjeto',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], EvaporacionpilasobjetoController.registraItem);
 api.put('/actualiza-evaporacionpilasobjeto/:id',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], EvaporacionpilasobjetoController.actualizaItem);
 api.get('/evaporacionpilasobjeto-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasobjetoController.itemsTodos);
 api.delete('/borra-evaporacionpilasobjeto/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], EvaporacionpilasobjetoController.deleteItem);
module.exports = api;