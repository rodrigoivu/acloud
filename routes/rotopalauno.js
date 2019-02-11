'use strict'

var express = require('express');
//OJO CAMBIAR NOMBRE DE CONTROLLER SEGÚN LA CONSULTA
var RotopalaunoController = require ('../controllers/rotopalauno');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-rotopalauno',[md_auth.ensureAuth, md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.registraItem);
 api.get('/rotopalauno-todos',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.itemsTodos);
 api.get('/rotopalauno-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.itemUltimo);
 api.get('/rotopalauno-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.itemsRangoFechas);
 api.get('/rotopalauno-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.itemsRangoUltimos);
 api.delete('/borra-rotopalauno/:id',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoHumedad], RotopalaunoController.deleteItem);
module.exports = api;