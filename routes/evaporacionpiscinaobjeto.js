'use strict'

var express = require('express');
var EvaporacionpiscinaobjetoController = require ('../controllers/evaporacionpiscinaobjeto');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-evaporacionpiscinaobjeto',[md_auth.ensureAuth, md_auth.ensureAdminUserPiscina], EvaporacionpiscinaobjetoController.registraItem);
 api.put('/actualiza-evaporacionpiscinaobjeto/:id',[md_auth.ensureAuth, md_auth.ensureAdminUserPiscina], EvaporacionpiscinaobjetoController.actualizaItem);
 api.get('/evaporacionpiscinaobjeto-todos',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinaobjetoController.itemsTodos);
 api.delete('/borra-evaporacionpiscinaobjeto/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], EvaporacionpiscinaobjetoController.deleteItem);
module.exports = api;